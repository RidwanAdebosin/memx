import Image from "next/image";

const UserDetails = () => {
  return (
    <>
      <div className="w-[135px] h-[135px] mt-[-60] mb-4">
        <Image
          src="https://pbs.twimg.com/profile_images/1893337793323012096/iV6_BsXC_400x400.jpg"
          alt="Ridwan"
          objectFit="cover"
          width={135}
          height={135}
          className="rounded-full"
        />
      </div>
      <p>John Walter</p>
      <div className="flex space-x-1.5">
        <button>My details</button>
        <button>My Content</button>
      </div>
    </>
  );
};

export default UserDetails;
