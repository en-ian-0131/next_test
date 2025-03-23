import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="orangeTitle">member group</h3>
      <div>{children}</div>
    </>
  );
}
