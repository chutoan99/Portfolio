import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ListIcon, ListIconModel, Types } from '../../shared/icons';
import styled from 'styled-components';

export default function Skills() {
  const [filteredIcons, setFilteredIcons] = useState<ListIconModel[]>(ListIcon);
  const [currentTag, setCurrentTag] = useState<Types>(Types.ALL);

  const onFilter = (tag: Types) => {
    switch (tag) {
      case Types.ALL:
        setFilteredIcons(ListIcon);
        break;
      case Types.FRONT_END:
      case Types.BACK_END:
      case Types.OTHERS:
        const filtered = ListIcon.filter((item) => item.type.includes(tag));
        setFilteredIcons(filtered);
        break;
    }
  };

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <ContentWrapper>
          <FilterButtonWrapper>
            {Object.values(Types).map((item: Types, i: number) => (
              <FilterButton
                key={i}
                onClick={() => {
                  onFilter(item);
                  setCurrentTag(item);
                }}
                textContent={item}
                isActive={item === currentTag}
              ></FilterButton>
            ))}
          </FilterButtonWrapper>
          <SkillsWrapper>
            <ListSkills>
              <AnimatePresence>
                {filteredIcons.map((icon: ListIconModel, index: number) => {
                  return (
                    <Skill
                      key={index}
                      layout
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconWrapper>
                        <span>{icon.value}</span>
                      </IconWrapper>
                      <TextWrapper textContent={icon.name}>{/* <span>{icon.name}</span> */}</TextWrapper>
                    </Skill>
                  );
                })}
              </AnimatePresence>
            </ListSkills>
          </SkillsWrapper>
        </ContentWrapper>
      </SkillsContainer>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
  background-color: white;
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;

const ContentWrapper = styled.div`
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

const FilterButtonWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.625rem;
  padding-top: 10px;
  padding-bottom: 3.125rem;

  @media (min-width: 640px) {
    gap: 0.9375rem;
    padding-bottom: 3.75rem;
  }
`;

const FilterButton = styled.span<{ isActive: boolean; textContent: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem;
  margin: 0 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  border: 1px solid;
  border-radius: 0.75rem;
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
  }
  &:hover {
    color: white;
    background-color: rgb(125 17 249);
    border-color: white;
  }
`;

const SkillsContainer = styled.div`
  max-width: 72.813rem;
  margin: 0 auto;
`;

const ListSkills = styled(motion.div)`
  display: grid;
  gap: 0.938rem;
  row-gap: 0.625rem;
  padding: {
    left: 1rem;
    right: 1rem;
  }
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (min-width: 1024px) {
    min-height: 21.875rem;
    grid-template-columns: repeat(10, minmax(0, 1fr)) !important;
    grid-template-rows: repeat(3, minmax(0, 1fr)) !important;
  }

  @media (min-width: 768px) {
    padding: {
      left: 1.25rem;
      right: 1.25rem;
    }
  }

  @media (min-width: 640px) {
    margin-left: 0px;
    margin-right: 0px;
    row-gap: 1.25rem;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
`;

const Skill = styled(motion.div)`
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 4.5rem;
  fill: rgba(255, 255, 255, 0.1);
  scale: 0.75;

  span {
    :hover {
      overflow: hidden;
      transition-property: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      cursor: pointer;
    }

    @media (min-width: 640px) {
      scale: 1.1;
    }
  }
`;

const TextWrapper = styled.div<{ textContent: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 2.5rem;
  width: 100%;
  &::after {
    content: '${(props) => props.textContent}';
    display: block;
    color: #092c4c;
    font-style: normal;

    font-weight: 500;
    line-height: 1.25rem;

  }
`;
