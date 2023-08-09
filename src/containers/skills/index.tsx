import { AnimatePresence, motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ListIcon, ListIconModel } from '../../shared/icons';
import SkillItem from '../../components/skill_item';
export default function Skills() {
  const [icons, setIcons] = useState(ListIcon);
  const [filteredIcons, setFilteredIcons] = useState(icons);
  const [currentTag, setCurrentTag] = useState('All');
  const onFilter = useCallback(
    (tag: string) => {
      if (tag === 'All') {
        setFilteredIcons(icons);
      } else {
        const filtered = icons.filter((item) => item.type.includes(tag));
        setFilteredIcons(filtered);
      }
      setCurrentTag(tag);
    },
    [icons]
  );

  return (
    <section id="skills" className="bg-[white]">
      <div className=" max-w-[75rem] mx-auto my-0">
        <div className="flex h-full lt:h-[43rem] flex-col justify-center items-center shrink-0 px-0 py-[3.125rem] lt:py-[6.25rem] bg-[white]">
          <div className="gap-[.625rem] sm:gap-[0.9375rem]  justify-center flex items-center self-stretch flex-wrap w-full pt-10 pb-[3.125rem] sm:pb-[3.75rem]">
            {['All', 'Front End', 'Back End', 'Others'].map((tag: string, index: number) => (
              <span
                key={index}
                onClick={() => onFilter(tag)}
                className={`flex justify-center items-center border text-base not-italic font-medium leading-5 cursor-pointer px-4 md:px-5 py-1 rounded-xl border-solid ${
                  tag === currentTag ? 'text-white bg-primary border-white' : 'text-gray-600 border border-gray-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full text-center flex flex-col  flex-wrap">
            <motion.div className="grid lt:grid-rows-3 grid-cols-4 sm:grid-cols-6 lt:grid-cols-10  gap-y-[10px]  sm:gap-y-[20px] md:gap-y-[40px] px-[1rem] md:px-[20px]  sm:mx-0 lt:min-h-[21.875rem]">
              <AnimatePresence>
                <SkillItem data={filteredIcons} />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
