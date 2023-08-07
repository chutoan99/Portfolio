export default function Experience() {
  return (
    <section
      id="Experience"
      className="flex w-full flex-col items-center gap-5 pt-[3.125rem] pb-[6.25rem] px-[7.5rem]"
      style={{ background: 'rgba(147, 107, 232, 0.05)' }}
    >
      <div className="  rounded-xl bg-[#fff]">
        <div className="p-[2rem] flex  gap-10 w-full items-start justify-start">
          <div className="flex w-[8.125rem] flex-col items-start gap-3 shrink-0">
            <p className=" text-[#7D11F9] text-base not-italic font-semibold leading-6;">ITD GROUP</p>
          </div>
          <div className="flex-1">
            <h3 className="self-stretch text-[#7D11F9] text-xl not-italic font-semibold">Fresher Frontend Developer</h3>
            <ul className="flex flex-col items-start gap-1 self-stretch list-disc ml-[15px] pl-[10px]">
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                I am currently involved in building and developing websites using angular.
              </li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                Maintain, develop new features, and manage source code versions of the company's previous projects built with angularjs.
              </li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                Participate in meetings to discuss project development, contribute solutions, and address risks.
              </li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                Convert design interfaces from figma into projects.
              </li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">- Read and understand BA's documents.</li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                Support to student during their internship on various projects.
              </li>
            </ul>
          </div>
          <div className="w-[175px] ">
            <span className="text-[#7D11F9] text-right text-base not-italic font-normal">August/2022 - July/2023</span>
          </div>
        </div>
      </div>

      <div className="  rounded-xl bg-[#fff]">
        <div className="p-[2rem] flex  gap-10 w-full items-start justify-start">
          <div className="flex w-[8.125rem] flex-col items-start gap-3 shrink-0">
            <p className=" text-[#7D11F9] text-base not-italic font-semibold leading-6;">STECH VN</p>
          </div>
          <div className="flex-1">
            <h3 className="self-stretch text-[#7D11F9] text-xl not-italic font-semibold">Intern Frontend Developer</h3>
            <ul className="flex flex-col items-start gap-1 self-stretch list-disc ml-[15px] pl-[10px]">
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                I participated in building the features and user interfaces for a web application “social network for blockchain" using next.js
              </li>
              <li className="self-stretch text-gray-600 text-lg not-italic font-normal leading-6">
                Explore and utilize the Next.js library, a framework for React.
              </li>
            </ul>
          </div>
          <div className="w-[175px] ">
            <span className="text-[#7D11F9] text-right text-base not-italic font-normal">May/2022 - July/2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
