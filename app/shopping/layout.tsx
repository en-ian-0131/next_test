'use client'
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function Layout({
  children,
  items,
  analytics,
}: {
  children: React.ReactNode;
  items: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const aaa = useSelectedLayoutSegment('items');
  console.log("aaa", aaa);

  return (
    <>
      <h2>shopping Layout</h2>
      <div className="page">
        <div>{children}</div>
        <div className="row">
          <div className="goupBorder hieght-50">{items}</div>
          <div className="goupBorder hieght-100">{analytics}</div>
        </div>
      </div>
    </>
  );
}
