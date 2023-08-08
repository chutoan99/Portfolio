import { useState, useCallback } from 'react';
import { ListIcon, ListIconModel } from '../../shared/icons';
export default function Skills() {
  const [icons, setIcons] = useState(ListIcon);
  const [filteredIcons, setFilteredIcons] = useState(icons);

  const onFilter = useCallback(
    (type: string) => {
      if (type === 'All') {
        setFilteredIcons(icons);
      } else {
        const filtered = icons.filter((item) => item.type.includes(type));
        setFilteredIcons(filtered);
      }
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
                className="bg-[white] flex justify-center items-center text-gray-600 border border-gray-600 text-base not-italic font-medium leading-5 cursor-pointer px-4 md:px-5 py-1 rounded-xl border-solid "
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full text-center flex flex-col  flex-wrap">
            <div className="grid grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(6,1fr)] lt:grid-cols-[repeat(9,1fr)]  gap-y-[10px]  sm:gap-y-[20px] md:gap-y-[40px] px-[1rem] md:px-[20px]  sm:mx-0">
              {filteredIcons.map((icon: ListIconModel, index: number) => (
                <div className="flex justify-center flex-col items-center sm:gap-2.5" key={index}>
                  <div
                    className=" w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]  shrink-0 bg-white flex justify-center items-center fill-[rgba(255,255,255,0.1)] rounded-[10px] hover:cursor-pointer hover:transition-[0.2s] hover:overflow-hidden hover:fill-[rgba(255,255,255,0.5)] hover:scale-105 hover:shadow-md"
                    style={{
                      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}
                  >
                    <div className="scale-75 sm:scale-90 md:scale-1">{icon.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
