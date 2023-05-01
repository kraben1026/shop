    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom"


    const MyItems = () => {
        const navigate = useNavigate();
        const token = localStorage.getItem("token");
        const[items, setItems] = useState([]);

        const myItems = async () =>{
            const response = await fetch("http://localhost:8080/api/myItems",  {
                Method: "GET",
                headers: {
                        "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
                        }
            })
            const data = await response.json();
            setItems(data)
            console.log(data)
        }
        useEffect(() => {
            myItems();
        }, []);
    return (
        <>
        <div>MyItems</div>
        <button onClick={() => {navigate("/home")}}>back</button>
        {items.map((item) =>(
            <div key={item.id}>{item.Name}</div>
        ))}
        </>
    )
    }

    export default MyItems