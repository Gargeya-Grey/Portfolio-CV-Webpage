"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button type="button" className="text-link print-button no-print" onClick={() => window.print()}>
      <Printer size={16} aria-hidden="true" />
      Print / save PDF
    </button>
  );
}
