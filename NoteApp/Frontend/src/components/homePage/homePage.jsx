// import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../../card';
import Header from "../header/header";
import axios from "axios";
import './homePage.css'
import { useNavigate } from "react-router-dom";
import EditPage from "../editPage/editPage";
import Loader from "../loader/loader";



const HomePage=()=>{
    const [post, setPost] = useState([]);
    // const [showModal,setShowModal] = useState(false);
    const [loading,setLoading] = useState(true);
    // const [id,setId] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8000/notes").then((res)=> res.json()).then((data)=>{
            setPost(data);
            setLoading(false);
            console.log(data);
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    },[])

    const handleDelete=async(id)=>{
        // id.preventDefault()
        if(window.confirm("Are u sure want to delete!")){
            await axios.delete(`http://localhost:8000/notes/${id}`);
            setPost(post.filter(post=>post._id !==id))
        }
    }

    const handleEdit=async(id)=>{
        navigate(`/editPage/${id}`)
        // setId(id);
        // setShowModal(true);
    }

    // const handleCloseModal=()=>{
    //     setShowModal(false);
    // }
    return(
        <>
        <Header/>
        {loading?(
            <Loader/>
        ):(
            <div className="post_container">
                {post.map((post,i)=>{
                    return <Card post={post} key={i} handleDelete={()=>handleDelete(post._id)} handleEdit={()=>handleEdit(post._id)} />
                })}
            </div>
        )}
            
            {/* {showModal && (
                
                    <EditPage onClose={handleCloseModal} />
            
            )} */}
        </>
    )
}
export default HomePage;