

const Item = (props) => {
  return (
    <div className = {props.className}>
        <img src={props.src} alt=""  className="itemImg"/>
        <p className="itemName">{props.name}</p>
        <p className="itemPrice">{props.price} Ft</p>
    </div>
  )
}

export default Item