import React from "react";
import style from "./style.module.css"

class SearchTable extends React.Component{
  constructor(props){
    super(props);
  }
 render(){
   const {handleSearch,handleStocked,inStockOnly} = this.props;

  return (
   <div className={style.a}>
    <form >
     <div>
      <input type={'text'} placeholder={'search...'} style={{height:24}} onChange={handleSearch}/>
     </div>
     
     <div>
       <input type={'checkbox'} checked={inStockOnly} onChange={handleStocked}/>{' '}Only show products in stock.
      </div>
    </form>
   </div>
  );
 }
}
export default SearchTable;