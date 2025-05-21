function SoftSkillCard(props) {
  const { name, description } = props;
  return (
    <div className="max-w-44 max-h-20 shadow-lg rounded-lg flex flex-col justify-center items-center m-4 ml-0 p-4 relative group sm:h-auto sm:w-auto dark:border dark:border-white lg:w-44 lg:h-20">
      <div>{name}</div>
      <div class="opacity-0 group-hover:opacity-100 duration-300 absolute -top-7 flex justify-center items-end text-lg text-black dark:text-white italic font-semibold">
        {description}
      </div>
    </div>
  );
}

export default SoftSkillCard;
