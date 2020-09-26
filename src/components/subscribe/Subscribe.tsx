import { lighten } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../../styles/colors';
import { SubscribeForm } from './SubscribeForm';

export interface SubscribeProps {
  title: string;
}

export const Subscribe: React.FC<SubscribeProps> = props => {
  return (
    <SubscribeFormSection>
      <h3 css={SubscribeFormTitle}>Subscribe to {props.title}</h3>
      <p>Get the latest posts delivered right to your inbox</p>
      <SubscribeForm />
    </SubscribeFormSection>
  );
};

const SubscribeFormSection = styled.section`
  margin: 1.5em 0;
  padding: 6.5vw 7vw 8vw;
  text-align: center;
  background: ${colors.secondaryBlack};
  border-radius: 3px;

  p {
    margin-bottom: 0.2em 0 1em;
    font-size: 2.1rem;
    line-height: 1.55em;
  }

  @media (max-width: 650px) {
    p {
      font-size: 1.6rem;
    }
  }

  .form-group {
    flex-grow: 1;
  }
`;

const SubscribeFormTitle = css`
  margin: 0 0 3px 0;
  padding: 0;
  color: ${colors.whitegrey};
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 2.4rem;
  }
`;
