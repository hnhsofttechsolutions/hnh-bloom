
import About from "../pages/About";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ServiceDetail from "../pages/ServiceDetail";
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import Project from "../pages/Project";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";
export const RouterList = [
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/about",
    element: <About />,
  },
   {
    path: "/service",
    element: <Service />,
  },
   {
    path: "/service-detail",
    element: <ServiceDetail />,
  },

    {
    path: "/blog",
    element: <Blog />,
  },
   {
    path: "/blog-detail",
    element: <BlogDetail />,
  },
  
    {
    path: "/project",
    element: <Project />,
  },
   {
    path: "/project-detail",
    element: <ProjectDetail />,
  },
  {
    path:"/contact",
    element:<Contact/>,
  }
];