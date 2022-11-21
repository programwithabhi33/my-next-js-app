import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Blog.module.css'
const fs = require('fs');

const Post = (props) => {

  // const router = useRouter()
  // if(!router.isReady) return;
  // const { sno } = router.query
  // console.log(sno)

  function createMarkup(description) {
    return {__html: description};
  }

  const [blog, setBlog] = useState(props.Blog)
  // use Effect will run every time because inside this you update the state and the useeffect runs every time when the dom change and the state is the part of the dom
  // when you gave a second argument to useeffect to empty array useeffect will run only once after dom render
  // also you can gave this array to any kind of state or variable when it change useeffect will run  
  // useEffect(() => {
  //   // When the router is ready we will run the useEffect,Initially router take to some time to ready after dom renders 
  //   if(!router.isReady) return;
  //   const { sno } = router.query
  //   fetch(`http://localhost:3000/api/getblog?slug=${sno}`)
  //   .then((data)=>{
  //     return data.json();
  //   }).then((data)=>{
  //     console.log(data)
  //     if(data.error){
  //       data = {
  //         name:"No file found",
  //         description:"No file",
  //       }
  //       setBlog(data)
  //     }
  //     else{
  //       setBlog(data)
  //     }
  //   })
  //   // console.log("abhishek is under the useEffect")
  // },[router.isReady])

  return (
    <>
      <div className={styles.container}>
        <h1>{blog && blog.name}</h1>
        {blog &&  <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div> }
      </div>
    </>
  )
}
// export async function getServerSideProps(context) {
//   console.log(context)
//   let {sno} = context.query;
//   console.log(sno)
//   let res = await fetch(`http://localhost:3000/api/getblog?slug=${sno}`);
//   let Blog = await res.json();

//   return {
//     props: { Blog }, // will be passed to the page component as props
//   }
// }

// GetStaticPaths Returns all the paths to create multiple pages 
export async function getStaticPaths() {
  return {
    paths: [
      { params: { sno: 'abhi' } },
      { params: { sno: 'harry' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  // console.log(context)
  const slug = context.params;
  const Blog = await fs.promises.readFile(`jsondata/${slug.sno}.json`,`utf8`);
  // console.log(blog)
  return {
    // Passed to the page component as props
    props: { Blog: JSON.parse(Blog) },
  }
}
export default Post
// This is the dynamic route page 