import { useEffect } from "react";

export default function MutipleSelectionMenu({
  children,
  activeIndex,
  setState,
  classTambahan = "",
}) {
  const inputValue = [];
  let handleChange = (event, index) => {
    setState(inputValue[index]);
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
          type="radio"
          name="selectionMenu_checkbox"
          defaultChecked={index == activeIndex}
          onChange={(event) => handleChange(event, index)}
        />
        {value}
      </div>
    );
  });

  return (
    <div className={`singleMenuSelection ${classTambahan}`}>{childElement}</div>
  );
}
