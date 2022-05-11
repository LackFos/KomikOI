export default function SingleMenuSelection({
  children,
  activeIndex,
  indexKey = 0,
  setState,
  customOnChange,
  classTambahan = "",
}) {
  let handleChange = (event, value) => {
    setState != undefined && setState(value);
    customOnChange != undefined && customOnChange(value);
  };

  // Inject / Menambahkan Element Tambahan
  const childElement = children.map((value, index) => {
    const classTambahan =
      value.props.classTambahan != undefined ? value.props.classTambahan : "";

    const JikaTombol =
      value.props.bukantombol == undefined ? (
        <div className={`child ${classTambahan} no-select`} key={index}>
          <input
            className="selectionMenu_checkbox"
            type="radio"
            name={`selectionMenuRadio ${indexKey}`}
            defaultChecked={index == activeIndex}
            onChange={(event) => handleChange(event, value.props.text)}
          />
          {value}
        </div>
      ) : (
        value
      );

    return JikaTombol;
  });

  return (
    <div className={`singleMenuSelection ${classTambahan}`}>{childElement}</div>
  );
}
