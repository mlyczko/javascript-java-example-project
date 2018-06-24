
/* DO NOT EDIT THIS FILE !!! */

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import './scss/App.scss';
import App from "./containers/App/App.js";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,

    document.getElementById("root")
);

//I guess we don't need it here
//module.hot.accept();
