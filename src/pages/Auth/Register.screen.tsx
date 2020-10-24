import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { InternalPage } from '../../components/InternalPage';

interface IProps extends RouteComponentProps {}

export const RegisterScreen: React.FC<IProps> = (props) => {
  return (
    <InternalPage title={"Register"} authRequired={true} {...props}>
      <p>This is the register page</p>
    </InternalPage>
  );
};
