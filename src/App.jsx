import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="bg-[#16171b] background">
        <div className="w-10/12 mx-auto">
          <h1 className="logo lg:text-[40px] text-[30px]  text-white pt-[20px]">BooKlab</h1>
          <Home />        
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
}

export default App;
