import { useEffect, useState } from "react";
import ReactPortal from "../portal";
import './modalStyles.css'
import Checkbox from "../Checkbox";

import { TfiClose } from "react-icons/tfi";
import axios from "axios";

function Modal({isOpen, handleClose }) {
  const initialState =  {
    name: '',
    phone: '',
    check: false
  }
  
  const [post, setPost] = useState(initialState)
  const [warning, setWarning] = useState(false)

  const handleChange = (e) => {
    setPost({...post, check: e})
  }

  const handleInputClick = (e) => {
    if (e.target.value !== '') return;

    e.target.value = '+7';
  }

  const handleInput = async e => {
    setPost({...post, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (post.name === '' || (post.phone === '' || post.phone === '+7')) {
      setWarning(true)
      return;
    }

    axios.post('http://localhost:8000/posts', post)
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

    handleClose();
  }

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) {
    return null;
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
     <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <TfiClose onClick={handleClose} className="modal-close-btn" />
          </div>

          <div>
            <form onSubmit={handleSubmit} className="modal-body">
              <input placeholder="Имя" name="name" className="modal-input" onChange={handleInput}/>
              <input placeholder="Телефон" name="phone" className="modal-input" onChange={handleInput} onFocus={handleInputClick}/>
          
              <Checkbox onChange={handleChange} blackCheck={true} modalCheck={true}>
               Даю согласие на <span className="checkbox-span">обработку персональных данных</span>
              </Checkbox>

              <button className="query modal-query">Оставить Заявку</button>


              {warning && <span className="warning-span">Заполните поля!</span> }
            </form>

          </div>
        </div>
     </div>
    </ReactPortal>
  );
};

export default Modal;