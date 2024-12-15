// import React from "react";
// import bg3 from "../../assets/bg3.webp";

// const About = () => {
//   return (
//     <div className=" bg-black/20 h-full">
//       <img
//         src={bg3}
//         alt=""
//         className="absolute right-0 bottom-0 w-full brightness-50 z-10"
//       />
//       <div className="h-full flex justify-center items-center p-4">
//         <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="text-white space-y-4 lg:pr-36">
//             <h1 data-aos="fade-up" className="text-5xl font-bold">
//               Malviya Sports Tournament 25
//             </h1>
//             <p data-aos="fade-up" data-aos-delay="300">
//               Malviya Sport Tournament aims to maintain high commitment levels
//               and inspire talent with sports icons. Keeping our goal and pledge,
//               we invite you to MST 2025.
//             </p>
//             <button
//               data-aos="fade-up"
//               data-aos-delay="500"
//               className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
//             >
//               LEARN MORE
//             </button>
//           </div>
//           <div></div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import bg3 from "../../assets/bg3.webp";

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              Malviya Sports Tournament 25
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Malviya Sport Tournament aims to maintain high commitment levels
              and inspire talent with sports icons. Keeping our goal and pledge,
              we invite you to MST 2025.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
