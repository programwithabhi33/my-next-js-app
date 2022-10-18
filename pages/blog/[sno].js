import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { sno } = router.query
  console.log({sno})

  return <p>Post: {sno}</p>
}

export default Post
