import React from 'react';
import MaskInput from 'react-maskinput';
import styled from 'styled-components';

import { FloatingInput } from '../FloatingInput';

interface IProps {
  label: string;
  type: string;
  autoComplete?: "on" | "off";
  value: string;
  onChange: (e) => void;
}

export const PhoneMask: React.FC<IProps> = ({
  type,
  label,
  value,
  onChange,
  autoComplete,
}) => {
  return (
    <Container>
      <FloatingInput
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      >
        <MaskInput
          //@ts-ignore
          className="phone-mask"
          required
          type="tel"
          maskChar="_"
          mask="(000) 000-0000"
          value={value}
          onChange={onChange}
        />
      </FloatingInput>
    </Container>
  );
};

const Container = styled.div`
  .phone-mask {
    font-size: 1rem;
    color: var(--ion-color-dark);
  }
`;
