import React from 'react';
import { StyledLabel, StyledInput, StyledButton } from './Form.style';

const Form = ({ buttonText, formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <StyledLabel>First Name:</StyledLabel>
        <StyledInput
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <StyledLabel>Last Name:</StyledLabel>
        <StyledInput
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <StyledLabel>E-Mail:</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <StyledLabel>Registration Date:</StyledLabel>
        <StyledInput
          type="datetime-local"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
        />
      </div>
      <StyledButton type="submit">{buttonText}</StyledButton>
    </form>
  );
};

export default Form;
