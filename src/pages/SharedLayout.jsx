import { Link,Outlet } from "react-router-dom";
import Navbar from "./components/Navbarr";

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default SharedLayout;
