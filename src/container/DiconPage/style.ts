import styled from "styled-components";

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
  background: #0a0;
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin: 0;
  border-bottom: 1px solid transparent;
  border-color: #fff;
`;

export const Body = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #000;
  white-space: nowrap;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #fff;
  border-left: 1px solid #fff;
`;

export const Icon = styled.div<{ bg: any }>`
  background: url(${props => props.bg}) center top/0.4rem 0.4rem no-repeat;
  width: 0.8rem;
  height: 0.6rem;
  padding: 0.4rem 0 0 0;
  line-height: 0.18rem;
  text-align: center;
`;
