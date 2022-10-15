import React, { useState, useEffect } from 'react';

export default function FormReactive() {
    const [form, setForm] = useState({});

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <input onChange={(e) => handleForm(e)} name="user" type="text" placeholder='usuario' />
            <input onChange={(e) => handleForm(e)} name="email" type="email" placeholder='email' />
            <input onChange={(e) => handleForm(e)} name="password" type="password" placeholder='password' />
        </form>
    )
}
