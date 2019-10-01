import React, { Component } from 'react';
import axios from 'axios'

class Students extends Component {
    constructor(props) {
        super(props)
            this.state = { 
                students: []
            } 
    }
    componentWillMount() {
        axios.get('/api/students')
        .then(response => response.data)
        .then(data => this.setState({students: data}));
    }

    render() {
        const students = this.state.students.map(student => (
                            <div key={student.id}>
                                <h1>{student.firstName}{student.lastName}</h1>
                                <p>{student.email}</p>
                                <p>{student.GPA}</p>
                            </div>));
        return (  
           <div>
               <h1>Students</h1>
               {students}
           </div>
        );
    }

}

export default Students