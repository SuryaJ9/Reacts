import React,{useState} from 'react'
import './App.css'
const App = () => {
  const[data,setData] = useState({
    email:'',
    password:''
  })
  const changeHandler = e => {
    setData({data,[e.target.name]:e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className='hello'>
      <center >
      <form>
        <label>E-mail</label><br/>
        <input type="text" name="email" onChange={changeHandler} required/><br/>
        <label>Password</label><br/>
        <input type="password" onChange={changeHandler} minLength={8}/><br/><br/>
       
        <input type="submit" value ="Login"  /><br/>
      </form>
      </center>
    </div>
  )
}

export default App