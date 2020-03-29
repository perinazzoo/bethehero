import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    a {
      width: 220px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #41414d;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #999;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: #191919;
      border-radius: 8px;
      position: relative;
      padding: 24px;

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background-color: transparent;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        display: block;
        margin-bottom: 16px;
      }

      p {
        color: #b8bac1;
        line-height: 21px;
        font-size: 15px;

        & + strong {
          margin-top: 32px;
        }
      }
    }
  }
`;
