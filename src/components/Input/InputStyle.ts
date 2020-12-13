import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IInputWrapper {
  colorState?: string;
}

export const InputWrapper = styled.div<IInputWrapper>`
  width: 100%;
  height: 5rem;
  border: 2px solid ${(props) => props.colorState ?? "white"};
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 1.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 5rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #ffffff;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`;

export const MessageError = styled.span`
  font-size: 1.8rem;
  color: #ffffff;
  margin-top: 1rem;
  margin-left: 2rem;
`;
