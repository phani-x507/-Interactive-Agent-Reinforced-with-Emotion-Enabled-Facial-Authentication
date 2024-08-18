import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginpage() {

  const login_handler = e =>{
    e.preventDefault()
    alert("Welcome")
  }

  return (
    <div >
      <div className='container-fluid  '>
      <div className=' container-fluid d-flex align-items-center flex-column min-vh-90 min-vw-90 '   >
      <div className='p-2 mx-auto my-5 w-75 login_main d-flex justify-content-center enable_shadows   ' style={{"background-color":'white'}}>
            <div className='w-50 d-flex align-items-center'   style={{"background-color":'black '}} >
            <img  src='https://static.vecteezy.com/system/resources/thumbnails/028/713/714/small_2x/alone-male-in-in-the-room-cartoon-illustration-art-free-photo.jpg' style={{'max-height':'400px'}} className='img-fluid'  width="100%" height="100%"  alt='SideImg' />
            </div>


            {/* Login Details */}
            <div className='w-50  px-3 b-2 d-inline-block' >
                <h1 className='pt-3 px-3 h2'><strong>Login</strong></h1>
                <p className='lead p-2 px-3 text-secondary' style={{"font-size":'12px'}} >Welcome to Interactive agent Reinforced with Emotion-Enabled Facial Authentication Chatbot </p>
                {/* <p className='lead fs-6 text-secondary px-4' >Username : </p> */}


                <form onSubmit={login_handler}>
                <div className=' p-2 d-flex align-items-center  justify-content-center  '>
                <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' className='mx-2' alt=''style={{'max-height':'30px'}} />
                <input type='text' className='textbox1 w-50'  placeholder='Enter Username' />
            </div>

            <div className=' p-2 d-flex align-items-center justify-content-center ' >
                <img src='https://icons.veryicon.com/png/o/miscellaneous/remitting-country-linear-icon/password-148.png' alt='' className='mx-2' style={{'max-height':'30px'}} />
                <input type='password' className='textbox1 w-50' placeholder='Enter Password' />
            </div>

            <p className='p-4 h6 '><small>Enter Captcha</small></p>

            <div className='d-flex w-75 mx-auto  align-items-center justify-content-center'>
              <div className='w-25'>
              <img src='https://blog.c22.cc/wp-content/uploads/2010/10/input-black.gif' className='img-fluid' alt='' /></div>
              <div  className='w-75'>
              <input type='text' className='textbox1' placeholder='Enter Captcha' style={{'border-bottom':'2px solid blue','width':'50%'}} />
              </div>
            </div>
            <div className='d-flex  my-3 justify-content-end' >
              <input type='submit' className='btn btn-danger mx-4  my-2 ' style={{'border-radius' : '2px' ,'font-size':'13px'}}  value="Sign In" /></div>
            </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
