import { lighten, saturate } from 'polished';
import React from 'react';
import styled from '@emotion/styled';

import { css } from '@emotion/core';

import { colors } from '../../styles/colors';
import config from '../../website-config';

export const SubscribeForm: React.FC = () => {
  return (
    <form
      noValidate
      css={SubscribeFormStyles}
      action={config.mailchimpAction}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="subscribe-form"
      target="_blank"
    >
      {/* This is required for the form to work correctly  */}
      <FormGroup className="form-group">
        <SubscribeEmail
          className="subscribe-email"
          type="email"
          name={config.mailchimpEmailFieldName}
          id={config.mailchimpEmailFieldName}
          placeholder="youremail@example.com"
        />
      </FormGroup>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name={config.mailchimpName} tabIndex={-1} />
      </div>
      <SubscribeFormButton type="submit">
        <span>Subscribe</span>
      </SubscribeFormButton>
    </form>
  );
};

const SubscribeFormStyles = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 460px;

  @media (max-width: 500px) {
    flex-direction: column;

    .form-group {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const SubscribeEmail = styled.input`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)} 1px solid;
  
  color: ${colors.primaryBlack};
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;

  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${lighten('-0.02', colors.lightgrey)};
  }
`;

const SubscribeFormButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 0 0 10px;
  padding: 0 20px;
  height: 43px;
  outline: none;
  color: ${colors.primaryBlack};
  font-size: 1.5rem;
  line-height: 39px;
  font-weight: 400;
  text-align: center;
  background: ${colors.primaryGreen};
  border-radius: 5px;

  -webkit-font-smoothing: subpixel-antialiased;

  :active,
  :focus {
    background: ${colors.primaryGreen};
  }
  @media (max-width: 500px) {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

