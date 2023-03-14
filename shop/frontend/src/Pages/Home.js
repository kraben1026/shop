import "./home.css";
import Item from "../Components/Item";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");

  const render = async () => {
    //fetch items
    const response = await fetch("http://localhost:8080/api/getItems");
    const data = await response.json();
    setItems(data);
    //fetch users
    const getUsersResponse = await fetch("http://localhost:8080/api/getUsers", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await getUsersResponse.json();
    setUsername(userData[0].username);
  };
  useEffect(() => {
    render();
  }, []);

  const logOut = () =>{
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <>
      <Navbar button="sell items" route = "/sell" showButton = {true}/>
      <div className="homeContainer">
        <main className="itemsContainer">
          {items.map((elem) => (
            <Item
              key={elem.id}
              className="item itemName"
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
