import RegistrationForm from "./components/registrationform/RegistrationForm";
import Clients from "./components/clientstable/ClientsTable";
import { StyledDiv } from "./App.styles";
function App() {
  return (
    <StyledDiv>
      <RegistrationForm />
      <Clients />
    </StyledDiv>
  );
}

export default App;
