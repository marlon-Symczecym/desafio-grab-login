import styled, { keyframes } from "styled-components";

export const FormWrapper = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (min-width: 1200px) {
    width: 40rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  border: none;
  background: #ffffff;
  border-radius: 3rem;
  font-size: 1.8rem;
  color: 504f60;
  margin-top: 2rem;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }
`;

const EnterMessage = keyframes`
from {
  top: -2rem;
  opacity: 0;
}
to {
  top: 2rem;
  opacity: 1;
}
`;

export const MessageError = styled.span`
  opacity: 0;
  width: 50%;
  padding: 2rem 0;
  font-size: 1.8rem;
  background-color: white;
  text-align: center;
  margin-top: 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  animation: ${EnterMessage} 0.3s linear forwards;

  @media (max-widht: 600px) {
    width: 95%;
  }
`;
