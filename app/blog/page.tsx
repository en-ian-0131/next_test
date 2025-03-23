import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="page">
      <div>blog main page</div>
      {Array.from({ length: 3 }, (_, index) => {
        return (
          <div key={`${index}`} className="button">
            <Link href={`/blog/${index + 1}`}>To blog {index + 1}</Link>
          </div>
        );
      })}
      <div className="button">
        <Link href="/blog/1/2">To blog [...id]</Link>
      </div>
    </div>
  );
}
