import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    strong {
      font-size: 20px;
      color: #ccc;
    }

    select {
      height: 30px;
      min-width: 140px;
      margin-top: 20px;

      option {
        font-size: 15px;
      }
    }
  }
`;

export const SellersList = styled.ul`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  grid-gap: 30px;

  li {
    align-items: center;
    min-height: 300px;
    background: #eee;
    border-radius: 4px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .head {
      display: flex;
      align-items: center;
    }
    .head img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .head strong {
      font-size: 20px;
      color: #1a1a1d;
    }

    p,
    strong,
    span {
      color: #333;
    }

    button {
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(1.15);
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
      div svg path {
        color: #fff;
      }
      span {
        color: #1a1a1d;
      }
    }
  }
`;
