"use client";
import Image from "next/image";
import { MemxItem } from "./MemxContents";
import { Dot, Download, EllipsisVertical, Forward, Share } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SingleMemx = ({ item }: { item: MemxItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  const handleEllipse = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDownload = () => {
    setIsOpen(false);
  };

  const handleShare = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event?.target as Node))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li
      className="grid gap-2 max-w-[311p] bg-[#F5F5F5] rounded-lg mb-4 dark:text-black relative borde overflow-clip"
      ref={menuRef}
    >
      <div className="w-full h-[156px] rounded-t-lg">
        <video controls src={item?.video} className="w-full ">
          <track
            src={item?.video}
            kind="captions"
            srcLang="en"
            label="English"
            default
          />
        </video>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-start space-x-2">
          <div className="rounded-full w-[31px] h-[31px] overflow-clip">
            <Image
              src={item?.authorImage}
              alt={item?.description}
              className=" object-cover overflow-clip rounded-full"
              width={31}
              height={31}
            />
          </div>
          <div className="">
            <p className="flex justify-start w-[238px] lg:w-full line-clamp-2 min-h-[2.5rem] font-semibold pb-0">
              {item?.description}
            </p>
            <div className="flex  text-[#504e4ed4] max-h-[1.5rem]">
              <p className="min-w-fit">
                {item?.authorName || "Ridwan Adebosin"}
              </p>
              <Dot className="mx-1" />
              <p className="min-w-fit">{item?.views}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse content" : "Expand hidden content"}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition"
        >
          <EllipsisVertical size={14} color="#737373" onClick={handleEllipse} />
        </button>
        {isOpen && (
          <div className="absolute grid gap-2.5 right-5 bg-white shadow-lg p-2 pr-6 rounded-lg">
            <button
              type="button"
              aria-label="Download this memes"
              className="flex space-x-1.5 items-center cursor-pointer hover-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              <Download size={16} onClick={handleDownload} />
              <span>Download</span>
            </button>
            <button
              type="button"
              aria-label="Share this memes"
              className="flex space-x-1.5 items-center cursor-pointer hover-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              <Forward size={16} onClick={handleShare} />
              <span>Share</span>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default SingleMemx;
