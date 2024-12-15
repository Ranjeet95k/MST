import React from "react";
import wave from "../../assets/wave Gif.gif";
import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";

const Gallery = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              {/* <h1> Gallery</h1> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {/* Card 1 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={500}
                  className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full"
                >
                  <img src={img1} alt="" />
                </div>

                {/* Card 2 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={600}
                  className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full"
                >
                  <img src={img2} alt="" />
                </div>

                {/* Card 3 */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={700}
                  className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full"
                >
                  <img src={img3} alt="" />
                </div>
              </div>

              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
