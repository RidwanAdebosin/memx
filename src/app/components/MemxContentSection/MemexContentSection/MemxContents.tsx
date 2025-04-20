import { SingleMemx } from "./SingleMemx";

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
    video: "https://www.youtube.com/watch?v=Gl7CP7Ylm-Q", // "Baba Suwe In USA" - classic Yoruba comedy
    description: "This is a Babasuwe movie",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Babatunde_Omidina_%28Baba_Suwe%29.jpg", // From Wikimedia
    authorName: "Baba Suwe",
    views: "1.2M views",
  },
  {
    id: 2,
    video: "https://www.youtube.com/watch?v=JUCOhEt2J8s",
    description: "Classic Nollywood drama with a twist",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ngozi_Ezeonu.jpg",
    authorName: "Ngozi Ezeonu",
    views: "850K views",
  },
  {
    id: 3,
    video: "https://www.youtube.com/watch?v=xyOalUjS3pg",
    description: "Action-packed Yoruba movie",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Odunlade_Adekola.jpg",
    authorName: "Odunlade Adekola",
    views: "2.1M views",
  },
  {
    id: 4,
    video: "https://www.youtube.com/watch?v=l9_RbqEoyKM", // "A Tribe Called Judah" – Emotional, powerful story starring Funke Akindele
    description: "Emotional story of love and betrayal",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Funke_Akindele_2020.jpg", // From Wikimedia
    authorName: "Funke Akindele",
    views: "1.7M views",
  },
  {
    id: 5,
    video: "https://www.youtube.com/watch?v=VO3zRjG7GgI", // "Broda Shaggi - Mechanic Wahala" – Hilarious comedy skit
    description: "Comedy skit that'll crack you up",
    authorImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Broda_Shaggi_at_Suru_Lere_movie_premiere.jpg", // From Wikimedia
    authorName: "Broda Shaggi",
    views: "3.4M views",
  },
];

export const MemxContent = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:justify-between 2xl:flex-wrap mx-8">
      {items?.map((item, id) => (
        <SingleMemx item={item} key={id} />
      ))}
    </ul>
  );
};
