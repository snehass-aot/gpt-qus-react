import React, { useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (name) => {
        setName(name.target.value);
    }

    const handleEmailChange = (email) => {
        setEmail(email.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        alert(`welcome ${name},Your Email Id is:${email}`);
    }
    return (
        <form onSubmit={submitForm}>
            <div>
                <input type="text" onChange={handleNameChange} placeholder='Enter your name' />
                <h2>{name}</h2>
                <input type="email" onChange={handleEmailChange} placeholder='Enter youe email' />
                <h2>{email}</h2>
                <button >submit</button>
            </div>
        </form>
    )
}

export default ControlledForm
