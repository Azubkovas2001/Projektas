import React, { useState, useEffect } from "react";
import UpdateForm from "../updateform/UpdateForm";
import { StyledTable, StyledTbody, StyledThead, StyledDelButton, StyledUpdButton, StyledDiv  } from "./ClientsTable.style";
const ClientsTable = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:3000/clients");
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Klaida gaunant klientų duomenis:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleUpdateClient = (client) => {
    setSelectedClient(client);
  };

  const handleUpdateFormSubmit = () => {
    setSelectedClient(null);
    fetchClients();
  };

  const handleDeleteClient = async (clientId) => {
    try {
      const response = await fetch(`http://localhost:3000/clients/${clientId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Klientas ištrintas");
        fetchClients();
      } else {
        console.error("Klaida trinant klientą");
      }
    } catch (error) {
      console.error("Klaida trinant klientą:", error);
    }
  };

  return (
    <StyledDiv>
      <StyledTable>
        <StyledThead>
          <tr>
            <th>Nr.</th>
            <th>First name</th>
            <th>Last name</th>
            <th>E-Mail</th>
            <th>Registration Date</th>
            <th>Manage</th>
          </tr>
        </StyledThead>
        <StyledTbody>
          {clients.map((client, index) => (
            <tr key={client._id}>
              <td>{index + 1}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.registrationDate}</td>
              <td>
                <StyledUpdButton onClick={() => handleUpdateClient(client)}>
                  Edit
                </StyledUpdButton>
                <StyledDelButton onClick={() => handleDeleteClient(client._id)}>
                  Delete
                </StyledDelButton>
              </td>
            </tr>
          ))}
        </StyledTbody>
      </StyledTable>
      {selectedClient && (
        <UpdateForm client={selectedClient} onUpdate={handleUpdateFormSubmit} />
      )}
    </StyledDiv>
  );
};

export default ClientsTable;

