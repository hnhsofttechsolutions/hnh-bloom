import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/AppRouter";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <AppRouter />
      </BrowserRouter>
    </>
  ); 
}

export default App;
