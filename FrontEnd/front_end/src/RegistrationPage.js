import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationPage() {
    return (
        <div >
            <div className='container-fluid  '>
                <div className=' container-fluid d-flex align-items-center flex-column min-vh-90 min-vw-90 '   >
                    <div className='p-2 mx-auto my-5 w-75 login_main d-flex justify-content-center enable_shadows   ' style={{ "background-color": 'white' }}>
                        <div className='w-50 d-flex align-items-center' style={{ "background-color": 'black ' }} >
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/028/713/714/small_2x/alone-male-in-in-the-room-cartoon-illustration-art-free-photo.jpg' style={{ 'max-height': '400px' }} className='img-fluid' width="100%" height="100%" alt='SideImg' />
                        </div>


                        {/* Login Details */}
                        <div className=' w-50  b-2 d-inline-block px-2 ' >
                            <h1 className='pt-3 px-3 h2 text-center'><strong>Registration</strong></h1>
                            <p className='lead p-2 px-5 text-secondary' style={{ "font-size": '12px' }} >Welcome to Interactive agent Reinforced with Emotion-Enabled Facial Authentication Chatbot Registration </p>
                            {/* <p className='lead fs-6 text-secondary px-4' >Username : </p> */}

                            <p className='px-5'>Please Fill The Details</p>
                            <form >
                                {/* Full Name  */}
                                <div className=' p-2 d-flex align-items-center justify-content-center   '>
                                    <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' className='mx-2' alt='' style={{ 'max-height': '30px' }} />
                                    <input type='text' className='textbox1 w-50' placeholder='Fullname' />
                                </div>

                                {/* Username  */}
                                <div className=' p-2 d-flex align-items-center justify-content-center    '>
                                    <img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' className='mx-2' alt='' style={{ 'max-height': '30px' }} />
                                    <input type='text' className='textbox1 w-50' placeholder='Username' />
                                </div>
                                {/* Mobile Number */}
                                <div className=' p-2 d-flex align-items-center justify-content-center  ' >
                                    <img src='https://static.vecteezy.com/system/resources/previews/011/047/522/non_2x/smartphone-and-mobile-phone-free-png.png' alt='' className='mx-2' style={{ 'max-height': '30px' }} />
                                    <input type='number' className='textbox1 w-50' placeholder='Mobile Number' />
                                </div>

                                {/* Password */}
                                <div className=' p-2 d-flex align-items-center justify-content-center  ' >
                                    <img src='https://static.vecteezy.com/system/resources/previews/021/454/517/non_2x/email-confirmation-app-icon-email-icon-free-png.png' alt='' className='mx-2' style={{ 'max-height': '30px' }} />
                                    <input type='email' className='textbox1 w-50' placeholder='Email' />
                                </div>

                                {/* Password */}
                                <div className=' p-2 d-flex align-items-center justify-content-center  ' >
                                    <img src='https://icons.veryicon.com/png/o/miscellaneous/remitting-country-linear-icon/password-148.png' alt='' className='mx-2' style={{ 'max-height': '30px' }} />
                                    <input type='password' className='textbox1 w-50' placeholder='Enter Password' />
                                </div>

                                {/* Password */}
                                <div className=' p-2 d-flex align-items-center justify-content-center  ' >
                                    <img src='https://icons.veryicon.com/png/o/miscellaneous/remitting-country-linear-icon/password-148.png' alt='' className='mx-2' style={{ 'max-height': '30px' }} />
                                    <input type='password' className='textbox1 w-50' placeholder='Confirm Password' />
                                </div>


                                {/* Captcha And Details */}
                                <p className='px-5 py-2  h6'><small>Enter Captcha</small></p>

                                <div className='d-flex w-75 mx-auto  align-items-center '>
                                    <div className='w-25'>
                                        <img src='https://blog.c22.cc/wp-content/uploads/2010/10/input-black.gif' className='img-fluid' alt='' /></div>
                                    <div className='w-75'>
                                        <input type='text' className='textbox1' placeholder='Enter Captcha' style={{ 'border-bottom': '2px solid blue', 'width': '50%' }} />
                                    </div>
                                </div>
                                <div className='d-flex p-3 justify-content-center'>
                                <input type='checkbox' value="" />&nbsp; &nbsp;I Agree Terms and Conditions
                                </div>
                                <div className='d-flex   mx-auto justify-content-center' >
                                    <input type='submit' className='btn btn-danger mx-4  my-2' style={{ 'border-radius': '2px', 'font-size': '13px' }} value="Register" /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
