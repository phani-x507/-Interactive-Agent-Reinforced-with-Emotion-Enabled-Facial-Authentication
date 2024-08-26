import React,{useState} from 'react'
import { redirect, useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'


function Home() {
    const [login,setLogin] = useState(false)
    const location = useLocation()
    const id = location.state.id;
    let is_loggedin = location.state.isLoggedin
    const his = useNavigate()
    
const logout_handler =  async(e) =>{
  e.preventDefault()
  const logout_data = {
    id,is_loggedin
  }
    try{
    await axios.post('http://127.0.0.1:5000/logout',{
      id,is_loggedin
    }).then(res => {
      
      alert(res.data['msg'])
      setLogin(false)
      his('/login')
    }
      
    )
}catch(e){
  alert("error Occured")
}
}

if (is_loggedin === true){
  return (
    
    <div>
      <h1>{location.state.id}</h1>
      <form onSubmit={logout_handler}>
        <input type='submit' value="Logout" />
      </form>
    </div>
  )
}else{



  return redirect('/login')
}
}


export default Home
