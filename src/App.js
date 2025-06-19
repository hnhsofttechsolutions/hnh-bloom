import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/AppRouter";
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Layout>
        <AppRouter />
        </Layout>
      </BrowserRouter>
    </>
  ); 
}

export default App;
