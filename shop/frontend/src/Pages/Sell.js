import { useState } from "react";
import "./sell.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="container">
      <form action="" className="form">
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Price</p>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>Photo(url)</p>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="button-wrapper">
          <button id="sellBtn" onClick={sellBtnHandler}>
            Sell
          </button>
          <button id="sellBtn" onClick={(() => navigate("/home"))}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;