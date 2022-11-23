import next from 'next'
import React, { useState } from 'react'

export default function contact() {
  const [name, setname] = useState('name')
  const [email, setemail] = useState('email')
  const [phone, setphone] = useState('phone')
  const [desc, setdesc] = useState('desc')

  let onSubmit = (e) => {
    e.preventDefault();
    let postData = { name, email, phone, desc }
    console.log('the form has been submitted')
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('contacted successfully')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  let onChange = (e) => {
    // console.log(e.target.name)
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name === 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name === 'phone') {
      setphone(e.target.value)
    }
    else {
      setdesc(e.target.value)
    }
  }

  return (
    <>
      <div>This is the contact page</div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Name</label>
          <input onChange={onChange} value={name} name='name' type="text" className="htmlForm-control" id="name" placeholder="Enter your name" required minLength={3} />
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Email address</label>
          <input onChange={onChange} value={email} name='email' type="email" className="htmlForm-control" id="email" placeholder="Enter your email" required minLength={4} />
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Phone</label>
          <input onChange={onChange} value={phone} name='phone' type="phone" className="htmlForm-control" id="phone" placeholder="Enter your phone" required minLength={10} />
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label>
          <textarea name='desc' onChange={onChange} value={desc} className="htmlForm-control" id="examplehtmlFormControlTextarea1" rows="3" />
        </div>
        <button className="btn" id="submit" type='submit'>Submit</button>
      </form>
    </>
  )
}
