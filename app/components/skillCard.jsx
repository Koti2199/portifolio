/* eslint-disable @next/next/no-img-element */
function SkillCard(props) {
  const { name, imageUrl } = props;
  return (
    <div className="max-w-28 max-h-28 shadow-lg flex flex-col justify-center items-center m-4 ml-0 py-4 relative group sm:max-w-24 sm:max-h-24">
      <img src={imageUrl} alt="skill" className="w-7/12 h-9/12"></img>
      <div class="opacity-0 group-hover:opacity-100 duration-300 absolute -top-7 flex justify-center items-end text-lg text-black dark:text-white italic font-semibold">
        {name}
      </div>
    </div>
  );
}

export default SkillCard;
