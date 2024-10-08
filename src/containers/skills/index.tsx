import { ICONS, ListIconModel, Types } from '@shared/icons';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ContentWrapper, FilterButton, FilterButtonWrapper, IconWrapper, ListSkills, Skill, SkillsContainer, SkillsSection, SkillsWrapper, TextWrapper } from './style';

export default function Skills() {
  const [icons, setIcons] = useState<ListIconModel[]>(Array.from(ICONS.values()));
  const [filteredIcons, setFilteredIcons] = useState<ListIconModel[]>(icons);
  const [currentTag, setCurrentTag] = useState<Types>(Types.ALL);

  const onFilter = (tag: Types) => {
    switch (tag) {
      case Types.ALL:
        setFilteredIcons(icons);
        break;
      case Types.FRONT_END:
      case Types.BACK_END:
      case Types.DATABASE:
      case Types.OTHERS:
        const filtered = icons.filter((item) => item.type.includes(tag));
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
                      <TextWrapper textContent={icon.name.toString()}></TextWrapper>
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
