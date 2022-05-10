export default function MutipleSelectionMenu({
  children,
  activeIndex,
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
      value.props.classTambahan != undefined && value.props.classTambahan;

    return (
      <div className={`child ${classTambahan} no-select`} key={index}>
        <input
          className="selectionMenu_checkbox"
          type="checkbox"
          defaultChecked={index == activeIndex}
          onChange={(event) => handleChange(event, value.props.text)}
        />
        {value}
      </div>
    );
  });

  return <div className={`selectionMenu ${classTambahan}`}>{childElement}</div>;
}
