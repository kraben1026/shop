import "./home.css";
import Item from "../Components/Item";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.removeItem("token");
    navigate("/")
  }
  const [items, setItems] = useState([]);

  const render = async () =>{
    let response = await fetch("http://localhost:8080/api/getItems");
    let data = await response.json();
    setItems(data);
  }
    useEffect(() => {
      render()
    }, [])
  return (
    <>
      <header>
        <span>Hi, User</span>
        <button onClick={() => navigate("/sell")}>Sell item</button>
        <button onClick={logOut}>Log out</button>
      </header>

      <div className="homeContainer">
        <h1>Legjobbfogás.hu</h1>
        <main className="itemsContainer">
        {items.map((elem) => (
        <Item
        key={elem.id}
        className="items"
        name={elem.Name}
        price={elem.Price}
        src={elem.url}
      />
       ))}
        </main>
      </div>
    </>
  );
};

export default Home;
