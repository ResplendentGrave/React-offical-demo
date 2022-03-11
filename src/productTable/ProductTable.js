import React from "react";
import ProductCategoryRow from "./productCategoryRow/ProductCategoryRow.js";
import ProductRow from "./productRow/ProductRow.js";

export default class ProductTable extends React.Component{
constructor(props){
  super(props);
}
 render(){
  const {products} = this.props;
  const rows = [];
  let lastCategory = null;


  products.map((product) => {
    
   if (product.category !== lastCategory) {
    rows.push(
      <ProductCategoryRow
        category={product.category}
        key={product.category} />
      );
     };
     lastCategory = product.category; 
   rows.push(
    <ProductRow
      product={product}
      key={product.name} />
    );

     
          
  });
  return(
   <table>
    <tr>
     <th>NAME</th>
     <th>PRICE</th>
    </tr>
    
    <tbody>{rows}</tbody>

    </table>
   
  )
 }
}


