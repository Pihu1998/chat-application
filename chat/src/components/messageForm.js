import "../style.css";
import { useState } from 'react';
import { apiPost } from "../api";


export default function SendMessageForm({ mess, setMess, user })  {
   
    const [message, setMessage] = useState({});
    const [comment, setComment] = useState('');
    
    // Updating state with input value change
    const handleChange = (e) => {
        setComment(e.target.value);        
        setMessage({name: user.name, text: e.target.value});
    };                               
    
    // Handling message Submit
    const handleSubmit = (e) => {
        
        e.preventDefault();    
        setComment('');
        
        apiPost(message)
        .then((res) => res.json())
        .then((data) => {
        setMess(data);
        console.log("mess", mess);
        })
        .catch((err) => console.log(err));
        setMessage('');
    };

        return (
          <>
            <form
                onSubmit={handleSubmit}
                className="send-message-form"> 
                <input
                    onChange={handleChange}
                    value={comment}
                    placeholder="Type your message and hit ENTER"
                    type="text" />  
            </form>
          </>
        );
}
