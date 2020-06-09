import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:""
        }
    }
    onchangehan=(e)=>{
        
               const nam=e.target.name;
               const val=e.target.value;
               this.setState({[nam]:val});
    }
    sub=(e)=>{
        e.preventDefault();
        axios.post('https://laravelreactcrud.herokuapp.com/store',this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log('err');
        })
    }
    
    render() {
        return (
            <form onSubmit={this.sub}>
                <div>
                <input name="name" type="text" className="form-control"  onChange={this.onchangehan}/>
                <br>
                </br>
                <input name="email" type="email"  onChange={this.onchangehan}/>
                <br></br>
                <input name="submit" type="submit"/>
               
                </div>
            </form>
           
               
        );
    }
}

export default Form;