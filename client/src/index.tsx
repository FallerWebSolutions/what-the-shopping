import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const HelloWorld = () => {
    return (
        <App/>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));