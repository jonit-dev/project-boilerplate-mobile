import React from 'react';
import styled from 'styled-components';

interface IProps {
  label: string;
  value: string;
  onChange: (e) => void;
  type: string;
  autoComplete?: "on" | "off";
  children?: React.ReactNode;
}

export const FloatingInput: React.FC<IProps> = ({
  value,
  onChange,
  ...rest
}) => {
  if (!rest.autoComplete) rest.autoComplete = "off";

  return (
    <Container>
      <div className="input-group">
        {rest.children ? (
          rest.children
        ) : (
          <input
            {...rest}
            required
            value={value}
            onChange={(e) => onChange(e)}
          />
        )}

        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{rest.label}</label>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .input-group {
    position: relative;
    margin-bottom: 0.8rem;
  }

  input {
    font-size: 1rem;
    color: var(--ion-color-dark);

    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid var(--ion-color-input-border);
    &:focus {
      border-bottom: none;
      outline: none;
    }

    padding-bottom: 0.7rem;
    padding-left: 1rem;
    padding-top: 1rem;
  }

  label {
    color: var(--ion-color-input);
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 17px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -6px;
    font-size: 12px;
    color: var(--ion-color-primary);
  }
  input:not(:focus) ~ label {
    color: var(--ion-color-input);
  }

  .bar {
    position: relative;
    display: block;
    width: 315px;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: var(--ion-color-primary);
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.4s ease;
    -moz-animation: inputHighlighter 0.4s ease;
    animation: inputHighlighter 0.4s ease;
  }

  /* animations */
  @-webkit-keyframes inputHighlighter {
    from {
      background: var(--ion-color-primary);
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: var(--ion-color-primary);
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: var(--ion-color-primary);
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;
