import React from 'react';
import MaskInput from 'react-maskinput';

import { FloatingInput } from './FloatingInput';

interface IProps {
  label: string;
  mask: string;
  type: string;
  autoComplete?: "on" | "off";
  value: string;
  onChange: (e) => void;
}

export const FloatingInputMask: React.FC<IProps> = (props) => {
  return (
    <FloatingInput {...props}>
      <MaskInput
        //@ts-ignore
        required
        {...props}
      />
    </FloatingInput>
  );
};
