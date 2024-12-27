import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData)
      .then(response => {
        console.log('Email sent successfully:', response.data);
        setIsModalVisible(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('There was an error sending the email:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea name="message" id="message" placeholder="Message" required onChange={handleChange} value={formData.message}></textarea>
            </div>
            <input type="submit" className='hover btn' value="Submit"/>
        </form>
        {isModalVisible && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.closeButton} onClick={closeModal}>&times;</span>
              <p>Email sent successfully!</p>
            </div>
          </div>
        )}
        {isLoading && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Sending...</p>
            </div>
          </div>
        )}
    </section>
  );
}

export default Contact;