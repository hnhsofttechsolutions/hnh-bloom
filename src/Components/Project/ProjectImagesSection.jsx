import React from 'react'

const ProjectImagesSection = ({project}) => {
// console.log("🚀 ~ ProjectImagesSection ~ project:", project)

  return (
    <div className='w-full '>
        <div className='w-full flex gap-5'>  
            {project?.projectById?.images[0] && <div className='w-full p-5   '>
                <img 
                src={`https://api.hnhtechsolutions.com${project?.projectById?.images[0]}`}
                    alt="" className='w-full h-96 object-cover rounded-lg ' />
            </div>}
            {project?.projectById?.images[1] && <div className='w-full p-5 mt-10'> 
                  <img 
                src={`https://api.hnhtechsolutions.com${project?.projectById?.images[1]}`}
                    alt="" className='w-full h-96 object-cover rounded-lg ' />
            </div>}
        </div>
        <div className='w-full flex gap-5 mt-10'>  
            {project?.projectById?.images[3] && <div className='w-full p-5  '>
                <img 
                src={`https://api.hnhtechsolutions.com${project?.projectById?.images[3]}`}
                    alt="" className='w-full h-96 object-cover rounded-lg ' />
            </div>}
           {project?.projectById?.images[4] && <div className='w-full p-5    mt-16'> 
                  <img 
                src={`https://api.hnhtechsolutions.com${project?.projectById?.images[4]}`}
                    alt="" className='w-full h-96 object-cover rounded-lg ' />
            </div>}
        </div>
      
    </div>
  )
}

export default ProjectImagesSection
