import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";



function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="Login" element={<Login />} />
            <Route path="Users">
              <Route index element={<List />} />
              <Route path=":UserId" element={<Single />} />
              <Route path="New" element={<New inputs={userInputs} title={"Add New User"} />} />
              
            </Route>
            <Route path="Products">
              <Route index element={<List />} />
              <Route path=":ProductId" element={<Single />} />
              <Route path="New" element={<New inputs={productInputs} title={"Add New Products"} />} />
              
            </Route>

          </Route>
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
