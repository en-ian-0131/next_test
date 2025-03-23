import React from "react";

export default function Page() {
  return (
    <>
      <div>login Page</div>
      <div>
        <label htmlFor="">帳號</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">密碼</label>
        <input type="text" />
      </div>
      <div>
        <button type="button">submit</button>
      </div>
    </>
  );
}
