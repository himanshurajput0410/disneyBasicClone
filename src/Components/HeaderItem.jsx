
const HeaderItem = ({name,Icon,toggleClassName}) => {
  return (
    <div
      className={` ${toggleClassName} text-white flex items-center gap-3 text-base font-semibold cursor-pointer hover:underline underline-offset-8`}
    >
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem
