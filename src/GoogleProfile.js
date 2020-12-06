import React from 'react'
import firebaseDb from './firebase'


class GoogleProfile extends React.Component{
    constructor(){
        super()
        this.state={
            user:[]
        }
    }

    render(){
        firebaseDb.database().ref("user").on("value", snapshot => {
            let user = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                user.push(snap.val());
            });
            this.setState({ user: user });
          });

         return(<div> {this.state.user.name}</div>)
        
        
     
        
}}

export default GoogleProfile