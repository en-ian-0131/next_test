import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Blog layout</div>
      <div>{children}</div>
    </>
  );
}
