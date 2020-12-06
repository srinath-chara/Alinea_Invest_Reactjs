import React from 'react'
import './StockItem.css'
import stockline from './assets/stockline.svg'

class StockItem extends React.Component{

    render(){
        return(
            <div className="StockItem">
              
              <img className="stockline" src={stockline}/>  
              <img className="logo" src={this.props.logo} />
              <div className="name">{this.props.name}</div>
              <div className="price">{this.props.price}</div>
              <div className="usd">USD</div>
              <div className="diff">{this.props.diff}</div>
            </div>
        )
    }
}

export default StockItem