import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ListIcon, ListIconModel, Types } from '../../shared/icons';
import { ContentWrapper, FilterButton, FilterButtonWrapper, IconWrapper, ListSkills, Skill, SkillEmpty, SkillsContainer, SkillsSection, SkillsWrapper, TextWrapper } from './style';

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
      case Types.DATABASE:
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
                textContent={item}
                isActive={item === currentTag}
                onClick={() => {
                  onFilter(item);
                  setCurrentTag(item);
                }}
              ></FilterButton>
            ))}
          </FilterButtonWrapper>
          <SkillsWrapper>
            <ListSkills>
              <AnimatePresence>
                {filteredIcons.map((icon, index) => (
                  <React.Fragment key={index}>
                    <Skill layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <IconWrapper>
                        <span>{icon.value}</span>
                      </IconWrapper>
                      {/* <TextWrapper textContent={icon.name.toString()} /> */}
                    </Skill>

                    {/* Chèn SkillEmpty giữa các phần tử, không chèn sau phần tử cuối */}
                    {index < filteredIcons.length - 1 && (
                      <SkillEmpty>
                        <IconWrapper>
                          <div className="w-0 h-0" />
                        </IconWrapper>
                      </SkillEmpty>
                    )}
                  </React.Fragment>
                ))}
              </AnimatePresence>
            </ListSkills>
          </SkillsWrapper>
        </ContentWrapper>
      </SkillsContainer>
    </SkillsSection>
  );
}
