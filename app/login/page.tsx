"use client";
// import React, { useState } from "react";

export default function Page() {
  //   const [open, setOpen] = useState<boolean>(false);
  //   const handleClose = () => {};

  return (
    // <Modal open={open} onClose={handleClose}>
    <div className="page">
      <h2>login Page</h2>
      <div className="row">
        <label htmlFor="帳號">帳號</label>
        <input type="text" id="帳號" />
      </div>
      <div className="row">
        <label htmlFor="密碼">密碼</label>
        <input type="text" id="密碼" />
      </div>
      <div>
        <button type="button">submit</button>
      </div>
    </div>
    // </Modal>
  );
}
