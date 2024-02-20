import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      bodyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
      fileSize: "0.5mb",
      close: true,
      tag: { open: false, title: "Downloade Now", color: "bg-green-600" },
    },
    {
      bodyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
      fileSize: "0.3mb",
      close: false,
      tag: { open: true, title: "Downloade Now", color: "bg-green-600" },
    },
    {
      bodyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
      fileSize: "2mb",
      close: false,
      tag: { open: false, title: "Downloade Now", color: "bg-green-600" },
    },
    {
      bodyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
      fileSize: "1.1mb",
      close: true,
      tag: { open: true, title: "Inatall Now", color: "bg-green-600" },
    },
  ];

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-full z-10 flex flex-wrap gap-16 p-2 overflow-hidden"
    >
      {data.map((item) => (
        <Card reference={ref} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
