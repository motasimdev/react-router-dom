import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-amber-400">react router dom installation proccess</h1>
      <div className="">
        <p>
          1. terminal: npm i react-router-dom  

          2. create 'RoutLayout.jsx' in 'layout' folder

          3. 'RootLayout' er vitore :
          {/* -----------
          import Header from './Header'
          import Footer from './Footer'
          import { Outlet } from 'react-router'

          const RootLayout = () => {
            return (
              <>
                <Header/>
                <Outlet/>
                <Footer/>
              </>
            )
          }
          */}

          4. create 'Error.jsx' in 'pages' folder

          5. menu gula link korte hbe : 
          {/* -----------
              import { Link } from "react-router";


                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
                    Shop
                  </li>
                </Link>
          */}


          6. main.jsx :
          {/* ------
          import { StrictMode } from "react";
          import { createRoot } from "react-dom/client";
          import { BrowserRouter } from "react-router";
          import "./index.css";

          import App from "./App.jsx";

          createRoot(document.getElementById("root")).render(
              <StrictMode>
                  <BrowserRouter>
                      <App />
                  </BrowserRouter>
              </StrictMode>
          );
          
          */}

          7. app.jsx :
          {/* -------
          import { Routes, Route } from "react-router";
          import RootLayout from "./components/layouts/RootLayout";
          import Home from "./components/pages/Home";
          import Shop from "./components/pages/Shop";
          import Error from "./components/pages/Error";


        <Routes>
          <Route path="/" element={<RootLayout />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>

              <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
          
          */}
        </p>
      </div>
    </>
  );
}

export default App;
