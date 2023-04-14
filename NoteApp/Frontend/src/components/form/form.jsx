import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import './form.css';
const Form=()=>{

    const navigate = useNavigate();
    const [allData, setAllData] = useState({title:"", content:""})
    // const [imageURL , setImageURL] = useState("");

    

    const handleValue=(e)=>{
        setAllData({...allData, [e.target.name]:e.target.value});

    }
        
        const handlePost=async(e)=>{
            e.preventDefault();
            const data = new FormData();
            console.log(allData)

            fetch('http://localhost:8000/notes',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title: allData.title,
                content: allData.content
            })
        }).then(res=>res.json()).then(data=>{
            if(data.error){}
            else{
                navigate('/home')
            }
        }).catch(err=>console.log(err))
        }
    
    return(
        <>
            <Header/>
            <div className="form_container">
            <div className="title">
                <div className="title_heading">Title</div>
                <textarea type="text" name="title" placeholder="Title" onChange={handleValue} />
            </div>
            <div className="desc">
                <div className="desc_heading">content</div>
                <textarea type="text" name="content" placeholder="what's on your mind?" onChange={handleValue} />
            </div>

            <button className="form-btn" onClick={handlePost}>Add Note</button>
            </div>
        </>
    )
}
export default Form;