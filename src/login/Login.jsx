import React from "react";
import LoginTable from "./loginTable/LoginTable";

export default class Login extends React.Component{
 constructor(props){
  super(props);
 this.state={
  name:'',
  password:''
  }
 }

 handleNameChange=(event)=>{
  return this.setState({name:event.target.value});
 
 }

 handlePasswordChange=(event)=>{
  return this.setState({password:event.target.value});
 }

remindLogin=(a,b)=>{
 alert(a+''+b)

 // alert(`登录成功，用户名：${this.state.name}密码：${this.state.password}`);
}


 render(){ 
  return (
   <div>
     <LoginTable 
      loginTitle={"LOGIN"}
      remindLogin={this.remindLogin}
     />
   </div>
  )
 }
}