import { useRef } from "react";
import { EffectCube } from "swiper";

export default function SingleSelectionMenu({
  children,
  activeIndex = 0,
  useref = useRef(),
}) {
  const handleClick = (event) => {
    for (let element of useref.current.children) {
      element.classList.remove("aktif");
    }
    event.target.parentElement.classList.add("aktif");
  };
  const childElement = children.map((value, index) => {
    return (
      <div
        className={`${index == activeIndex ? "aktif" : ""} no-select`}
        onClick={handleClick}
        key={index}
      >
        {value}
      </div>
    );
  });

  return (
    <div ref={useref} className="singleMenuSelection">
      {childElement}
    </div>
  );
}
