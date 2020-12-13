import React from "react";
import styled from "styled-components";

import { colors } from "../constants/colors.constants";

interface IProps {
  /* in hex */
  color?: string | undefined;
  children: React.ReactChild;
}

export const Text: React.FC<IProps> = ({ color, children }) => {
  return <P color={color}>{children}</P>;
};

interface IPProps {
  color: string | undefined;
}

const P = styled.p<IPProps>`
  color: ${(props) => (props.color ? props.color : colors.dark)};
  font-size: 1rem;
`;
