import Image from "next/image";
import { MemxItem } from "./MemxContents";

export const SingleMemx = ({ item }: { item: MemxItem }) => {
  return (
    <li className="grid gap-2 w-[311px]">
      <div className="w-full max-h-[156px] rounded-lg overflow-clip">
        <video controls src={item?.video} className="rounded-lg" />
      </div>
      <div className="flex items-center space-x-2 p-2">
        <div className="rounded-full w-[31px] h-[31px] border">
          <Image
            src={item?.authorImage}
            alt={item?.description}
            className="overflow-clip object-cover"
            width={31}
            height={31}
          />
        </div>
        <div className="">
          <p className="flex justify-start w-[238px] font-semibold">
            {item?.description}
          </p>
          <div className="flex text-[#737373]">
            {item?.authorName || "Ridwan Adebosin"}
            {item?.views}
          </div>
        </div>
      </div>
    </li>
  );
};
