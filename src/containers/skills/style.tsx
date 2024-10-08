import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SkillsSection = styled.section<{ id: string; children: any }>`
  background-color: white;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  background-color: white;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.125rem 0;
  @media (min-width: 1024px) {
    padding: 6.25rem 0;
  }
`;

export const FilterButtonWrapper = styled.ul`
  display: flex;
  align-self: stretch;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  list-style: none;
  margin: unset;
  padding-left: unset;

  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 2.125rem;

  @media (min-width: 640px) {
    gap: 0.9375rem;
    gap: 0.625rem;
    justify-content: center;
    padding-bottom: 1.75rem;
  }
`;

export const FilterButton = styled.li<{ isActive: boolean; textContent: string } & React.ButtonHTMLAttributes<HTMLButtonElement>>`
  width: fit-content;
  padding: 0.25rem 1rem;
  margin: 0 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  border: 1px solid;
  border-radius: 0.7rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  ${({ isActive }) =>
    isActive
      ? `
    color: white;
    background-color: rgb(125 17 249);
    border-color: white;
  `
      : `
    color: #4b5563; /* Gray-600 */
    border-color: #4b5563;
  `}
  &::after {
    content: '${(props) => props.textContent}';
    display: block;
    white-space: nowrap;
  }
  &:hover {
    color: white;
    background-color: rgb(125 17 249);
    border-color: white;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 72.813rem;
  padding: 0 0.625rem;
  margin: 0 auto;
  @media (min-width: 640px) {
    padding: 0 1.25rem;
  }
  @media (min-width: 768px) {
    padding: 0 1.875rem;
  }
`;

export const ListSkills = styled(motion.div)`
  display: grid;
  row-gap: 0.625rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    gap: 0.938rem;
    row-gap: 1.25rem;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
    row-gap: 1.25rem;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  @media (min-width: 912px) {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    min-height: 21.875rem;
    grid-template-columns: repeat(10, minmax(0, 1fr)) !important;
  }
`;

export const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    width: 6.25rem;
    height: 7.313rem;
    gap: 0.313rem;
  }

  @media (min-width: 768px) {
    width: 6.25rem;
    height: 7.313rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 4.5rem;
  fill: rgba(255, 255, 255, 0.1);
  img {
    width: 55px;
    height: 55px;
  }
  span {
    scale: 0.7;

    :hover {
      overflow: hidden;
      transition-property: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      cursor: pointer;
    }
    @media (min-width: 600px) {
      scale: 0.75;
    }

    @media (min-width: 640px) {
      scale: 0.8;
    }

    @media (min-width: 768px) {
      scale: 0.85;
    }

    @media (min-width: 912px) {
      scale: 0.9;
    }

    @media (min-width: 1024px) {
      scale: 0.95;
    }
  }
`;

export const TextWrapper = styled.div<{ textContent: any }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.3125rem;
  height: 2.5rem;
  width: 100%;
  font-size: 0.875rem;
  @media (min-width: 640px) {
    padding: 0;
    font-size: 1rem;
  }
  &::after {
    content: '${(props) => props.textContent}';
    display: block;
    color: #092c4c;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;
