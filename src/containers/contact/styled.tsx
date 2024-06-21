import styled from 'styled-components';

export const Container = styled.section<{ id: string; children: any }>`
  background: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  @media (min-width: 1024px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 75rem;
  gap: 1.5625rem;
  @media (min-width: 640px) {
    flex-direction: column;
    gap: 1.875rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListInfo = styled.div<{
  'data-aos': string;
  'data-aos-anchor-placement': string;
  children: any;
}>`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 0.938rem;

  @media (min-width: 640px) {
    gap: 0.9375rem;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 45%;
    gap: 1.25rem;
  }
  @media (min-width: 1024) {
    width: 30.9775rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  height: 100%;
  gap: 1.5rem;
  width: 30.9775rem;

  @media (min-width: 640px) {
    width: 100%;
    gap: 1rem;
    height: 3.4375rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1.25rem;
  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition-property: 03s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 0%;

  span {
    height: 1.8125rem;
    width: 100%;
    font-style: normal;
    display: inline-block;
    color: #3f3a64;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
  }
  a {
    color: #696969;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    height: 1.6875rem;
    line-height: 1.75rem;
    font-size: 1.1875rem;
  }
`;

export const FormContact = styled.form<{
  'data-aos': string;
  id: string;
  'data-aos-anchor-placement': string;
  children: any;
}>`
  padding-bottom: 0;
  flex: 1 1 0%;
  width: 100%;
  height: 100%;

  @media (min-width: 640px) {
    width: 100%;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 1.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    height: 3.4375rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    gap: 0.625rem;
  }

  @media (min-width: 1024) {
    flex-direction: row;
  }
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  @media (min-width: 640px) {
    flex-direction: row;
  }

  button {
    border-radius: 0.625rem;
    background-color: #7d11f9;
    display: inline-flex;
    padding-left: 2.25rem;
    justify-content: center;
    align-items: flex-start;
    border-width: 1px solid #7d11f9;
    border-style: solid;
    padding-right: 2.2375rem;
    padding-top: 0.8125rem;
    padding-bottom: 0.8125rem;

    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
    @media (min-width: 640px) {
      justify-content: flex-start;
    }

    span {
      color: #ffffff;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem;
      text-align: center;
      text-transform: capitalize;
      font-size: 1.125rem;
    }
  }
`;

export const TextareaInner = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.84375rem;
  padding-bottom: 0.84375rem;
  border-radius: 0.625rem;
  align-items: center;
  width: 100%;
  background: rgba(147, 107, 232, 0.05);
  :hover {
    border-width: 1px;
    border-style: solid;
    border: 1px solid #7d11f9;
    transition-property: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  textarea {
    display: flex;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    line-height: normal;
    border-style: none;
    height: 8.75rem;
    font-size: 1.2rem;
    background: unset;
    border-radius: 0.625rem;
    color: #6c757d;
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
`;

export const InputInner = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.84375rem;
  padding-bottom: 0.84375rem;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(147, 107, 232, 0.05);
  border-radius: 0.625rem;
  @media (min-width: 640px) {
    height: 3.4375rem;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }

  :hover {
    border-width: 1px;
    border-style: solid;
    border: 1px solid #7d11f9;
    transition-property: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  input {
    display: flex;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    line-height: normal;
    border-style: none;
    font-size: 1.2rem;
    background: unset;
    border-radius: 0.625rem;
    color: #6c757d;
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
`;
