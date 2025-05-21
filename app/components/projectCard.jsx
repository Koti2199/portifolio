/* eslint-disable @next/next/no-img-element */
function ProjectCard(props) {
  const { name, imageUrl, link, techStack, description } = props.projectDetails;
  return (
    <div className="w-72 h-192 shadow-lg flex flex-col justify-center items-center m-8 p-6 relative group dark:border-2 border-white rounded">
      <img src={imageUrl} alt="skill" className=""></img>
      <div class="text-[20px] text-black dark:text-white font-bold py-4">
        {name}
      </div>
      <div class="text-[14px] text-black dark:text-white font-semibold text-center">
        {techStack}
      </div>
      <div class="text-[12px] text-black dark:text-white py-4">
        {description}
      </div>
      <a
        href={link}
        rel="noopener"
        target="_blank"
        className="text-black text-[16px] underline font-bold dark:text-white"
      >
        Link
      </a>
    </div>
  );
}

export default ProjectCard;
