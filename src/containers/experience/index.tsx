import { EXPERIENCES } from '../../shared/contants';
import 'aos/dist/aos.css';

export default function Experience() {
  return (
    <section
      id="Experience"
      className="p-[1.25rem] md:px-[7.5rem] flex w-full flex-col items-center gap-5 pt-[3.125rem]  pb-[3.125rem] sm:pb-[6.25rem]  md:gap-[1.5rem]"
      style={{ background: 'rgba(147, 107, 232, 0.05)' }}
    >
      <div className="rounded-xl bg-white">
        <div className="px-[1.563rem] pb-[1.563rem] md:px-[1.75rem] md:pt-[1.75rem] md:pb-[1rem] w-full relative min-h-screen flex flex-col justify-center overflow-hidden antialiased">
          <div className="flex flex-col justify-center divide-y">
            <div className="px-[1.563rem] pb-[1.563rem] md:px-[2rem] md:pb-[2rem] w-full">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px md:before:ml-[1.2rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                          <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-14 flex flex-col gap-[3px]">
                      <div className="text-slate-500">
                        <span className="text-description font-bold">{EXPERIENCES[0].label}</span> {EXPERIENCES[0].position}
                      </div>
                      <time className="text-primary text-left text-base not-italic font-normal md:w-21">{EXPERIENCES[0].time}</time>
                    </div>
                  </div>
                  <div className="ml-14 md:ml-[4rem] flex flex-col gap-[10px] w-full pr-[3rem]">
                    <div className="bg-white p-4 rounded-[6px] border border-slate-200 text-slate-500 shadow" data-aos="zoom-in-up">
                      <ul className="flex flex-col items-start gap-1 self-stretch">
                        {EXPERIENCES[0].contents.map((content: string, index: number) => (
                          <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6" key={index}>
                            {content}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-[6px] border border-slate-200 text-slate-500 shadow" data-aos="zoom-in-up">
                      <ul className="flex flex-col items-start gap-1 self-stretch">
                        {EXPERIENCES[0].contents2?.map((content: string, index: number) => (
                          <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6" key={index}>
                            {content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                          <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-14 flex flex-col gap-[3px]">
                      <div className="text-slate-500">
                        <span className="text-description font-bold">{EXPERIENCES[1].label}</span> {EXPERIENCES[1].position}
                      </div>
                      <time className="text-primary text-left text-base not-italic font-normal md:w-21">{EXPERIENCES[0].time}</time>
                    </div>
                  </div>
                  <div className="ml-14 md:ml-[4rem] flex flex-col gap-[10px] w-full pr-[3rem]">
                    <div className="bg-white p-4 rounded-[6px] border border-slate-200 text-slate-500 shadow" data-aos="zoom-in-up">
                      <ul className="flex flex-col items-start gap-1 self-stretch">
                        {EXPERIENCES[1].contents.map((content: string, index: number) => (
                          <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6" key={index}>
                            {content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
