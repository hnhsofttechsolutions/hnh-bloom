import React from 'react'
import Banner from '../Components/Banner'
import ProjectDetails from '../Components/Project/ProjectDetails'

const ProjectDetail = () => {
  return (
   <>
     <Banner heading={"Project"} text={"Details"}/>
     <ProjectDetails/>
   </>
  )
}

export default ProjectDetail