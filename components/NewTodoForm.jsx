"use client";

import React, { useState } from "react";

const NewTodoForm = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewTodoForm;
