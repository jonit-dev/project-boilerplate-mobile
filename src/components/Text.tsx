import React from 'react';
import styled from 'styled-components';

interface IProps {
  color?: string;
  faded?: boolean;
  children: string;
}

export const Text: React.FC<IProps> = ({
  color = "white",
  faded = true,
  children,
}) => {
  return (
    <P color={color} faded={faded}>
      {children}
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
