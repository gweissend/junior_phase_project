import React from 'react'
import axios from 'axios'

class AddStudent extends React.Component {
    constructor() {
        super()
            this.state = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    GPA: "",
                    schoolId: ""
            }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        axios.post('/api/schools', this.state)
            .then(response => response.data)
            .then(alert("Student Added :)"))
            .catch(error => alert(error))
    }
    render() {
        return (
            <div>
                <h1>Add Student</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>First Name:</label>
                        <br />
                        <input 
                        type="text"
                        name="firstName"
                        onChange = {this.onChange}
                        value={this.state.firstName} />
                        <br /> 
                        <input 
                        type="text"
                        name="lastName"
                        onChange = {this.onChange}
                        value={this.state.lastName} />
                        <br /> 
                        <input 
                        type="text"
                        name="email"
                        onChange = {this.onChange}
                        value={this.state.email} />
                        <br /> 
                        <input 
                        type="text"
                        name="GPA"
                        onChange = {this.onChange}
                        value={this.state.GPA} />
                        <input 
                        type="button"
                        name="Submit"
                        onClick = {this.onSubmit} />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddStudent
