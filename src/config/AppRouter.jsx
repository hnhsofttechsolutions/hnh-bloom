/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterList } from "../utils/Routlist";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const AppRouter = () => {
  return (
    <>
     
      <Routes>
        {RouterList.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;