import { useEffect } from "react"

var Logout =()=>
{
    useEffect(()=>{
        sessionStorage.removeItem("uid")
        window.location='login'
    },[])
    return(<div>

    </div>)
}
export default Logout;