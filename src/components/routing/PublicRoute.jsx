import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home/Home';
import ErrorPage from '../../views/ErrorPage/ErrorPage';
import List from '../../views/List/List';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="profile" element={<List/>}/>
                
            </Routes>
        </Router>
      );
    }
  }
