import { useEffect, useState } from "react";
import "../css/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update(){

    const nav = useNavigate();

    const[localStorageData, setLocalStorageData] = useState("");

    const idData = ()=>{
        let token = localStorage.getItem("ID");
console.log(token);
        setLocalStorageData(token);
    }


    useEffect(()=>{
        idData();
    },[])


    const [userName, setuserName] = useState("");

    const [email, setEmail] = useState("");

const handleSubmit = (event)=>{
    event.preventDefault();

    console.log(userName, email);

    let result = {
        userName:userName,
        email:email
    }

    axios.put(`https://63e382b7619fce55d41a95f2.mockapi.io/crud/${localStorageData}`, result).then((res)=>{
        console.log(res.data);
        nav("/table");
    })
}

    return(
        <div>
                 <div>
                <h1>UPDATE DATA</h1>
            </div>
            <div class="form_overview">
                <div class="form_div">
                    <form id="form" onSubmit={handleSubmit}>
                        <h4 class="form_title">Update User</h4>
                        <div>
                            <div >
                                <label>Name:</label>
                            </div>
                            <div>
                                <input type="text" id="name" onChange={(event)=>{
                                    setuserName(event.target.value);
                                }} ></input>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Email:</label>
                            </div>
                            <div>
                                <input type="email" id="email" onChange={(event)=>{
                                    setEmail(event.target.value);
                                }}></input>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                </div>



            </div>
        </div>
    )
}