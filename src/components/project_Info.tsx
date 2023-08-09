export default function ProjectInfo({ project }: { project: any }) {
  return (
    <div className="flex flex-col items-center gap-[1rem] lt:gap-3  flex-[1_0_0] self-stretch rounded-[0.75rem_0rem_0rem_0.75rem] lt:ml-[3.125rem]">
      <h3 className="w-full lt:w-[30rem] self-stretch overflow-hidden text-label text-ellipsis text-xl not-italic font-semibold leading-7">
        {project.name}
      </h3>
      <p className="self-stretch text-[#4b5563] text-[1.125rem] not-italic font-normal leading-6">{project.description}</p>
      <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
        {project.technologies.map((item: string, index: number) => (
          <span
            key={index}
            className=" flex justify-center items-center px-3 lt:px-5 py-1 rounded-xl hover:opacity-50 hover:cursor-pointer hover:transition-[0.3s] bg-[#e5e7eb]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 lt:grid-cols-2 w-full gap-[3px] justify-between items-center px-0 lt:py-6">
        {project.link.map((item: any, index: number) => (
          <div className="flex items-center shrink-0 h-9" key={index}>
            <a href={item.ref} target="_blank" rel="noopener noreferrer" className=" gap-3 flex justify-center shrink-0 cursor-pointer">
              {item.icon}
              <span className="cursor-pointer text-gray-600 text-base not-italic font-normal leading-6">{item.content}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
