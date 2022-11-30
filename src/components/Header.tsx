import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Injected } from "../App";
import { FaWallet } from 'react-icons/fa';


export default function Header() {


  const { active, activate, deactivate, account} = useWeb3React();

  const handleConnect = () => {
    if ((window as any).ethereum === undefined) {
      window.open(
        `https://metamask.app.link/dapp/${window.location.host}`,
        "_blank"
      );
      return;
    }

    if (active && account) {
      deactivate();
    }
    activate(Injected);
  };

  return (
    <HeaderWeb>
      <div className="logo">ZeroX</div>
      <div className="button-area" onClick={handleConnect}>
        <div className="wallet"><FaWallet size="1x" /></div>
        <div className="text">{active ? account : "CONNECT WALLET"}</div>
      </div>

    </HeaderWeb>
  )
}

const HeaderWeb = styled.div`
  width: 80%;
  height: 80px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 50px;
  }

  .button-area {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 240px;
    height: 50px;
    border: 1px solid black;

    border-radius: 4px;
    background: none;
    cursor: pointer;
    line-height: 1;

    margin-right: 50px;
    padding-left: 10px;
  }

  .wallet {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .text {
    width: 150px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
