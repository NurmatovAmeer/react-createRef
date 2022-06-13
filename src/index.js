import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Form} from "./components/Form";
import {Submit} from "./components/Submit";

ReactDOM.render(
  <React.StrictMode>
    <Submit />
  </React.StrictMode>,
  document.getElementById('root')
);
