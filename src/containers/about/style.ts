import styled from 'styled-components';

export const Container = styled.section<{ id: string; children: any }>`
  background-color: white;
  padding-left: 0;
  padding-right: 0;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;

  @media (min-width: 1024px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
`;

export const Content = styled.div<{
  'data-aos': string;
  'data-aos-offset': string;
  'data-aos-easing': string;
  'data-aos-duration': string;
  children: any;
}>`
  margin: 0 auto;
  max-width: 75rem;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0;
    padding-right: 0;
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
`;

export const InfoWrapper = styled.div<{
  'data-aos': string;
  'data-aos-offset': string;
  'data-aos-easing': string;
  'data-aos-duration': string;
  children: any;
}>`
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    width: 50rem;
    height: 30.5525rem;
  }
`;

export const Overplay = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.625rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 23.12375rem;
  }

  @media (min-width: 1024px) {
    width: 23.12375rem;
    height: 30.5525rem;
  }

  .shine {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
    opacity: 0;
    z-index: 3;
    transform: translate(0, 0) rotate(0) skewX(30deg) skewY(0) scaleX(1) scaleY(1);
    animation: shine 0.75s linear 1;
  }

  &:hover .shine {
    display: block;
  }

  @keyframes shine {
    0% {
      left: -50%;
      opacity: 0;
    }
    50% {
      left: 25%;
      opacity: 0.5;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }
`;

export const Avatar = styled.div`
  height: 30.5525rem;
  width: 100%;
  box-shadow: 0 0 #0000, 0 0 #0000, 0px 0px 20px 0px rgba(0, 0, 0, 0.13);
  background: url(/assets/images/avatar.png) 50% / cover no-repeat;
`;

export const Title = styled.span`
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #8c89a2;
  display: flex;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.125rem;
  width: 100%;
  height: 1.625rem;

  @media (min-width: 1024px) {
    height: 6.26563rem;
  }
`;

export const Name = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3f3a64;
  font-size: 2rem;
  flex-shrink: 0;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  margin-top: 0.5rem;
  line-height: 3rem;
  @media (min-width: 1024px) {
    width: 23.4375re;
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  line-height: 1.625rem;
  font-style: normal;
  font-weight: 400;
  color: #37352f;
  font-size: 1.125rem;
  margin-top: 0.8rem;

  @media (min-width: 1024px) {
    width: 46.875rem;
  }
`;

export const Info = styled.div`
  flex-shrink: 0;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 1.5rem;
  @media (min-width: 640) {
    padding-top: 1rem;
  }
`;

export const Row = styled.div`
  display: grid;
  margin-top: 0.313rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Column = styled.div`
  display: inline-flex;
  padding-top: 0;
  align-items: flex-start;
  height: 1.8rem;
  padding-bottom: 0.05rem;
  gap: 0.905rem;
  flex-shrink: 0;
`;

export const Text = styled.div`
  height: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  font-style: normal;
  label {
    font-weight: 600;
    line-height: 1.8rem;
    color: #3f3a64;
  }

  span {
    font-weight: 400;
    color: #696969;
  }

  a {
    color: #7d11f9;
  }
`;

export const DownLoad = styled.div`
  margin-top: 2.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.13rem;

  @media (min-width: 640px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 3.13rem;
    margin-top: 3rem;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  gap: 1.75rem;

  @media (min-width: 1024px) {
    justify-content: start;
    order: 1;
  }
`;

export const Line = styled.span`
  width: 3.75rem;
  height: 0.125rem;
  background-color: #7d11f9;
`;

export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  a {
    :hover {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

export const Button = styled.button`
  order: 1;
  width: 100%;
  height: 3.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background-color: #7d11f9;
  border-width: 1px solid #7d11f9;

  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.5s;
  }

  @media (min-width: 1024px) {
    width: 17.32438rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.313rem;
  }

  svg {
    width: 1.20625rem;
    flex-shrink: 0;
    height: 1.125rem;
  }

  span {
    text-transform: capitalize;
    font-size: 1.125rem;
    text-align: center;
    color: white;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;
