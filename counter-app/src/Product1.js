
import React from "react";

 class Product1 extends React.Component {
    state = {
        name:'Surya',
        age:21
      }
    render(){
  return (
    <div>
    <center><button>click me</button></center>
        <center><h1> <h1>Name : {this.state.name}  and age:{this.state.age}  </h1></h1></center>
    </div>
  )
}
 }
export default Product1;