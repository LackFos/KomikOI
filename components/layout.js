import React from "react";
import NavAtas from "../components/NavAtas";

const MemorizeNavAtas = React.memo(NavAtas);

export default function layout({ children }) {
  return (
    <main>
      <MemorizeNavAtas />
      {children}
    </main>
  );
}
