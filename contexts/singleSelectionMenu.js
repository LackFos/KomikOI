import { useRef } from "react";

export default function SingleSelectionMenu({
  children,
  activeIndex = 0,
  setState,
  classTambahan = "",
}) {
  const useref = useRef();
  const handleClick = (event, index) => {
    if (useref.current != undefined) {
      // Hapus/Reset Kelas Aktif
      for (let element of useref.current.children) {
        element.classList.remove("aktif");
      }

      // Tambahkan Kelas Aktif pada Element yang diKlik
      event.target.parentElement.classList.add("aktif");

      setState != undefined && setState(index);
    }
  };

  const childElement = children.map((value, index) => {
    return (
      <div
        className={`child no-select ${index == activeIndex ? "aktif" : ""}`}
        onClick={(event) => handleClick(event, index)}
        key={index}
      >
        {value}
      </div>
    );
  });

  return (
    <div className={`singleMenuSelection ${classTambahan}`} ref={useref}>
      {childElement}
    </div>
  );
}
