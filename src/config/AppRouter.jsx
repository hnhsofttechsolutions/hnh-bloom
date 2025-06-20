/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterList } from "../utils/Routlist";
import Layout from "../Components/Layout/Layout";

const AppRouter = () => {
  return (
    <>
     
      <Routes>
        {RouterList.map((route, index) => (
          <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;