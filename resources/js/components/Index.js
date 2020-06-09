import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import Myrouter from './Myrouter';

function Index() {
    return (
        <div className="container">
            <Myrouter/> 
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
