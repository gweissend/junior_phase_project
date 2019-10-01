import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Schools from './Schools'
import Nav from './Nav'
import Students from './Students'
import AddStudent from './AddStudent'
import { Provider } from 'react-redux'
import store from './Store'

class App extends Component {
    constructor() {
        super() 
            this.state = {
                schools: [],
                students: []
            }
    }
    componentDidMount() {
        axios.get('/api/students')
            .then(response => response.data)
            .then(data => this.setState({students: data}));
    }

    render() {
       return (
           <Provider store={store}>
             <div>
              {/* <Nav />
                <div>
                        <Route path="/students" component={Schools} />
                        <Route path="/schools" component={Schools} />
                    
                </div> */}
                <AddStudent />
               <Schools />
               <Students />
               </div>
            </Provider>       
       );
    }
 }


export default App;