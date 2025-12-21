import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/index/index";
import BusinessPage from "./pages/business/business";
import BusinessLayout from "./layouts/BusinessLayout";
import RampsPage from "./pages/ramps/ramps";
import RampsLayout from "./layouts/RampsLayout";


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<HomePage/>} />
          </Route>
          <Route element={<BusinessLayout />}>
            <Route path="/business" element={<BusinessPage/>} />
          </Route>
          <Route element={<RampsLayout/>}>
           <Route path="/ramps" element={<RampsPage/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
