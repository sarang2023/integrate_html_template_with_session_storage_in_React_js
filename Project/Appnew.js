import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";

function Appnew() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Team" element={<Team />} />
            <Route path="Register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout"element={<Logout/>}/>
            <Route path="dashboard"element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Appnew;
