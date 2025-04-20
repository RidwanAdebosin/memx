export const MemxContentNavigation = () => {
  return (
    <main className="grid gap-4 pt-24 mx-4 lg:mx-8">
      <div className="flex space-x-2.5 text-[#54585A]">
        <button className="group relative inline-flex items-center overflow-hidden rounded-lg cursor-pointer bg-[#F2F2F2] border-2 border-white px-4 py-2 text-lg font-medium text-black hover:bg-black hover:text-white transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 ">
          <span className="absolute left-0 top-1/2 block h-0 w-full bg-black opacity-100 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full"></span>
          <span className="relative transform duration-700 group-hover:-translate-x-1 font-medium text-base">
            All
          </span>
        </button>

        <button className="group relative inline-flex items-center overflow-hidden rounded-lg cursor-pointer bg-[#F2F2F2] border-2 border-white px-4 py-2 text-lg font-medium text-black hover:bg-black hover:text-white transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 ">
          <span className="absolute left-0 top-1/2 block h-0 w-full bg-black opacity-100 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full"></span>
          <span className="relative transform duration-700 group-hover:-translate-x-1 font-medium text-base">
            Recent
          </span>
        </button>

        <button className="group relative inline-flex items-center overflow-hidden rounded-lg cursor-pointer bg-[#F2F2F2] border-2 border-white px-4 py-2 text-lg font-medium text-black hover:bg-black hover:text-white transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 ">
          <span className="absolute left-0 top-1/2 block h-0 w-full bg-black opacity-100 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full"></span>
          <span className="relative transform duration-700 group-hover:-translate-x-1 font-medium text-base">
            Most Viewed
          </span>
        </button>
      </div>
      <section></section>
    </main>
  );
};
