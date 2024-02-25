import { EXPERIENCES } from '../../shared/contants';
import 'aos/dist/aos.css';

export default function Experience() {
  return (
    <section
      id="Experience"
      className="p-[1.25rem] md:px-[7.5rem] flex w-full flex-col items-center gap-5 pt-[3.125rem]  pb-[3.125rem] sm:pb-[6.25rem]  md:gap-[1.5rem]"
      style={{ background: 'rgba(147, 107, 232, 0.05)' }}
    >
      {EXPERIENCES.map((item: any, index: number) => (
        <div className="rounded-xl bg-white" key={index} data-aos="zoom-in-up">
          <div className="p-[1.563rem] md:p-[2rem]  w-full items-start justify-start flex-col md:flex flex gap-[1.25rem] md:gap-10 relative lt:flex-row lt:w-[56rem]">
            <div className="flex w-[7.125rem] flex-col items-start gap-3 shrink-0">
              <p className=" text-primary text-base not-italic font-semibold leading-6 flex-col sm:flex">{item.label}</p>
            </div>
            <div className="flex-1">
              <h3 className="self-stretch text-primary text-xl not-italic font-semibold">{item.position}</h3>
              <ul className="flex flex-col items-start gap-1 self-stretch list-disc ml-[0.938rem] pl-[0.625rem]">
                {item.contents.map((content: string, index: number) => (
                  <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6" key={index}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lt:w-[11.25rem] absolute  right-[2.5rem] lt:sticky lt:flex lt:justify-end">
              <span className="text-primary text-right text-base not-italic font-normal">{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
