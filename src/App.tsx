import styled from "styled-components";
import Header from "./components/Header";
import Main from "./pages/Main";
import { InjectedConnector } from "@web3-react/injected-connector";

export const Injected = new InjectedConnector({});

export default function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


