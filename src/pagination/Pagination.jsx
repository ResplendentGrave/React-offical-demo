import React from "react";
import style from "./pagination.module.css";
import {Button} from "antd";



export default class Pagination extends React.Component{
constructor(props){
 super(props);
 this.state={
  currentPage:1
 }
}

 // handlePaging=(event)=>{

 // }

 creatPage=()=>{
  const {currentPage} = this.state;
  const {pageCount} = this.props;
   let pages =[];
    
  for (let i = 1; i <= pageCount; i++) {
   if(currentPage==i){
   pages.push(<div key={i} className={style.wrapperC} onClick={this.handlePageChange}>{i}</div>)}
   else{
   pages.push(<div key={i} className={style.wrapperN} onClick={this.handlePageChange}>{i}</div>)
   }
  }
    return pages;
 }

componentDidUpdate(){
  this.props.onP(this.state.currentPage);
}

 handlePageChange=(event)=>{

  this.setState({currentPage:event.target.innerText});

 }
 handlePagePre=()=>{
  if(this.state.currentPage==1) return false
  this.setState({currentPage:Number(this.state.currentPage)-1});
 }
 handlePageNext=()=>{
  const pageCount=this.props.pageCount;
  if(this.state.currentPage==pageCount) return false
  this.setState({currentPage:Number(this.state.currentPage)+1});
 }
 render(){
  const pageList=this.creatPage();
  return( <div>
    <div className={style.container}>
    <div className={style.wrapperL} onClick={this.handlePagePre}>{"<"}</div>
    {pageList}
    <div className={style.wrapperR}  onClick={this.handlePageNext}>{">"}</div>
   
   </div>
    <div><Button danger={true} disabled type={"primary"}>AAAAA</Button></div>
  </div>
   
   

  )
 }
}