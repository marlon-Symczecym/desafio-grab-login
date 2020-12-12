import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  align-items: flex-end;
`;

const Enter = keyframes`
from {
  opacity: 0;
  transform: translateX(-10rem);
}
to {
  opacity: 1;
  transform: translateX(0rem);
}
`;

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4e5bee;
  opacity: 0;

  animation: ${Enter} 0.4s linear forwards;

  display: flex;
  align-items: flex-end;

  @media (min-width: 1000px) {
    width: 35%;
    position: relative;
    z-index: 6;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 100px) {
    width: 93%;
  }
`;

const EnterLogo = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`;

export const Logo = styled.img`
  width: 25rem;
  scale: 1;
  animation: ${EnterLogo} 0.3s linear 0.4s forwards;
`;

export const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Helper = styled.p`
  font-size: 1.6rem;
  color: #ffffff;
`;
export const Link = styled.a`
  font-size: 1.6rem;
  color: #ffffff;
  font-weight: 500;
`;

const EnterArt = keyframes`
from {
  opacity: 0;
  transform: translateX(-3rem)
}
to {
  opacity: 1;
  transform: translateX(0rem)
}
`;

export const Art = styled.img`
  width: 68%;
  height: 100vh;
  position: absolute;
  opacity: 0;

  animation: ${EnterArt} 0.3s linear 0.4s forwards;

  @media (max-width: 1000px) {
    display: none;
  }

  @media (min-width: 768px) {
    min-width: 86%;
    z-index: 0;
    right: 2rem;
  }
`;
