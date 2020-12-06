import React from 'react'
import slide from './assets/slide.svg'
import backdim from './assets/backdim.svg'
import slideclose from './assets/slideclose.svg'
import './StockItem.css'
import GoogleLogin from 'react-google-login'
import Googlelogo from './assets/googlelogo.svg'
import './Header.css'
import firebaseDb from './firebase'

class Slide extends React.Component{
   constructor(){
     super()
     this.state={loggedin:false,imageurl:'',name:'',user:[]}
     this.responseGoogle=this.responseGoogle.bind(this)
   }
    
    responseGoogle=(response)=>{
      
    
     this.props.googlebuttonclose()
     this.setState({loggedin:true,imageurl:response.profileObj.imageUrl,name:response.profileObj.givenName})
     firebaseDb.database().ref().child('user').push(
      this.state,
       err=>{
         if(err) console.log(err)
       }
    )


   
   }
 


  render(){
    
    
    let login=( <div style={{position:'fixed',zIndex:'100',left:'150px',bottom:'40px' }} >
      <img style={{position:'fixed',right:'0px',bottom:'2px',zIndex:'-1'}} src={backdim}/>
      
      <img  src={slide}/>
    
      <button onClick={this.props.onclose}  >
        <img className='closebutton' style={{position:'relative',bottom:'472.25px',right:'58px',zIndex:'300'}}src={slideclose}/>
      </button>  
      <div className="login" style={{position:'relative',bottom:'50px'}}>{<GoogleLogin
      clientId="752764198069-8i3kc7jpjqtokqnncbufom38o8pqtqcs.apps.googleusercontent.com"

      render={renderProps => (
        <div className="Header__google__wrap" style={{position:'relative',bottom:'275px',right:'399px'}}>
       <button onClick={renderProps.onClick} className="googlebutton" >
         <h3 className="Header__googlesignin">Continue with Google</h3>
         <img className="Header__google__logo" src={Googlelogo} />
        </button>
     </div>
        
      )}

      buttonText="Connect With Google"
      onSuccess={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
      />}</div>
  </div>)
  if(this.state.loggedin)
      login=(<div style={{position:'absolute',left:'1170px',bottom:'565px'}}><h3 className='Username'>{this.state.name}</h3><img style={{borderRadius:'50%',width:'65px'}} src={this.state.imageurl}/></div>)
  return(
  <div >{login}</div>
       
        )
  }

}

export default Slide