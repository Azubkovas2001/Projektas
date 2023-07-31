import React, { useState } from "react";
import Form from "../form/Form";
const UpdateForm = ({ client, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: client.firstName,
    lastName: client.lastName,
    email: client.email,
    registrationDate: client.registrationDate,
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

  if (!formData.firstName || !formData.lastName || !formData.email || !formData.registrationDate) {
    alert("Visi laukai privalo būti užpildyti");
    return;
  }
    try {
      const response = await fetch(`http://localhost:3000/clients/${client._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Klientas atnaujintas sėkmingai");
        onUpdate();
      } else {
        console.error("Klaida atnaujinant klientą");
      }
    } catch (error) {
      console.error("Klaida atnaujinant klientą:", error);
    }
  };

  return (
    <div>
      <h1>Update Form</h1>
      <Form
        buttonText="Update"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UpdateForm;
