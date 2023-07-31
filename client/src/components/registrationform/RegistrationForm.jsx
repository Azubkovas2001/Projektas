import React, { useState } from "react";
import { ModalContainer, ModalContent, ModalButton, StyledDiv } from "./RegistrationForm.style";
import Form from "../form/Form";
import { StyledButton } from "../form/Form.style";

const RegistrationForm = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    registrationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
        firstName: "",
        lastName: "",
        email: "",
        registrationDate: "",
      });
        closeForm()
        alert("Klientas sėkmingai užregistruotas");
        window.location.reload();
      } else {
        alert("Užpildikyte visus laukelius");
      }
    } catch (error) {
      console.error("Klaida registracijos metu:", error);
    }
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <StyledDiv>
      <h1>Clients</h1>
      <StyledButton onClick={openForm}>Register</StyledButton>

      <ModalContainer visible={showForm}>
        <ModalContent>
          <ModalButton onClick={closeForm}>
            Cancel
          </ModalButton>
          <Form
            buttonText="Register"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </ModalContent>
      </ModalContainer>
    </StyledDiv>
  );
};

export default RegistrationForm;
