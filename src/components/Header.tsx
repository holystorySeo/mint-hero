import styled from "styled-components";

export default function Header() {
  return <HeaderWeb />;
}

const HeaderWeb = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border: 1px solid black;
`;
