import React from "react";

export default class LoginTable extends React.Component{
 constructor(props){
  super(props)
  this.state={
   userName:'', 
   userPassword:''
  }
 }
 render(){
  const {remindLogin} = this.props;
  const {loginTitle} = this.props;
  return(
   <div>
    <form align='center' action="">
     <dl>
      <dt><h2>{loginTitle}</h2></dt>
      <dt>用户名：<input type={"text"} 
       value={this.state.userName}
       onChange={(e)=>{
         this.setState({userName:e.target.value})
       }} /></dt>
      <dt> 密 码 ：<input type={"password"} autoComplete={'off'}
       value={this.state.userPassword}
       onChange={(e)=>{
        this.setState({userPassword:e.target.value})
      }} /></dt>
      <dt>
       <button type={"button"}
        onClick={() => {
         console.log(this.state.userName,this.state.userPassword);
         
          remindLogin(this.state.userName,this.state.userPassword)
        }}
       >
        LOG IN
       </button></dt>
     </dl>
    </form>
   </div>
  )

 }
}