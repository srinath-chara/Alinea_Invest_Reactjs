import React from 'react'
import './Header.css';
import Logo from './assets/logo.svg'
import Name from './assets/ALINEA INVEST.svg'
import Googlelogo from './assets/googlelogo.svg'
import Hr from './assets/hr.svg'
import Stocklist from './Stocklist'
import Watchlist from './Watchlist'
import Slide from './Slide'

const Alpaca = require('@alpacahq/alpaca-trade-api')

const apiKeyId='PKS2CNECTKYCB8PKBG9Z'
const secretKey='x3eWqLrTdlT0vzc9J40pU721Drd2Z0qfGftn42Wr'

const alpaca = new Alpaca({
    keyId: apiKeyId,
    secretKey: secretKey,
    paper: true,
    usePolygon: false
})

alpaca
        .getAggregates(
            'AAPL',
            'day',
            '2020-03-12',
            '2020-10-12'
        )
        .then(data => {
            console.table(data.results)
        }).catch((e) => {
            console.log(e)
        })

class Header extends React.Component {
    constructor(){
        super()
        this.state={
            home_isactive:true,
            watch_list_isactive:false,
            slide:false,
            onclose:true,
            signedin:false,
            
        }
        this.homeclick=this.homeclick.bind(this)
        this.watchclick=this.watchclick.bind(this)  
        this.slide=this.slide.bind(this)     
    }
  
  homeclick(e){
    e.preventDefault()
    this.setState(prev=>{
      return{home_isactive: true,
      watch_list_isactive: false,
      }
    })

  }
  watchclick(e){
    e.preventDefault()
    if(this.state.signedin){
    this.setState(prev=>{
      return{home_isactive: false,
      watch_list_isactive: true}
    })}
    else
     {this.setState(prev=>{
      return{slide:true}
    })}
  }

  slide(e){
    e.preventDefault()
    this.setState(prev=>{
      return{slide:true}
    })

  }
  
  render(){
    const homecolor={color:'#AE42C9', borderBottom:'3px solid #AE42C9',paddingBottom:'42px'} 
    const watchcolor={color:'#AE42C9',borderBottom:'3px solid #AE42C9',paddingBottom:'42px'}
    let content=<Stocklist /> 
    let dialog=<Slide slide={this.state.slide} onclose={(e)=>this.setState({slide:false})} googlebuttonclose={(e)=>this.setState({signedin:true})} />
    let googlebutton=(<button onClick={this.slide} className="googlebutton" >
    <h3 className="Header__google">Continue with Google</h3>
    <img alt='googlelogo' className="Header__google__logo" src={Googlelogo} />
   </button>)

   
  if(this.state.signedin){
   googlebutton=null
  
  }
    if(!this.state.slide)
     dialog=null
    
    if(!this.state.home_isactive&&this.state.signedin){
     homecolor.color='black'
     homecolor.borderBottom='none'
     content=<Watchlist />
     
    }
    else
     {homecolor.color='#AE42C9'
     homecolor.borderBottom='3px solid #AE42C9'
     
    }
    if(!this.state.watch_list_isactive){
     watchcolor.color='black'
     watchcolor.borderBottom='none'
    }
    else{
    watchcolor.color='#AE42C9'      
    watchcolor.borderBottom='3px solid #AE42C9'
  }
    return (
   <div className="Header__wrap"> 
    <div className='line'>
         <img alt='line' style={{position:'relative',top:'12px',width:'1340px'}}src={Hr} />
     </div>  
     <div className="Header__logo">
      <img alt='logo' src={Logo} />
     </div>

     <div className="Header__name">
       <img alt='name' src={Name} />
     </div>

     <div className="Header__Home">
       
           <button onClick={this.homeclick} className="Header__Home" ><h3 title='You can view Popular Stocks here' style={homecolor} className="Header__Home">Home</h3>
           
          
         </button>
     </div>

     <div className="Header__Watchlist">
        <button onClick={this.watchclick} className="Header__Watchlist" >
            <h3 title='You can view your saved Stocks here in this Watchlist' style={watchcolor} className="Header__Watchlist">Watchlist</h3>
             
        </button>     
     </div>

     <div className="Header__google__wrap">
       {googlebutton}
     </div>
    <div style={{position:'relative',top:'10px'}}>{content}</div>
    <div >{dialog}</div>
   </div>
  )
 }
}

export default Header;
