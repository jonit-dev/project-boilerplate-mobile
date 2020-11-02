import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

export const FormPanel: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: white;

  border-radius: 10px;
  -webkit-box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.26);
  box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.26);
`;

export const FormTitle = styled.div`
  font-size: 1rem;
  color: var(--ion-color-primary);
  font-weight: bold;
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid var(--ion-color-form-division);
`;

export const FormBody = styled.div`
  min-height: 100px;
  padding: 1rem;

  ion-item {
    ion-label[id^="ion-input"] {
      color: var(--ion-color-medium);
    }
  }
`;
