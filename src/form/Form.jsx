import React, { useState } from 'react';
import axios from 'axios';

function Form({ onAddDriver }) {
  const [newDriver, setNewDriver] = useState({
    firstName: '',
    lastName: '',
    Address: '',
    Contact_Number: '',
    cnic: '',
  
  });

  const handleInputChange = (event) => {
    setNewDriver({
      ...newDriver,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log();
       onAddDriver(newDriver);
       setNewDriver({ firstName: '', lastName: '', Address: '' , Contact_Number: '', cnic:''});
    } catch (error) {
      console.error('Error creating driver:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          firstName:
          <input type="text" name="firstName" value={newDriver.firstName} onChange={handleInputChange} />
        </label>
        <label>
          lastName:
          <input type="text" name="lastName" value={newDriver.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="Address" value={newDriver.Address} onChange={handleInputChange} />
        </label>
        <label>
          Contact:
          <input type="text" name="Contact_Number" value={newDriver.Contact_Number} onChange={handleInputChange} />
        </label>
        <label>
          CNIC:
          <input type="text" name="cnic" value={newDriver.cnic} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Driver</button>
      </form>
    </div>
  )
}

export default Form
