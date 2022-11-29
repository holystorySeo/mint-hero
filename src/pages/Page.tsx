import { useWeb3React } from "@web3-react/core";
import { Injected } from "../App";
import { heroAddress } from "../static/mintInfo";
import { heroAbi } from "../static/mintInfo";
import { ethers } from "ethers";

export default function Page() {
  const { active, activate, deactivate, account, chainId, library } =
    useWeb3React();

  const handleConnect = () => {
    if (active && account) {
      deactivate();
    }
    activate(Injected);
  };

  const handleMint = async () => {
    const contractInastance = new ethers.Contract(heroAddress, heroAbi);
    const data = await contractInastance.populateTransaction.summon();

    const signer = library.getSigner();
    const signedTransaction = await signer.sendTransaction(data);

    let reciept = await signedTransaction.wait();
    console.log(`reciept = ${reciept}`);
  };

  return (
    <>
      <div>Account: {account}</div>
      <div>chainId: {chainId}</div>
      <button onClick={handleConnect}>
        {active ? "연결 해제" : "지갑 연결하기"}
      </button>
      <button onClick={handleMint}>Minting</button>
    </>
  );
}
