import styled from "styled-components";

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

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }
`;
