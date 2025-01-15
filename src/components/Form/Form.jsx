import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addShip } from '../../redux/actions/shipAction';

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Container',
  });
  const [isValid,setIsValid]=useState(false)

    // Validate if the form data is valid (name field should not be empty)
    useEffect(() => {
      if (formData.name.trim() !== '') {
        setIsValid(true);  // Form is valid if name is not empty
      } else {
        setIsValid(false);  // If name is empty, form is not valid
      }
    }, [formData.name]);  // Trigger validation whenever the name field changes
  
    // Handle form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isValid) {  // Proceed only if form is valid
        dispatch(
          addShip({
            id: Date.now(),
            name: formData.name,
            type: formData.type,
          })
        );
  
        resetForm();  // Reset form after submit
      }
    };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'container',
    });
  };

  return (
    <div data-testid="form">
      <h1>heading</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Ship Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData['name']}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="type">Ship Type</label>
        <select
          id="type"
          name="type"
          onChange={handleChange}
          value={formData['type']}
        >
          <option value="Container">Container</option>
          <option value="Bulk">Bulk</option>
          <option value="Tanker">Tanker</option>
        </select>
        <button type="submit" disabled={!isValid}>Add Ship</button>
      </form>
    </div>
  );
};

export default Form;
