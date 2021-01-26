import React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

export const SideMenuContainer: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 1.5rem;
  min-height: 100%;
`;
