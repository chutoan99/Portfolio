import { motion } from 'framer-motion';
import { ListIconModel } from '../shared/icons';
export default function SkillItem({ data }: { data: any[] }) {
  return (
    <>
      {data.map((icon: ListIconModel, index: number) => {
        return (
          <motion.div
            key={index}
            className="flex justify-center flex-col items-center sm:gap-[0.313rem] sm:w-[6.25rem] sm:h-[7.313rem] md:w-[6.25rem] md:h-[7.313rem] "
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="h-[4.5rem] shrink-0  flex justify-center items-center fill-[rgba(255,255,255,0.1)]  hover:cursor-pointer hover:transition-[0.2s] hover:overflow-hidden">
              <div className="scale-75 sm:scale-90 md:scale-1">{icon.value}</div>
            </div>
            <div className="flex justify-center items-start w-full h-[2.5rem] ">
              <span className="not-italic font-medium leading-5 text-[#092C4C]">{icon.name}</span>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
