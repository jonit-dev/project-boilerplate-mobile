import { IonButton } from "@ionic/react";
import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactElement | string;
  expand: "full" | "block" | undefined;
  color: string;
  onClick?: (e: any) => void;
  link?: string;
  routerDirection?: "back" | "forward" | "none";
  iconSlot?: "start" | "end" | "icon-only";
  icon?: React.ReactElement;
  textColor?: string;
}

export const CustomButton: React.FC<IProps> = ({
  expand,
  color,
  children,
  onClick,
  link,
  routerDirection,
  iconSlot,
  icon,
  textColor,
}) => {
  return (
    <Container color={textColor}>
      <IonButton
        slot={iconSlot}
        expand={expand}
        color={color}
        onClick={onClick}
        routerLink={link}
        routerDirection={routerDirection}
      >
        <IconContainer color={textColor}>{icon}</IconContainer>
        <TextContainer color={textColor}>{children}</TextContainer>
      </IonButton>
    </Container>
  );
};

interface ITextProps {
  color: string | undefined;
}

const Container = styled.div<ITextProps>`
  ion-button::part(native) {
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    height: 2.7rem;
    text-transform: uppercase;
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

const TextContainer = styled.div`
  color: ${(props) => (props.color ? props.color : `black`)};
`;

const IconContainer = styled.div<ITextProps>`
  margin-right: 0.5rem;

  ion-icon {
    font-size: 1rem;
    color: ${(props) => (props.color ? props.color : `black`)};
  }
`;
