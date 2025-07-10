import styled from 'styled-components';

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
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
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
