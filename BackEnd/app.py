import os
import base64
from flask import Flask, request, jsonify,session, redirect
from flask_session import Session
from flask_cors import CORS
from datetime import datetime
import sqlite3

conn = sqlite3.connect("./static/users_db.db",check_same_thread=False)

conn.row_factory = sqlite3.Row
table  = 'logindata'
logged_in = []
app = Flask(__name__)
CORS(app)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


SAVE_DIR = "saved_images"
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

@app.route('/upload_image', methods=['POST','GET'])
def upload_image():
    data = request.json
    image_data = data['data']  

    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    image_bytes = base64.b64decode(image_data)

    image_filename = datetime.now().strftime("%Y%m%d%H%M%S") + ".jpg"
    image_path = os.path.join(SAVE_DIR, image_filename)

    with open(image_path, 'wb') as image_file:
        image_file.write(image_bytes)

    return jsonify({"message": "Image saved successfully!", "image_path": image_path}), 200



# Code for login
@app.route('/login_details', methods = ['POST','GET'])
def fetch_login():
    data = request.json
    uname = data['uname']
    password  = data['pass']
    cursor = conn.cursor()
    cursor.execute(f'Select * from  logindata where uname = "{uname}" and pass = "{password}"')
    data1 = cursor.fetchone()
    data1 = dict(data1)
    full_name = data1['fullname']
    id = data1['id']
    
    # Creating a Session
    session['id'] = id
    cursor.close()
    
    return jsonify({"fullname":full_name,'id':session['id'] ,"is_loggedin":True,"response":'exist'})



# Code for Registration
@app.route('/register_user', methods = ['GET','POST'])
def reg_user():
    data = request.json
    uname = data['uname']
    password = data['pass']
    fullname = data['fullname']
    email = data['email']
    mobile  = data['mobileno']
    
    cursor = conn.cursor()
    try:
        cursor.execute(f'insert into logindata (uname,pass,fullname,mobileno,email)  values("{uname}","{password}","{fullname}","{mobile}","{email}")')
    except:
        return jsonify({"response":"There is an error from server"})
    conn.commit()
    return jsonify({"response":"done"})

@app.route('/logout', methods = ['GET','POST'])
def logout():
    data = request.json
    id = data['id']
    session['id'] = None
    
    return jsonify({'msg':"Successfull"})

if __name__ == '__main__':
    app.run(debug=True)