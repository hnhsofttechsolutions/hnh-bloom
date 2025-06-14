import React from 'react'
import Banner from '../Components/Banner'
import BlogDetails from '../Components/Blog/BlogDetail'
import LeaveCommit from '../Components/Blog/LeaveCommit'
const BlogDetail = () => {
  return (
    <>
    <Banner heading={"Blog Details"} text={"Blog Details"}/>
    <BlogDetails/>
    <LeaveCommit/>
    </>
  )
}

export default BlogDetail