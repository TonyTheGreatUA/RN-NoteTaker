import React, {Component} from 'react';
import Home from './components/Home/Home.component';
import {connect} from 'react-redux';

class App extends Component{
    render(){
        return(
            <Home />
        );
    }
}

export default connect(null, null)(App);