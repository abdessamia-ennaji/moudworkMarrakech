import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const ContactMsg = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch all messages from the backend
    axios.get('http://localhost:5000/contactmsg')
      .then(response => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        setError('Error fetching messages');
        setLoading(false);
      });

    // Fetch the total message count from the backend
    axios.get('http://localhost:5000/messages/count')
      .then(response => {
        setCount(response.data.total_messages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
        setError('Error fetching message count');
        setLoading(false);
      });
  }, []);

  const handleRemove = (id) => {
    // Handle message removal here
    axios.delete(`http://localhost:5000/contactmsg/${id}`)
      .then(() => {
        setMessages(messages.filter(message => message.id !== id));
        setCount(count - 1);
      })
      .catch(error => {
        console.error('Error removing message:', error);
        setError('Error removing message');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Sidebar />
      <div className="content-admin">
        <div className="message-header">
          <h2>Total Messages: {count}</h2>
        </div>
        <div className="message-list">
          {messages.map(message => (
            <div className="message-card" key={message.id}>
              <div className="message-info">
                <img src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" alt="Icon" className="message-icon" />
                <div className="message-text">
                  <h3 className="message-name">{message.name}</h3>
                  <p className="message-subject">{message.subject}</p>
                </div>
              </div>
              <div className="message-details">
                <p><strong>Email:</strong> {message.email}</p>
                <p><strong>Message:</strong></p>
                <p>"{message.message}"</p>
              </div>
              <button className="remove-button" onClick={() => handleRemove(message.id)}>
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactMsg;
