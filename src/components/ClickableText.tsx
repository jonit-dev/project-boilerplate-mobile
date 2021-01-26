import React from "react";
import styled from "styled-components";

import { RoutingHelper } from "../libs/RoutingHelper";
import { RippleEffect } from "./RippleEffect";

interface IProps {
  color?: string;
  faded?: boolean;
  children: string;
  rippleEffect?: boolean;
  href?: string;
}

export const ClickableText: React.FC<IProps> = ({
  color = "white",
  faded = true,
  children,
  rippleEffect = true,
  href,
}) => {
  const onClickableTextClick = () => {
    if (href) {
      RoutingHelper.redirect(href);
    }
  };

  return (
    <P color={color} faded={faded} onClick={onClickableTextClick}>
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
