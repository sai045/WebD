import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from "../header/header";
import "./editPage.css";
import Loader from "../loader/loader";

const EditPage = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/notes/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedNote = { title, content };
    await axios
      .put(`http://localhost:8000/notes/${id}`, updatedNote)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelEdit = () => {
    navigate("/home")
  };

  return (
    <>
    {loading?(
      <Loader/>
    ):(
      <div className="edit_container">
        <h2>Edit Note</h2>
        <form onSubmit={handleSubmit} className="edit_form">
          <div className="edit_page_inputs">
            <div>
              <label htmlFor="title" className="edit_label">
                Title
              </label><br/>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="edit_input"
              />
            </div>
            <div>
              <label htmlFor="content" className="edit_label">
                content
              </label>
              <textarea
                className="edit_textarea"
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </div>
          </div>

          <div className="btn_div">
            <button className="save_btn" type="submit">
              Save
            </button>
            <button className="cancel_btn" onClick={cancelEdit}>
              cancel
            </button>
          </div>
        </form>
      </div>
    )}
      
    </>
  );
};

export default EditPage;
