import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event){
        console.log(event.target.value)   
        console.log(event.target.name);     
        const{value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.form);
        this.props.add(this.state.form);
    }
    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }
    render(){
        const{firstName, lastName, phone, email} = this.state.form;

        return (
            // <form onSubmit={this.handleSubmit}>
            //     <div className="form-group">
            //         <label>First Name </label>
            //         <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text"className="form-control"/>
            //     </div>
            //     <div className="form-group">
            //         <label>Last Name </label>
            //         <input onChange={this.handleInputChange} value={lastName} name="lastName" type="text" className="form-control" />
            //     </div>
            //     <button>Add Contact</button>
            // </form>


            <form onSubmit={this.handleSubmit}>
                <Field onChange={this.handleInputChange} name="firstName" label="First Name" type="text" value={firstName}/>
                <Field onChange ={this.handleInputChange} name="lastName" label="Last Name" type="text" value = {lastName}/>
                <Field onChange={this.handleInputChange} name="phone" label="Phone Number" type="text" value={phone} />
                <Field onChange={this.handleInputChange} name="email" label="Email" type="email" value={email} />
                <button className="btn btn-primary">Add Contact</button>
                <button className="btn btn-danger" type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;