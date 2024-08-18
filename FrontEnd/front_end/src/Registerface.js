import React, { useState } from 'react'
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};


function Registerface() {
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
      }, [webcamRef]);

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
                            <h1 className='pt-3 px-3 h2 text-center'><strong>Register Face</strong></h1>
                            <div className="webcam-container">
                                <div className="webcam-img">

                                    {image == '' ? <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={220}
                                        videoConstraints={videoConstraints}
                                    /> : <img src={image} />}
                                </div>
                                <div>
                                    {image != '' ?
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            setImage('')
                                        }}
                                            className="webcam-btn">
                                            Retake Image</button> :
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            capture();
                                        }}

                                            className="webcam-btn">Capture</button>
                                    }
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-success'>Capture</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerface
