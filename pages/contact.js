import next from 'next'
import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

export default function contact() {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [desc, setdesc] = useState()

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
      <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.flex}>
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Name</label>
          <input onChange={onChange} value={name} name='name' type="text" className={styles.htmlFormControl} id="name" placeholder="Enter your name" required minLength={3} />
        </div>
        <div className={styles.flex}>
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Email address</label>
          <input onChange={onChange} value={email} name='email' type="email" className={styles.htmlFormControl} id="email" placeholder="Enter your email" required minLength={4} />
        </div>
        <div className={styles.flex}>
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Phone</label>
          <input onChange={onChange} value={phone} name='phone' type="phone" className={styles.htmlFormControl} id="phone" placeholder="Enter your phone" required minLength={10} />
        </div>
        <div className={styles.flex}>
          <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label>
          <textarea name='desc' onChange={onChange} value={desc} className={styles.htmlFormControl} id="examplehtmlFormControlTextarea1" rows="3" />
        </div>
        <div className={styles.btnParent}>
        <button className={styles.btn} id="submit" type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}
