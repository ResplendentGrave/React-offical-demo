import React from "react";
import SearchTable from "./searchTable/SearchTable";
import ProductTable from "./productTable/ProductTable";
import style from "./style.module.css"

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:props.products,
      inStockOnly:false,
      userInput:''
    };
  }
  handleSearch=(event)=>{
    const products = this.props.products;
    const userInput = event.target.value;
    this.setState({userInput:userInput})
    this.setState({data:products.filter((i)=>{
        if(this.inStockOnly&&!i.stocked){
          return false
        }
        return i.name.includes(userInput); 
    })})
  };

  handleStocked=(inStockOnly)=>{
    console.log(1);
    this.setState({ inStockOnly: inStockOnly.target.checked })
    this.setState({
      data: this.props.products.filter((i) => {
        if (inStockOnly.target.checked&&!i.stocked) {
          return false
        }
          return i.name.includes(this.state.userInput); 
      })
    })

  }
 render(){
   return(
     <div className={style.filterable_table}>
       <SearchTable handleSearch={this.handleSearch}  inStockOnly={this.state.inStockOnly} handleStocked={this.handleStocked}/>
       <ProductTable products={this.state.data} />

     </div>
   );
 }
}

export default FilterableProductTable;