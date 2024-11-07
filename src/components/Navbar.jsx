import { Link } from "react-router-dom"
import Styles from "../styles/Navbar.module.css"

const Navbar = ()=>{
return(
<div className={Styles.container}>
   <a href="mailto:jose.mberg@hotmail.com" className={Styles.mail}>jose.mberg@hotmail.com</a>
   <Link><button className={Styles.cvButton}>CV</button></Link> 
</div>
)
}

export default Navbar