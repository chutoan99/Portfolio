import styled from 'styled-components';

export const Container = styled.footer`
  background: rgba(147, 107, 232, 0.05);
  display: flex;
  justify-content: center;

  height: 100%;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    height: 15.25rem;
    padding: 1.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 75rem;
  gap: 1.25rem;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ListNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.625rem;
  width: 100%;
  list-style-type: none;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    gap: 0.9375rem;
  }

  @media (min-width: 1024px) {
    align-items: center;
  }
  li {
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    list-style-type: none;
    text-transform: capitalize;
    font-size: 1.3125rem;

    :hover {
      cursor: pointer;
      transition-property: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      color: #7d11f9;
    }

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: black;
    }
  }
`;

export const ListIcon = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  list-style-type: none;

  @media (min-width: 768px) {
    justify-content: end;
  }
  li {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;

    :hover {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;
