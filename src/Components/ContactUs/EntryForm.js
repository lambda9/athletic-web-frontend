import React from 'react'
import './ContactUs.css'


function EntryForm() {
    return (
        <div class='Entry-Form'>
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Last Name'></input>
            <input type='text' placeholder='Some Long Copy Goes Here'></input>
            <button class='button-primary' >Submit</button>
        </div>
    )
}

export default EntryForm
