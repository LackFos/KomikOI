export default function MutipleSelectionMenu({
  children,
  activeIndex,
  indexKey = 0,
  setState,
  classTambahan = "",
}) {
  // onChange Event
  const handleChange = (event, value) => {
    if (event.target.checked == true) {
      setState((prev) => new Set([...prev, value]));
    } else if (event.target.checked == false) {
      setState((prev) => {
        prev.delete(value);
        return new Set(prev);
      });
    }
  };

  // Inject / Menambahkan Element Tambahan
  const childElement = children.map((value, index) => {
    const classTambahan =
      value.props.classTambahan != undefined ? value.props.classTambahan : "";

    const filterElemenBukanChild =
      value.props.exclude == 1 ? (
        value
      ) : (
        <div className={`selectionMenu ${classTambahan}`} key={index}>
          <input
            className="selectionMenu_checkbox"
            type="checkbox"
            name={`selectionMenuRadio ${indexKey}`}
            defaultChecked={index == activeIndex}
            onChange={(event) => handleChange(event, value.props.text)}
          />
          {value}
        </div>
      );

    return filterElemenBukanChild;
  });

  return <div className={`${classTambahan} no-select`}>{childElement}</div>;
}
