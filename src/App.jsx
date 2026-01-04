import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/index/index";
import BusinessPage from "./pages/business/business";
import BusinessLayout from "./layouts/BusinessLayout";
import RampsPage from "./pages/ramps/ramps";
import RampsLayout from "./layouts/RampsLayout";
import SwapEthereum from "./pages/swap/swapEth/swapEth";
import SwapEthLayout from "./layouts/SwapEthLayout";
import SellBtcLayout from "./layouts/SellBtcLayout";
import SellBitcoin from "./pages/sell/sellBtc/sellBtc";


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
          <Route element={<SwapEthLayout/>}>
            <Route path="/swapEth" element={<SwapEthereum/>}/>
          </Route>
          <Route element={<SellBtcLayout/>}>
            <Route path="/sellBtc" element={<SellBitcoin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
