import React from 'react';
import styled from 'styled-components';

import { RippleEffect } from './RippleEffect';

interface IProps {
  color?: string;
  faded?: boolean;
  children: string;
  onClick?: (e) => void;
}

export const Text: React.FC<IProps> = ({
  color = "white",
  faded = true,
  children,
  onClick,
}) => {
  return (
    <P color={color} faded={faded} onClick={onClick}>
      <RippleEffect>{children}</RippleEffect>
    </P>
  );
};

interface ITextProps {
  faded: boolean;
  color: string;
}

const P = styled.p<ITextProps>`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.faded ? 0.5 : 1)};
  text-align: center;
  font-size: 0.9rem;
`;
