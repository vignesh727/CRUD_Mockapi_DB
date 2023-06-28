import { useState } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {

const [userName, setuserName] = useState("");

const [email, setEmail] = useState("");

const nav = useNavigate();

const handleSubmit = (event)=>{
    event.preventDefault();

if(userName == "" || email == ""){
        alert("Enter full Details");
}
   else{ let result = {
        userName:userName,
        email:email
    }

    axios.post("https://63e382b7619fce55d41a95f2.mockapi.io/crud", result).then((response)=>{
        console.log(response.data);
        nav("/table");
    })
}

}

    return (
        <div>
            <div>
                <h1>CRUD - Mockapi</h1>
            </div>
            <div class="form_overview">
                <div class="form_div">
                    <form id="form" onSubmit={handleSubmit}>
                        <h4 class="form_title">Add User</h4>
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