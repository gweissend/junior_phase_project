import React, { Component } from 'react';
import { fetchSchools } from './store/actions'
import axios from 'axios'

class Schools extends Component {
    constructor(props) {
        super(props)
            this.state = {
                schools: []
            } 
    }
    componentWillMount() {
        fetchSchools()
    }

    render() {
        const schools = this.state.schools.map(school => (
                            <div key={school.id}>
                                <h1>{school.name}</h1>
                                <img src={school.imageURL} height="100" width="100"/>;
                            </div>));
        return (  
           <div>
               <h1>Schools</h1>
               {schools}
           </div>
        );
    }

}

export default connect({schools}, {users})