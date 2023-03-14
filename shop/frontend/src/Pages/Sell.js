import { useState } from "react";
import "./sell.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Sell = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const data = {
    name: name,
    price: price,
    url: url,
  };
  const sellBtnHandler = (event) => {
    event.preventDefault();
    const fetcher = async () => {
      const sendData = fetch("http://localhost:8080/api/sell", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await sendData;
      if (!response.status === 200) {
        throw new Error("Sell request failed");
      } else {
        alert("item added");
      }
    };
    fetcher();
  };

  return (<>

    <Navbar button="items" route = "/home"/>
    <div className="sellFormWrapper">
      <p className="sellFromDescription">
        If you want to sell an intem please fill the form below
      </p>
      <div className="sellFormContainer">
        <form action="" className="sellForm">
          <p className="text">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text">Price</p>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className="text">Photo(url)</p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="button-wrapper">
            <button className="sellBtn" onClick={sellBtnHandler}>
              Sell
            </button>
            <button className="sellBtn" onClick={() => navigate("/home")}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Sell;
