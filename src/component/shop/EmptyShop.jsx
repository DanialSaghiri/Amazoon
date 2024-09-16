import { Link } from "react-router-dom";


import styles from "./EmptyShop.module.css"


function EmptyShop(){
    return <div className={styles.empty}>
    <div >
    <h1>Your Amazon Basket is empty.</h1>
    <p>Check products page for shopping. <Link to={"/"}>continue shopping</Link></p>
    </div>  
</div>
}
export default EmptyShop;