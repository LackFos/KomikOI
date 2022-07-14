export function Chevron({
  direction = "right",
  color = "black",
  width = 24,
  height = width,
  viewBox = "0 0 24 24",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`chevron-${direction}`}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

export function Triangle({
  direction = "right",
  color = "black",
  width = 24,
  height = width,
  viewBox = "0 0 24 24",
  classTambahan = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`triangle-${direction} ${classTambahan}`}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    </svg>
  );
}

export function Star({ width = 24, height = width, viewBox = "0 0 24 24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

export function Search({
  width = 24,
  height = width,
  onClick = () => {},
  viewBox = "0 0 24 24",
  classTambahan,
}) {
  return (
    <svg
      className={classTambahan}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

export function Close({
  width = 24,
  height = width,
  onClick = () => {},
  viewBox = "0 0 24 24",
  classTambahan,
}) {
  return (
    <svg
      className={classTambahan}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function Logo({
  height = width,
  width = 24,
  viewBox = "0 0 103.68 20.57",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <title>logo</title>
      <path
        d="M13.62,39.2,7.78,33.63l-.06,5.12-5.12,0L2.12,22l5.78-.2-.06,5.3,5.31-5.36,3.36,2.74-4.93,6,5.22,5.78Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "black" }}
      />
      <path
        d="M34.28,30.12a9.77,9.77,0,0,1-2.55,6.56,9.27,9.27,0,0,1-2.82,2,8.5,8.5,0,0,1-7.07,0,9.27,9.27,0,0,1-2.82-2,9.81,9.81,0,0,1-1.87-3,9.77,9.77,0,0,1,0-7.11,9.71,9.71,0,0,1,1.87-3,9.3,9.3,0,0,1,2.82-2.05,8.6,8.6,0,0,1,7.07,0,9.3,9.3,0,0,1,2.82,2.05,9.66,9.66,0,0,1,2.55,6.53Zm-5.37,0a5.43,5.43,0,0,0-.23-1.51,4.65,4.65,0,0,0-.7-1.41,3.85,3.85,0,0,0-1.1-1,2.84,2.84,0,0,0-1.5-.39,2.88,2.88,0,0,0-1.49.39,3.8,3.8,0,0,0-1.12,1,4.41,4.41,0,0,0-.69,1.41,5.11,5.11,0,0,0-.24,1.51,5.17,5.17,0,0,0,.24,1.52A4.52,4.52,0,0,0,22.77,33a3.64,3.64,0,0,0,1.12,1,2.8,2.8,0,0,0,1.49.4,2.76,2.76,0,0,0,1.5-.4A3.68,3.68,0,0,0,28,33a4.77,4.77,0,0,0,.7-1.41A5.5,5.5,0,0,0,28.91,30.1Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "black" }}
      />
      <path
        d="M54.55,30.77c0,1.29,0,2.57-.07,3.84s-.14,2.55-.25,3.85l-5.1.26c.16-1.35.25-2.71.28-4.08s.06-2.72.1-4.08L45,38.93l-4.53-8.37c0,1.36.07,2.72.11,4.08s.13,2.73.27,4.08l-5.1-.26c-.12-1.3-.2-2.58-.25-3.85s-.07-2.55-.07-3.84,0-2.87,0-4.29,0-2.86,0-4.29l6-.21L45,29.38,48.54,22l6,.21c0,1.43,0,2.86,0,4.29S54.55,29.33,54.55,30.77Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "black" }}
      />
      <path
        d="M61.92,22.1c-.12,1.65-.21,3.29-.28,4.92s-.1,3.28-.1,4.95c0,1.16,0,2.31,0,3.45s.05,2.29.1,3.45l-5.24.18c-.08-1.22-.13-2.42-.16-3.61s0-2.4,0-3.61c0-1.67,0-3.33.09-5s.14-3.29.24-5Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "black" }}
      />
      <path
        d="M75.06,39.2l-5.83-5.57-.06,5.12-5.13,0L63.57,22l5.78-.2-.06,5.3,5.3-5.36L78,24.49l-4.92,6,5.22,5.78Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "black" }}
      />
      <path
        d="M84.73,20.72a10.27,10.27,0,0,1,5-1.33l.72,0,.72.06A10.55,10.55,0,0,1,95.43,21a9.33,9.33,0,0,1,3.24,3.61,10.29,10.29,0,0,1,1.15,4.7c0,.2,0,.4,0,.61a4.09,4.09,0,0,1-.07.6,7.26,7.26,0,0,1-.22,1.22,10.55,10.55,0,0,1-.4,1.2,9.37,9.37,0,0,1-3.86,4.43A10.56,10.56,0,0,1,89.74,39l-.4,0h-.4a12.58,12.58,0,0,1-2-.35,10.24,10.24,0,0,1-1.9-.74,10,10,0,0,1-5.3-8.69c0-.26,0-.52,0-.77a6,6,0,0,1,.12-.8A10,10,0,0,1,80.31,26,9.46,9.46,0,0,1,81,24.55,9.28,9.28,0,0,1,84.73,20.72Zm9.8,10a4.87,4.87,0,0,0,.1-.65c0-.14,0-.28.05-.41s0-.27,0-.39,0-.23,0-.35,0-.24,0-.35a6.86,6.86,0,0,0-.77-2.45,4.56,4.56,0,0,0-1.7-1.83L91.6,24,91,23.78l-.59-.1a4,4,0,0,0-.59-.05,4.53,4.53,0,0,0-2.77.95,4.85,4.85,0,0,0-1.77,2.5.28.28,0,0,0,0,.12.25.25,0,0,0,0,.12,5.44,5.44,0,0,0-.15.54l-.12.58c0,.14,0,.27,0,.4s0,.26,0,.39v.22a1,1,0,0,0,0,.23,6.08,6.08,0,0,0,1,3,4.11,4.11,0,0,0,2.4,1.84l.36.1.38.08.36,0h.35a4.57,4.57,0,0,0,2.81-.92,5.24,5.24,0,0,0,1.82-2.49C94.42,31.1,94.48,30.89,94.53,30.68Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "#ff4a22" }}
      />
      <path
        d="M101.51,19.79a2.58,2.58,0,0,1,1.7-.87h.08a2.31,2.31,0,0,1,1.74.82,2.67,2.67,0,0,1,.77,1.86,2.15,2.15,0,0,1-.74,1.74,2.81,2.81,0,0,1-1.65.68h-.29a2.81,2.81,0,0,1-1.65-.68,2.15,2.15,0,0,1-.74-1.74A2.54,2.54,0,0,1,101.51,19.79ZM101,25.61h4.59V38.55H101Z"
        transform="translate(-2.12 -18.92)"
        style={{ fill: "#ff4a22" }}
      />
    </svg>
  );
}
