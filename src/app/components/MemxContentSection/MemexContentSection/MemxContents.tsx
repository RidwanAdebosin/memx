"use client";
import { useState } from "react";
import SingleMemx from "./SingleMemx";

export type MemxItem = {
  id: number;
  video: string;
  description: string;
  authorImage: string;
  authorName: string;
  views: string;
};

const items: MemxItem[] = [
  {
    id: 1,
    video: "https://www.youtube.com/watch?v=Gl7CP7Ylm-Q",
    description: "Classic Nollywood drama with a twist",

    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Baba Suwe",
    views: "1.2M views",
  },
  {
    id: 2,
    video: "https://www.youtube.com/watch?v=JUCOhEt2J8s",
    description: "Classic Nollywood drama with a twist",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Ngozi Ezeonu",
    views: "850K views",
  },
  {
    id: 3,
    video: "https://www.youtube.com/watch?v=xyOalUjS3pg",
    description: "Classic Nollywood drama with a twist",

    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Odunlade Adekola",
    views: "2.1M views",
  },
  {
    id: 4,
    video: "https://www.youtube.com/watch?v=l9_RbqEoyKM",
    description: "Emotional story of love and betrayal",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Funke Akindele",
    views: "1.7M views",
  },
  {
    id: 5,
    video: "https://www.youtube.com/watch?v=VO3zRjG7GgI",
    description: "Classic Nollywood drama with a twist",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Broda Shaggi",
    views: "3.4M views",
  },
  {
    id: 11,
    video: "https://www.youtube.com/watch?v=Gl7CP7Ylm-Q",
    description: "Classic Nollywood drama with a twist",

    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Baba Suwe",
    views: "1.2M views",
  },
  {
    id: 21,
    video: "https://www.youtube.com/watch?v=JUCOhEt2J8s",
    description: "Classic Nollywood drama with a twist",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Ngozi Ezeonu",
    views: "850K views",
  },
  {
    id: 31,
    video: "https://www.youtube.com/watch?v=xyOalUjS3pg",
    description: "Classic Nollywood drama with a twist",

    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Odunlade Adekola",
    views: "2.1M views",
  },
  {
    id: 41,
    video: "https://www.youtube.com/watch?v=l9_RbqEoyKM",
    description: "Emotional story of love and betrayal",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Funke Akindele",
    views: "1.7M views",
  },
  {
    id: 51,
    video: "https://www.youtube.com/watch?v=VO3zRjG7GgI",
    description: "Classic Nollywood drama with a twist",
    authorImage:
      "https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg",
    authorName: "Broda Shaggi",
    views: "3.4M views",
  },
];

const MemxContent = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const itemsToShow = items.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  return (
    <section className="grid justify-center lg:justify-between overflow-hidden transition-colors duration-300">
      <ul className="grid grid-cols-1 mx-2 pt-46 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:justify-between 2xl:flex-wrap lg:mx-8 gap-4">
        {itemsToShow?.map((item, id) => (
          <SingleMemx item={item} key={id} />
        ))}
      </ul>

      {visibleCount < items.length && (
        <button
          type="button"
          aria-label="Load more memes to viewport"
          className="py-2 px-16 border rounded-lg dark:border-white dark:bg-white text-black cursor-pointer w-fit mx-auto"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default MemxContent;
