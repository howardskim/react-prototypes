import React, {Component} from 'react';
import ContactCard from './contact_card';
// import contactData from '../data/contacts';


// class ContactList extends Component{
//     render(){
//         const list = this.props.contacts.map((item, index)=>{
//             // console.log(item, index);
//             return(
//                 // <ContactCard key={index} firstName = {item.firstName} lastName= {item.lastName} />
//                 <ContactCard key={index} contact={item}/>
//             )
//         });
//         return(
//             <div className="col-8">
//                 <div className="row">{list}</div>
//             </div>
//         )
//     }
// }

const ContactList = (props) =>{
    const list = props.contacts.map((item, index) => {
        return <ContactCard key={index} contact={item} />
    })
    return(
         <div className="col-8">
            <div className="row">{list}</div>
        </div>
    )
}


export default ContactList;