import Link from 'next/link'
import { React, useState, useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
const fs = require('fs');

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count, setCount] = useState(1)
  // console.log(blogs)
  // use Effect will run every time because inside this you update the state and the useeffect runs every time when the dom change and the state is the part of the dom
  // when you gave a second argument to useeffect to empty array useeffect will run only once after dom render
  // also you can gave this array to any kind of state or variable when it change useeffect will run  
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs')
  //   .then((data)=>{
  //     return data.json();
  //   }).then((data)=>{
  //     // console.log(data)
  //     setBlogs(data)
  //   })
  //   // console.log("abhishek is under the useEffect")
  // },[])

  let fetchData = async () => {
    let data = await fetch(`http://localhost:3000/api/blogs?count=${count+3}`)
    let DataJson = await data.json();
    console.log(DataJson)
    setBlogs(DataJson)
    setCount(count+3)
  };


  return (
    <main>
      <InfiniteScroll InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.LenghtDir !== blogs.length}
        loader={<h4> Loading...</h4 >}
        endMessage={
          <p  style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p >
        }
      >
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} className={styles.container}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2 className={styles.hover}>{blogItem.name}</h2></Link>
              <p>{blogItem.description.substr(0, 140)}</p>
            </div>)
        })}
        {/* {items} */}
      </InfiniteScroll >

    </main>
  )
}

// Get Static props use passes the props to the function component
export async function getStaticProps(context) {
  let allBlogs = []
  const dirRead = await fs.promises.readdir('./jsondata')
  const LenghtDir = dirRead.length;
  for (let index = 0; index < 3; index++) {
    const element = dirRead[index];
    let file = await fs.promises.readFile('jsondata/' + element, 'utf-8')
    allBlogs.push(JSON.parse(file));
  }
  return {
    props: { allBlogs ,LenghtDir}, // will be passed to the page component as props
  }
}

// This function will fun on the server 
// export async function getServerSideProps(context) {
//   let response = await fetch('http://localhost:3000/api/blogs');
//   let allBlogs = await response.json();
//   return {
//     props: { allBlogs }// will be passed to the page component as props
//   }
// }
export default Blogs

// This is the nested route component you can use the /blog/main to access the component 
