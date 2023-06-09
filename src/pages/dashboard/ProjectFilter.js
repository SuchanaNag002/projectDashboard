
const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilter({currentFilter, changeFilter}) {
  //console.log(currentFilter);
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };
  return (
    <div className="project-filter">
      <nav>
        {filterList.map((f) => (
          <button key={f} onClick={() => handleClick(f)} className={currentFilter===f?"active":""}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
