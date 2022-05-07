export default function conditionalClass(boolean, kelas) {
  if (boolean) {
    return `${kelas} `;
  } else {
    return "";
  }
}
