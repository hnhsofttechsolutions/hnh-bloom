import React from 'react'
import Banner from '../Components/Banner'
import ProjectDetails from '../Components/Project/ProjectDetails'
import { useQuery } from '@apollo/client';
import GETDATA from '../queries/get-post';
import Loading from '../Components/loading/Loading';


const ProjectDetail = () => {
    const { data, loading } = useQuery(GETDATA, {
      variables: { skip: 0, limit: 10, categoryId: undefined },
    });
    
    if (loading) return <div><Loading/></div>;
  

  return (
   <>
     <Banner heading={"Project"} text={"Details"}/>
     <ProjectDetails data={data}/>
   </>
  )
}

export default ProjectDetail