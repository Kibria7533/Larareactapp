import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
class Table extends Component {
    constructor(){
        super();
     this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        axios.get('https://laravelreactcrud.herokuapp.com/getdata')
            .then(res => {
                this.setState({ data: res.data });
            })
            
    }
    
    del=(e)=>{
        const id=e.target.value;
        const data=this.state.data.filter(data=>data.id!=id);
         this.setState({data:data});
        axios.delete('https://laravelreactcrud.herokuapp.com/delete/'+id)
        .then(re=>{ 
         
        })

    }
    upt=(e)=>{
        alert(e);
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(data => {
                            return (
                               
                                <tr key={data.id}>
                                
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><button value={data.id} onClick={this.del}>Delete</button></td>
                            <td><Link onChange={this.upt}to={`/edit/${data.id}`}>Update</Link></td>
                            </tr>
                           
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;