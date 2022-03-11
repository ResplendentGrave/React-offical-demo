import React from "react";

export default class Search extends React.Component {
 constructor(props) {
  super(props)

 }
 render() {
  const {handleSubmit} = this.props
  return (
   <>
    <input onChange={handleSubmit}></input>
   </>)
 }
}