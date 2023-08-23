import React, { useEffect } from "react";

export default function Summary() {
  useEffect(() => {
    document.title = `PayrollCentral | Summary`;
  });

  return (
    <>
      <div>summary</div>
    </>
  );
}
