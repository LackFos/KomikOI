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
    console.log(value);
    const classTambahan =
      value.props.classTambahan != undefined ? value.props.classTambahan : "";

    const filterElemenBukanChild =
      value.props.exclude == 1 ? (
        value
      ) : (
        <div className={`selectionMenu ${classTambahan}`} key={index}>
          <input
            className="selectionMenu_checkbox"
            type="radio"
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
