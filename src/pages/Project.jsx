import React from 'react'
import Banner from '../Components/Banner'
// import ProjectLatestPortfolio from '../Components/Project/ProjectLatestPortfolio'
import GETDATA from '../queries/get-post';
import { useQuery } from '@apollo/client';
import HomePortfolio from '../Components/Home/HomePortfolio';
import Loading from '../Components/loading/Loading';

const Project = () => {
   const { data , loading } = useQuery(GETDATA, {
      variables: { skip: 1, limit: 9, categoryId: undefined },
    });
    
    
    
    if (loading){
   return<div><Loading/></div>; 
  }
  return (
    
    <>
      <Banner heading={"Project"} text={"Project"}/>
      {/* <ProjectLatestPortfolio alldata={alldata} /> */}
       <div className='py-10'><HomePortfolio data={data}/></div>
    </>
  )
}

export default Project