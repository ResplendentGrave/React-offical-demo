import React from "react";
import Search from "./Search";

export default class Demo extends React.Component{
 constructor(props) {
  super(props)
  this.state={
   data:props
  }
 }
  handleSubmit=(event)=>{
   const value = this.props.products
   const search = event.target.value
   let out 
   out = value.filter((i)=>{
    return i.name.includes(search)
   })
   console.log(out);
  }
 render() {
  return (
   <>
   <Search handleSubmit={this.handleSubmit}></Search>
   </>
 )
 }
}