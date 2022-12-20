// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
// import { Provider } from "react-redux";
// import store from './actions/configRedux'

// import { Routes, Route, BrowserRouter } from "react-router-dom";
// function App() {
//   return (
//     <>
//      {/* <BrowserRouter>
//      <Navbar/>
//     <Sidebar/>
//     <Home/>
//     <Footer/>
//     </BrowserRouter> */}
//     <Navbar/>

//       {/* <Provider store={store}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </BrowserRouter>
//       </Provider> */}
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
// import { Provider } from "react-redux";
// import store from "./actions/configRedux";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Home />
        <Footer />
    </div>
    // <div>
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/Login" element={<Login />} />
    //         <Route path="/signup" element={<Signup />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </Provider>
    //   </div>
  );
};

export default App;
