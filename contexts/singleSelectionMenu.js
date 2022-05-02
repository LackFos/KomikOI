import { useRef } from "react";
import { EffectCube } from "swiper";

export default function SingleSelectionMenu({ children, activeIndex = 0 }) {
  const wrapperElement = useRef();
  const handleClick = (event) => {
    for (let element of wrapperElement.current.children) {
      element.classList.remove("aktif");
    }
    event.target.parentElement.classList.add("aktif");
  };
  console.log("Active");
  const childElement = children.map((value, index) => {
    return (
      <div className={"no-select"} onClick={handleClick} key={index}>
        {value}
      </div>
    );
  });

  return (
    <div ref={wrapperElement} className="singleMenuSelection">
      {childElement}
    </div>
  );
}
