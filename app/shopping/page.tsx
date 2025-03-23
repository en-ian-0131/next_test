import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="page">
      <h3>shopping Main Page</h3>
      <div className="row">
        <div className="page goupBorder">
          <div>member group</div>
          <div className="button">
            <Link href="/shopping/profile">profile</Link>
          </div>
          <div className="button">
            <Link href="/shopping/history">history</Link>
          </div>
        </div>
        <div className="page goupBorder">
          <div>product group</div>
          <div className="button">
            <Link href="/shopping/product">product</Link>
          </div>
          <div className="button">
            <Link href="/shopping/productDetail">product Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
