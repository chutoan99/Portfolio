interface ILabelProps {
  content: string;
}
export default function Label({ content }: ILabelProps) {
  return (
    <section>
      <div
        className="
          bg-[rgba(147,107,232,0.15)] pt-[1rem] pb-[1rem] 
          sm:pt-[2.5rem] sm:pb-[2.5rem] 
          md:pt-[3rem] md:pb-[3rem]
        "
      >
        <div
          className="
            flex flex-col flex-shrink-0 justify-center text-center
          text-[#3f3a64] font-medium not-italic leading-[3.75rem] text-[1.7rem] 
            h-[4.5625rem] max-w-[75rem] mx-auto
            sm:text-[2.125rem] 
            md:text-[3.125rem]
          "
        >
          {content}
        </div>
      </div>
    </section>
  );
}
