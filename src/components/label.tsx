interface LabelModel {
  id: string;
  content: string;
}
export default function Label({ id, content }: LabelModel) {
  return (
    <section id={id}>
      <div className=" flex flex-col items-start gap-2.5 px-[7.5rem] py-4 sm:py-10 md:py-12" style={{ background: 'rgba(147, 107, 232, 0.15)' }}>
        <div className=" max-w-[75rem] mx-auto my-0 flex  h-[4.5625rem] flex-col justify-center shrink-0 text-[#3f3a64] text-center  text-[1.7rem]  sm:text-[2.125rem] md:text-[3.125rem] not-italic font-medium leading-[3.75rem]">
          {content}
        </div>
      </div>
    </section>
  );
}
