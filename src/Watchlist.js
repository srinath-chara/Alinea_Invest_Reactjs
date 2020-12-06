import React from 'react'
import WatchInfo from './WatchInfo'
import StockItem from './StockItem'
import './StockItem.css'

class Watchlist extends React.Component{
   
   
  
 
render(){
    
     let watchlist= WatchInfo.map((item)=><StockItem logo= {item.logo} name={item.name} price={item.price} diff={item.diff}/>)
     if(WatchInfo.length===0)
      watchlist=<div className='nostock'>No Stocks Found Here</div>

 return (
<div className="Stocklist">
    <div className="Watchtopic">Watchlist</div>
    <div className="Stockheadleft">COMPANY</div>
    <div className="Stockheadright">MARKET PRICE</div>
    <div className="Stockdata"><div className="Stocklist">{watchlist}</div></div>
</div>

 )

 
}
}
export default Watchlist