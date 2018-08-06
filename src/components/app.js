import React, {Component} from 'react';
import Stopwatch from './stopwatch';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts.js';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            contacts: contactData
        }
        this.addContact = this.addContact.bind(this);
    }

    addContact(contact){
        console.log(contact);
        const newContacts = this.state.contacts.slice();
        newContacts.push(contact)
        this.setState({
            contacts: newContacts
        })
    }
    render(){
        return (
            <div className='container'>
                <h1 className='text-center my-3'>Address Book</h1>
                <div className='row'>
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                </div>
                <ContactList contacts={this.state.contacts} />
            </div>
        )
    }
}

export default App;