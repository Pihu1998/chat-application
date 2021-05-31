import "../style.css";
import { useState, useEffect, useRef } from 'react';
import { apiGet } from "../api";
import SendMessageForm from "./messageForm";
import Chance from 'chance';

export default function MessageList() {

    const [messages, setMessages] = useState([]);
    const [mess, setMess] = useState('');
    const chance = new Chance();
    const [user, setUser] = useState("");
    const messagesEndRef = useRef();


    // Scroll to bottom automatically when chat list is longer
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
  }
   
  // Local Time
    const convert = (m) => {
      let d = new Date(m);
      let s = d.toLocaleString();
      let l = s.slice(11);
      return l;

    };

    // Generate random name
    useEffect(() => {
      async function generate() {
      let username = {
        name: chance.name() 
      };
      setUser(username);
    };
      generate();
  }, []);

   
  // Get Chat history
    useEffect(() => {
       
      apiGet()
          .then((res) => res.json())
          .then((data) => {
            setMessages(data);
            scrollToBottom();
          })
          .catch((err) => console.log(err));
          
  
    }, [mess, messages]);


  return(
    <>
    <div style={{display: 'flex'}}>
    <div className= "left-column">Chat Room</div>
    <ul className="message-list">
     
    {messages.length === 0 ? (
      <div>Hey {user.name}! Send a message to see chat history</div>
    ) : (
      <>    
        {messages.map((message) => 
            ( <>
                <li key={message.id} className="message">
                  <div>{message.name}</div>
                  <div>{message.text}</div>
                  <div style={{fontSize: 9, marginTop: 5}}>{convert(message.dateEdited)}</div>
                </li>
                
              </>
            )
          )}
      </> 
      )}
              <div ref={messagesEndRef} />  
              <SendMessageForm mess={mess} setMess={setMess} user={user} />
    </ul>
   
   </div>
    
     </>

  );
}