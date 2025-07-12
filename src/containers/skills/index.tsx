import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ListIcon, ListIconModel, Types } from '../../shared/icons';

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
    <section id="skills" className="bg-[rgba(147,107,232,0.15)]">
      <div className="max-w-[72.813rem] px-2.5 mx-auto sm:px-5 md:px-7.5">
        <div className="h-full shrink-0 flex flex-col items-center justify-center py-[3.125rem] lg:py-[6.25rem]">
          <ul className="flex w-full flex-row items-center justify-start gap-2 overflow-x-scroll overflow-y-hidden scroll-snap-x snap-mandatory scrollbar-none pt-2 pb-8 list-none select-none  sm:justify-center sm:gap-[0.625rem] sm:pb-[2rem]">
            {Object.values(Types).map((item: Types, i: number) => (
              <li
                key={i}
                onClick={() => {
                  onFilter(item);
                  setCurrentTag(item);
                }}
                data-text={item}
                className={`px-4 py-1 mx-1 text-base font-medium leading-5 border rounded-[0.7rem] transition-colors duration-200 relative after:content-[attr(data-text)] after:block after:whitespace-nowrap ${
                  item === currentTag ? 'text-white bg-primary border-white' : 'text-gray-600 border-gray-600 hover:text-white hover:bg-primary hover:border-white'
                }`}
              ></li>
            ))}
          </ul>
          <div className="w-full flex flex-col flex-wrap text-center min-h-[21.875rem]">
            <motion.div
              className="grid gap-y-[1.25rem] gap-x-[0.938rem]
                  grid-cols-5
                  min-[500px]:grid-cols-6
                  min-[600px]:grid-cols-7
                  md:grid-cols-9
                  min-[912px]:grid-cols-11
                  lg:grid-cols-13"
            >
              <AnimatePresence>
                {filteredIcons
                  .filter((item) => item.active)
                  .map((icon, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center justify-center bg-white rounded-[12px] sm:w-[80px] sm:h-[80px] sm:gap-[0.313rem] sm:rounded-[16px]"
                      >
                        <div className="flex items-center justify-center shrink-0 fill-[rgba(255, 255, 255, 0.1)]">
                          <div className="w-full h-full" role="tooltip">
                            <img src={icon.path} alt={icon.name} width="100%" height="100%" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Chèn SkillEmpty giữa các phần tử, không chèn sau phần tử cuối */}
                      {index < filteredIcons.length - 1 && (
                        <motion.div className="flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.75)] border-[3px] border-dashed border-[#cccc] rounded-[16px] sm:w-[80px] sm:h-[80px] sm:gap-[0.313rem]">
                          <div className="flex items-center justify-center shrink-0 fill-[rgba(255, 255, 255, 0.1)]">
                            <div className="w-0 h-0" />
                          </div>
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
