import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout()
{
    return(<>
    <Header/>
    <section>
        <Outlet/>
    </section>
    <Footer/>
    </>)
}
export default Layout;