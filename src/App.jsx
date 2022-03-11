import React, { PureComponent } from 'react'
import axios from 'axios'

export default class App extends PureComponent {
 constructor(props){
  super(props);
  this.state={
   products:[]
  }
 }
 componentDidMount(){
  const request1 = axios.get("http://httpbin.org/get",{
   params:{
    name:"hu",
    age:20
   }});
   const request2 = axios({
    url:"http://httpbin.org/post",
    data:{name:"xi",age:20},
    method:"post"
   })
  axios.all(request1,request2).then(([res1,res2])=>{
   console.log(res1,res2);
  })
 }
 // async componentDidMount(){

 //  try{
 //   const result = await axios.get("http://httpbin.org/get",
 //  {params:{
 //   name:'hu',
 //   age:20
 //  }}
 //  )
 //  console.log(result);
 // }catch(err){
 //  console.log(err);
 // }}
 // axios({
 //  url:"http://httpbin.org/get",
 //  params:{
 //   name:"why",
 //   age:18
 //  }
 // }).then(res=>{
 //  console.log(res);
 // }).catch(err=>{
 //  console.error(err);
 // });
 // axios({
 //  url:"http://httpbin.org/post",
 //  data:{
 //   name:"hu",
 //   age:20
 //  },
 //  method:"post"
 // }).then(res=>{
 //  console.log(res);
 // }).catch(err=>{
 //  console.error(err);
 // })
 // }
  render() {
    return (
      <div>App</div>
    )
  }
}
