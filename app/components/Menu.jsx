"use client";
import React, { useCallback, useState } from "react";

const Menu = (props) => {
  const [view, setView] = useState("none");
  const [line,setLine] = useState('')
  const change = useCallback(() => {
    setView((prevView) => (prevView === "none" ? "block" : "none"));
    setLine((prevLine)=>(prevLine === ""?"underline":""))
  }, []);

  return (
    <div>
      <button onClick={change} className={`${line}`}>
        {props.children}
        <div
          className="absolute bg-primary "
          style={{ display: view, top: "3.1rem" }}
        >
          {props.items.map((item) => (
            <div className="p-2" style={{ display: view }}>
              {item}
            </div>
          ))}
        </div>
      </button>
    </div>
  );
};

export default Menu;
