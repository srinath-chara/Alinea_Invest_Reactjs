import React from 'react'
import StockInfo from './StockInfo'
import StockItem from './StockItem'
import './StockItem.css'

class Stocklist extends React.Component{
   
   
  
 
render(){
    const stocklist= StockInfo.map((item)=><StockItem logo= {item.logo} name={item.name} price={item.price} diff={item.diff}/>)

 return (
<div className="Stocklist">
    <div className="Stocktopic">Popular Stocks</div>
    <div className="Stockheadleft">COMPANY</div>
    <div className="Stockheadright">MARKET PRICE</div>
    <div className="Stockdata"><div className="Stocklist">{stocklist}</div></div>
</div>

 )

 
}
}
export default Stocklist