// "use client";
// import { useEffect, useState } from "react";
// import { Header } from "./components/header/Header";
// import { Memx } from "./components/memxContentSection/page";

// const App = () => {
//   const [isDark, setIsDark] = useState<boolean>(false);

//   const toggleDarkMode = () => {
//     setIsDark((isDark) => !isDark);
//   };

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
//       <Header onToggleDarkMode={toggleDarkMode} isDark={isDark} />
//       <Memx />
//     </div>
//   );
// };

// export default App;
