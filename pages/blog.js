import Link from 'next/link'
import {React,useState,useEffect} from 'react'
import styles from '../styles/Blog.module.css'

const main = () => {
  const [blogs, setBlogs] = useState([])
  // use Effect will run every time because inside this you update the state and the useeffect runs every time when the dom change and the state is the part of the dom
  // when you gave a second argument to useeffect to empty array useeffect will run only once after dom render
  // also you can gave this array to any kind of state or variable when it change useeffect will run  
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
    .then((data)=>{
      return data.json();
    }).then((data)=>{
      // console.log(data)
      setBlogs(data)
    })
    // console.log("abhishek is under the useEffect")
  },[])
  return (
    <main>
      {blogs.map((blogItem)=>{
        return(
    <div key={blogItem.slug} className={styles.container}>
      <Link href={`/blogpost/${blogItem.slug}`}>
      <h2 className={styles.hover}>{blogItem.name}</h2></Link>
      <p>{blogItem.description.substr(0,140)}</p>
    </div>)
      })}
    </main>
  )
}
export default main

// This is the nested route component you can use the /blog/main to access the component 
