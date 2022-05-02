import NavAtas from "../components/NavAtas";

export default function layout({ children }) {
  return (
    <main>
      <NavAtas />
      {children}
    </main>
  );
}
