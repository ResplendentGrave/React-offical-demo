import React from "react";

export default class ProductCategoryRow extends React.Component{
 render(){
  const category = this.props.category;
  return(
   <tr colSpan='2'>
    <th>{category}</th>
   </tr>
  );
 }
}