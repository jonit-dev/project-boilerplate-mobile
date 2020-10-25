import { IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  type: HTMLInputElement["type"];
  icon: string;
  color?: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

export const TransparentInput: React.FC<IProps> = ({
  type,
  icon,
  color = "white",
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Container color={color}>
      <IonIcon icon={icon} className="icon" />
      <input
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

interface IContainerProps {
  color: string;
}

const Container = styled.div<IContainerProps>`
  position: relative;
  margin-bottom: 1.8rem;

  input {
    border-bottom: 1px solid ${(props) => props.color};
    padding-left: 2rem;
    padding-bottom: 0.7rem;
    color: ${(props) => props.color};

    &::placeholder {
      font-style: italic;
      color: var(--ion-color-light-shade);
      font-size: 0.9rem;
      letter-spacing: 1.1;
    }
  }

  .icon {
    position: absolute;
    top: -2.4px;
    left: -1px;
    font-size: 1.4rem;
    color: ${(props) => props.color};
  }
`;
