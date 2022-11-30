import { useState, useEffect } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { heroAddress } from "../static/mintInfo";
import { heroAbi } from "../static/mintInfo";
import { ethers } from "ethers";
import hero from '../static/hero.png';

export default function Main() {
  const [message, setMessage] = useState("");
  const { active, account, chainId, library } = useWeb3React();


  useEffect(() => {
    if(chainId !== undefined) {
      setMessage('Connected your wallet')
    }
  }, [chainId])

  const handleMint = async () => {
    if(active && account) {
      setMessage("OK! Mint now")

      const contractInastance = new ethers.Contract(heroAddress, heroAbi);
      const data = await contractInastance.populateTransaction.summon();

      const signer = library.getSigner();
      const signedTransaction = await signer.sendTransaction(data);
      setMessage("Wait, please...")

      let reciept = await signedTransaction.wait();
      setMessage("Wow! Mint Success")
      console.log(`reciept = ${reciept}`);
    } else {
      setMessage("Please Connect your wallet metamask!")
    }

  };

  return (
    <Container>
      <div className="main">
        <h2 className="">GET OWN YOUR HERO</h2>
        
        <h3 className="">AMOUNT</h3>
        <h3 className="">100</h3>
        <h3 className="">0.2ETH PER 1NFT</h3>

        <button onClick={handleMint}>MINTING</button>
      </div>
      <div className="image">
        <img src={hero} alt="hero" />
      </div>
      <div className="message">{message}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 100vh;
  padding-top: 7rem;
  border: 1px solid black;
  border-top: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 450px;
    height: 300px;
  }

  .image {
    width: 400px;
    height: 200px;
    margin-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
    }
  }

  .message {
    margin-top: 1.5rem;
    color: red;
    font-size: 1.5rem;
  }
`
