import Page from "./page/Page";
import { InjectedConnector } from "@web3-react/injected-connector";

function App() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;

export const Injected = new InjectedConnector({});
