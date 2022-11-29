import Header from "./components/Header";
import Page from "./pages/Page";
import { InjectedConnector } from "@web3-react/injected-connector";

function App() {
  return (
    <>
      <Header />
      <Page />
    </>
  );
}

export default App;

export const Injected = new InjectedConnector({});
