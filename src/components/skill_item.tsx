import { motion } from 'framer-motion';
import { ListIconModel } from '../shared/icons';
export default function SkillItem({ data }: { data: any[] }) {
  return (
    <>
      {data.map((icon: ListIconModel, index: number) => {
        return (
          <motion.div
            key={index}
            className="flex justify-center flex-col items-center sm:gap-2.5 lt:max-h-[5.625rem]"
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className=" w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]  shrink-0 bg-white flex justify-center items-center fill-[rgba(255,255,255,0.1)] rounded-[10px] hover:cursor-pointer hover:transition-[0.2s] hover:overflow-hidden hover:fill-[rgba(255,255,255,0.5)]  hover:shadow-md"
              style={{
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
              }}
            >
              <div className="scale-75 sm:scale-90 md:scale-1">{icon.value}</div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
