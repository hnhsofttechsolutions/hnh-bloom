import React from 'react'
import Banner from '../Components/Banner'
import ProjectDetails from '../Components/Project/ProjectDetails'
import { useQuery } from '@apollo/client';
// eslint-disable-next-line no-unused-vars
import GETDATA, { GETBYID } from '../queries/get-post';
import Loading from '../Components/loading/Loading';


const ProjectDetail = () => {
    const { data, loading } = useQuery(GETDATA, {
      variables: { skip: 0, limit: 130, categoryId: undefined },
    });
    console.log("🚀 ~ ProjectDetail ~ data:", data)
    
    if (loading) return <div><Loading/></div>;
  

  return (
   <>
     <Banner heading={"Project"} text={"Details"}/>
     <ProjectDetails data={data}/>
   </>
  )
}

export default ProjectDetail