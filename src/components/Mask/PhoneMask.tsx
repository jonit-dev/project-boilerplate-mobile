import { IonInput } from '@ionic/react';
import React from 'react';

interface IProps {
  value: string;
  onChange: (e) => void;
}

export const PhoneMask: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <IonInput
      type="tel"
      inputMode="tel"
      value={value}
      onIonChange={(e) => onChange(e)}
    />
  );
};
