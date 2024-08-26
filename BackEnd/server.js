const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3500
app.use(express.json())
dotenv.config()
app.use(cors());
SECRET_KEY = process.env.SECRET_KEY
mongoose.connect(
    process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const reg_schema = new mongoose.Schema({
    uname:String,
    fullname:String,
    email:String,
    mobileno:String,
    password:String

})

const db1_1 = mongoose.model('db1_1',reg_schema);


app.post('/register_user',(req,res)=>{
    const{uname,pass,fullname,mobileno,email} = req.body
    const reg_user = new db1_1({
        uname:uname,
        password:pass,
        fullname:fullname,
        mobile:mobileno,
        email:email,
        
        
    })
    reg_user.save().then(()=> console.log("Successful"),(err)=>console.log(err))
})


app.post('/login_user', async (req,res)=>{
    const {uname,pass} = req.body
    try{
        const user = await db1_1.findOne({uname:uname})
        if (!user){
            return res.status(404).json({'msg':'Not Found'})
        }else{
            if (user.password == pass){
              var token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60),uname:user['uname'],email:uname['email']},SECRET_KEY)
              res.send(token)

            }else{
               return res.json({'msg':'Incorrect Details'})
            }
        }
        
        
    }catch(e){
        res.status(500).json({ message: 'Error fetching user', error });
        
    }
}

)



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login',(req,res)=>{

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))