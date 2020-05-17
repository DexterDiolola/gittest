import React, { Component } from 'react'
import Navbar from './Navs/Navbar'
import {Redirect} from 'react-router-dom'
import firebase from '../config/firebaseConf'


export class Mian extends Component {
    state = {
        isAuthenticated : null
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(response =>{
            if(response === null){
                this.setState({isAuthenticated : false});
            }
            else{
                 this.setState({isAuthenticated : true});
            }
            console.log(response)
        })
    }
    render() {
        if(this.state.isAuthenticated === null){
            return(
                <div>
                    <h2>Now Loading. . .</h2>
                </div>
            )
        }
        else if(this.state.isAuthenticated === false){
            return(
                <>
                    <Redirect to={'/login'}/>
                </>
            )
        }
        return (
            <div>
                <Navbar child={this.props.children}/>
            </div>
        )
    }
}

export default Mian
