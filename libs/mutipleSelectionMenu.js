export default function MutipleSelectionMenu({
  children,
  activeIndex,
  setState,
  classTambahan = "",
}) {
  const inputValue = [];
  // onChange Event
  const handleChange = (event, index) => {
    if (event.target.checked == true) {
      setState((prev) => new Set([...prev, inputValue[index]]));
    } else if (event.target.checked == false) {
      setState((prev) => {
        prev.delete(inputValue[index]);
        return new Set(prev);
      });
    }
  };

  // Inject / Menambahkan Element Tambahan
  const childElement = children.map((value, index) => {
    inputValue.push(value.props.text);
    const classTambahan =
      value.props.classTambahan != undefined && value.props.classTambahan;

    return (
      <div className={`child ${classTambahan} no-select`} key={index}>
        <input
          className="selectionMenu_checkbox"
          type="checkbox"
          defaultChecked={index == activeIndex}
          onChange={(event) => handleChange(event, index)}
        />
        {value}
      </div>
    );
  });

  return <div className={`selectionMenu ${classTambahan}`}>{childElement}</div>;
}
