import React from "react";
import styled from "styled-components";

interface IContainerProps {
  name: string;
}

export const NotFoundContainer: React.FC<IContainerProps> = ({ name }) => {
  return (
    <Container>
      <strong>404</strong>
      <p>Page {name} not found!</p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  strong {
    font-size: 20px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
