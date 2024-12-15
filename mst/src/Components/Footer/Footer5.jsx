// import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { HiLocationMarker } from "react-icons/hi";
// import { MdCall, MdMessage } from "react-icons/md";

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 ">
//       <section className="max-w-[1200px] mx-auto text-white">
//         <div className=" grid md:grid-cols-3 py-5">
//           {/* first column */}
//           <div className=" py-8 px-4 ">
//             <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
//               Be Ready To Grow
//             </h1>
//             <p className="text-gray-400">
//               Get exclusive{" "}
//               <span className=" text-white font-bold "> best update</span>{" "}
//               straight to your inbox.{" "}
//             </p>
//             <br />
//             <div className="flex items-center h-10">
//               <input
//                 className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 "
//                 type="text"
//                 placeholder="Email"
//               />
//               <button className="bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white">
//                 Ok
//               </button>
//             </div>
//           </div>
//           {/* Second column */}

//           <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Important Links
//                 </h1>
//                 <ul className={`flex flex-col gap-3 `}>
//                   <li className="cursor-pointer">Home</li>
//                   <li className="cursor-pointer">About</li>
//                   <li className="cursor-pointer">Services</li>
//                   <li className="cursor-pointer">Login</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Links
//                 </h1>
//                 <ul className="flex flex-col gap-3 ">
//                   <li className="cursor-pointer">Home</li>
//                   <li className="cursor-pointer">About</li>
//                   <li className="cursor-pointer">Services</li>
//                   <li className="cursor-pointer">Login</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Contact Us
//                 </h1>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <HiLocationMarker />
//                     <p>Jaipur, Rajsthan</p>
//                   </div>
//                   <div className="flex items-center gap-3 mt-3">
//                     <MdMessage />
//                     <p>abc@gmail.com</p>
//                   </div>
//                   <div className="flex items-center gap-3 mt-3">
//                     <MdCall />
//                     <p>+91 123456789</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="hidden sm:block">
//           <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
//             <div className="flex items-center justify-center gap-4 mb-4">
//               <a href="#">
//                 <FaInstagram className="text-4xl" />
//               </a>
//               <a href="#">
//                 <FaFacebook className="text-4xl" />
//               </a>
//               <a href="#">
//                 <FaLinkedin className="text-4xl" />
//               </a>
//             </div>

//             <span className="text-sm text-gray-400 ">
//               <ul className="flex gap-3">
//                 <li className="hover:text-white">Privacy Policy</li>
//                 <li className="hover:text-white">Terms & Conditions</li>
//               </ul>
//             </span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;





import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp"; // Ensure this matches the actual file path

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-b from-black via-black to-black text-white py-6 border-t-2 border-gray-800">
      {/* Logo and Description */}
      <div className="flex flex-row items-center gap-4 text-gray-200">
        <img
          className="w-20 h-20 object-cover transition-transform duration-500 hover:scale-110"
          src={logo}
          alt="Logo"
        />
        <div className="text-sm md:text-base">
          <h2 className="text-xl font-semibold">MST'25</h2>
          <p className="leading-6">
            Malviya Sport Tournament aims to maintain high commitment levels and
            inspire talent with sports icons. Keeping our goal and pledge, we
            invite you to MST 2025.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 py-4 border-t md:border-none border-gray-700">
        <a
          href="https://www.instagram.com/mst.mnitj/"
          className="text-4xl text-gray-200 hover:text-black transition-colors duration-500"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          className="text-4xl text-gray-200 hover:text-black transition-colors duration-500"
        >
          <FaYoutube />
        </a>
        <a
          href=""
          className="text-4xl text-gray-200 hover:text-black transition-colors duration-500"
        >
          <FaTwitter />
        </a>
        <a
          href=""
          className="text-4xl text-gray-200 hover:text-black transition-colors duration-500"
        >
          <FaLinkedin />
        </a>
        <a
          href=""
          className="text-4xl text-gray-200 hover:text-black transition-colors duration-500"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="text-center text-gray-200">
        <div className="py-2">
          {/* <NavLink
            to="/"
            className="text-base md:text-lg hover:text-yellow-400 transition duration-300"
          > */}
            Home
          {/* </NavLink> */}
        </div>
        <div className="py-2">
          {/* <NavLink
            to="/teams"
            className="text-base md:text-lg hover:text-yellow-400 transition duration-300"
          > */}
            Our Team
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
