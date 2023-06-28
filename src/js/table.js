import { useEffect, useState } from "react";
import "../css/table.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function Table(){

    let nav = useNavigate();

    const [tabelData, setTabelData] = useState([]);


    const getData = ()=>{
        axios.get("https://63e382b7619fce55d41a95f2.mockapi.io/crud").then((response)=>{
            console.log(response.data);
            setTabelData(response.data);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    let a = 1;
const handleDelete = (para)=>{
    console.log(para);

    axios.delete(`https://63e382b7619fce55d41a95f2.mockapi.io/crud/${para}`).then((res)=>{
        getData();
    })
}



const handleEdit = (id)=>{
    localStorage.setItem("ID", id);
    nav("/updateData");
}


    return(
        <div>
            <div className="table_overview">
                       <table>
                       <tr>
                           <th>S.NO</th>
                           <th>USER NAME</th>
                           <th>EMAIL</th>
                           <th>ACTIONS</th>
                       </tr>
                {tabelData.map((data)=>
                       <tr>
                           <td>{a++}</td>
                           <td>{data.userName}</td>
                           <td>{data.email}</td>
                           <td>
                               <button type="buton" onClick={()=>{
                                handleEdit(data.id);
                               }}>Edit</button>
                               <button type="button" onClick={()=>{
                                handleDelete(data.id);
                               }}
                            >Delete</button>
                           </td>
                       </tr>
                        )
                    }
                   </table>
               
            </div>
        </div>       
    )
}