import styled from "styled-components";
// import { Customize } from "styled-icons";

export const Background = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 0.18rem;
  height: 100%;
  overflow-y: auto;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Head = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin: 0;
  border-bottom: 1px solid transparent;
  border-color: #fff;
`;

export const Button = styled.div`
  height: 0.4rem;
  border: 1px solid transparent;
  border-color: #fff;
  font-size: 0.16rem;
  color: #fff;
  padding: 0.08rem;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #000;
  white-space: nowrap;
  border-right: 1px solid transparent;
  border-color: #fff;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #000;
`;

export const Icon = styled.div<{ bg: any }>`
  background: url(${props => props.bg}) center top/0.4rem 0.4rem no-repeat;
  width: 0.8rem;
  height: 0.6rem;
  padding: 0.4rem 0 0 0;
  line-height: 0.18rem;
  text-align: center;
`;
