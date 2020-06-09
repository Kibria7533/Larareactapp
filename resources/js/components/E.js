import React, { Component } from 'react';

class E extends Component {
    constructor(){
        super();
        this.state={
            id:"",
           name:"",
           email:""
        }
    }
    componentDidMount() {
        let id=this.props.match.params.id;
        axios.get(`https://laravelreactcrud.herokuapp.com/getdata/edit/${id}`)
            .then(res => {
                console.log()
                this.setState({
                    'id':res.data[0].id,
                    'name':res.data[0].name,
                    'email':res.data[0].email
                })
               
            })
            
    }
    esub=e=>{
        e.preventDefault();
        axios.post('https://laravelreactcrud.herokuapp.com/update',this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log('err');
        })
    }
    upt=e=>{
        const na=e.target.name;
        const va=e.target.value;
        this.setState({[na]:va});
        
    }
    render() {
        return (
            <div>
               
              
                  
                       <form  onSubmit={this.esub}>
                           <div >
                           <label>Edite your name</label>
                       <input name="name" type="text" onChange={this.upt} value={this.state.name}   ></input>
                       <label>Edite your email</label>
                       <input name="email" type="email" onChange={this.upt} value={this.state.email} ></input>
                       <button type="submit">edit</button>
                       </div>
                       </form>
                   
             
            </div>
        );
    }
}

export default E;