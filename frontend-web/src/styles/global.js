import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font: 400 14px Montserrat, sans-serif;
    background-color: #121212;
    -webkit-font-smoothing: antialiased;
    color: #efefef;
  }

  input, button, textarea {
    font: 400 18px Montserrat, sans-serif;
    color: #efefef;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #efefef;
    border: 1px solid #41414d;
    background-color: #191919;
    border-radius: 8px;
    padding: 0 24px;

    & + input, & + textarea {
      margin-top: 8px;
    }
  }

  form textarea {
    width: 100%;
    min-height: 50px;
    max-height: 250px;
    color: #efefef;
    border: 1px solid #41414d;
    background-color: #191919;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
    &::-webkit-scrollbar {
    display: none;
   }

    & + input {
      margin-top: 4px;
    }
  }

  .button {
    width: 100%;
    height: 60px;
    background-color: #e02041;
    border: 0;
    border-radius: 8px;
    color: #efefef;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(85%);
    }
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #efefef;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .Toastify__toast--default {
    color: #333;
 }
`;
