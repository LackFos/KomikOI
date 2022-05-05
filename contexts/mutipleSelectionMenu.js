export default function SingleSelectionMenu({
  children,
  activeIndex = 0,
  setState,
  classTambahan = "",
}) {
  const handleClick = (event, index) => {
    // Tambahkan Kelas Aktif pada Element yang diKlik
    if (event.target.checked == true) {
      event.target.parentElement.classList.add("aktif");
      setState((prev) => new Set([...prev, index]));
    } else if (event.target.checked == false) {
      event.target.parentElement.classList.remove("aktif");
      setState((prev) => {
        prev.delete(index);
        return new Set(prev);
      });
    }
  };

  const childElement = children.map((value, index) => {
    const checkBoxGenerator =
      index == activeIndex ? (
        <input className="a" type="checkbox" value="text" defaultChecked />
      ) : (
        <input className="a" type="checkbox" value="text" />
      );
    return (
      <label
        className={`child no-select ${index == activeIndex ? "aktif" : ""}`}
        onClick={(event) => handleClick(event, index)}
        key={index}
      >
        {value}
        {checkBoxGenerator}
      </label>
    );
  });

  return (
    <div className={`mutipleMenuSelection ${classTambahan}`}>
      {childElement}
    </div>
  );
}
