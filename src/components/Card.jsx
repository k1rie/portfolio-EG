import Styles from "../styles/Card.module.css"

const Card = (props)=>{
    return(
<div className={Styles.card}>
  <div className={Styles.cardContent}>
    <p className={Styles.cardPitle}> {props.title} </p>
    <p className={Styles.cardPara}>{props.description}</p>
  </div>
</div>

    )
}

export default Card