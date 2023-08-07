interface LabelModel {
  id: string;
  content: string;
}
export default function Label({ id, content }: LabelModel) {
  return (
    <section id={id}>
      <div
        className=" flex flex-col items-start gap-2.5 px-[7.5rem] py-12"
        style={{ background: "rgba(147, 107, 232, 0.05)" }}
      >
        <div className=" max-w-[75rem] mx-auto my-0 flex w-[10.41544rem] h-[4.5625rem] flex-col justify-center shrink-0 text-[#3f3a64] text-center text-[3.125rem] not-italic font-medium leading-[3.75rem]">
          {content}
        </div>
      </div>
    </section>
  );
}
