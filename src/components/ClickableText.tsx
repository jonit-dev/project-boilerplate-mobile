import React from "react";
import styled from "styled-components";

import { RippleEffect } from "./RippleEffect";

interface IProps {
  color?: string;
  faded?: boolean;
  children: string;
  onClick?: (e) => void;
  rippleEffect?: boolean;
}

export const ClickableText: React.FC<IProps> = ({
  color = "white",
  faded = true,
  children,
  onClick,
  rippleEffect = true,
}) => {
  return (
    <P color={color} faded={faded} onClick={onClick}>
      {rippleEffect ? (
        <RippleEffect>{children}</RippleEffect>
      ) : (
        <div>{children}</div>
      )}
    </P>
  );
};

interface ITextProps {
  faded: boolean;
  color: string;
  onClick?: (e) => void;
}

const P = styled.div<ITextProps>`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.faded ? 0.5 : 1)};
  font-size: 0.9rem;
  cursor: ${(props) => (props.onClick ? "pointer" : null)};
  padding: 0.4rem;
  text-align: center;
`;
