import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <motion.div
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.1 }}
      dragConstraints={reference}
      drag
      className="relative bg-gray-800/90 w-60 h-72 flex-shrink-0 rounded-[20%] text-white overflow-hidden px-6 py-8"
    >
      <FaRegFileAlt />
      <p className="mt-3">{data.bodyText}</p>
      <div
        className={`absolute ${
          data.tag.open ? "bottom-16 px-3" : "bottom-10 px-5"
        } left-0 w-full h-4 flex justify-between items-center`}
      >
        <h6>{data.fileSize}</h6>
        <span>
          {data.close ? (
            <FaRegWindowClose size="1.2em" />
          ) : (
            <IoDownloadOutline size="1.5em" />
          )}
        </span>
      </div>
      {data.tag.open && (
        <div
          className={`absolute bottom-0 left-0 w-full h-12 flex items-center justify-center ${data.tag.color}`}
        >
          <h3>{data.tag.title}</h3>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
