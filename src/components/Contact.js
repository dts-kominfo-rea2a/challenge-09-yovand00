// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div style={{border: '1px solid green', width: '300px', margin:'10px auto', borderRadius: '15px', fontFamily: 'verdana', backgroundColor: '#72aaed'}}>
            <div className="contact" style={{padding: '10px', textAlign: 'center',  display:'inline'}}>
                <div className="name">{props.name}</div>
                <div className="telp">{props.telp}</div>
                <div className='email'>{props.email}</div>
            </div>
            <div style={{display:'inline'}}>
                <a href={props.photo}></a>
            </div>
        </div>
    )
}

export default Contact;