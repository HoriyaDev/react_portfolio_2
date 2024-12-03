// // import content
// import { useEffect } from "react";
// import { content } from "../Content";
// import Typewriter from "typewriter-effect";
// const Hero = () => {
//   const { hero } = content;

//   return (
//     <section id="home" className="overflow-hidden">
//       <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
//         <div
//           data-aos="slide-left"
//           data-aos-delay="1200"
//           className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
//         >
//           <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
//             {hero.firstName}{" "}
//             <span className="text-dark_primary">{hero.LastName}</span>
//           </h1>
//         </div>

//         {/* first col */}
//         <div className="pb-16 " data-aos="fade-down">
//           <h2>{hero.title}</h2>
//           <br />
//           <div className="text-lg font-semibold text-gray-700">
//             <div className="text-xl md:text-2xl font-bold ">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "I am a Front-End Developer.",
//                     "I build interactive user interfaces.",
//                     "I bring designs to life.",
//                     "I love crafting responsive websites.",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                   delay: 75,
//                   deleteSpeed: 50,
//                 }}
//               />
//             </div>
//           </div>

          
//           <div className="flex flex-col gap-10 mt-10">
//             {hero.hero_content.map((content, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-down"
//                 data-aos-delay={i * 300}
//                 className={`flex items-center w-96 gap-5
//             ${i === 1 && " flex-row-reverse text-right"}  `}
//               >
                
//                 <p>{content.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>


//         <div className="flex justify-end a">
//             <button className="btn">{hero.btnText}</button>
//           </div>

//         {/* sec col */}
//         <div className="md:h-[37rem] h-96">
//           <img
//             src={hero.image}
//             data-aos="slide-up"
//             alt="..."
//             className="h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// Import content
import { useEffect } from "react";
import { content } from "../Content";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* First Column */}
        <div className="pb-44 " data-aos="fade-up">
          <h2 className="mb-4">{hero.title}</h2>
          <br />
          <div className="text-lg font-semibold text-gray-700">
            <div className="text-xl md:text-2xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "I am a Front-End Developer.",
                    "I build interactive user interfaces.",
                    "I bring designs to life.",
                    "I love crafting responsive websites.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-left"
                data-aos-delay={i * 300}
                className={`flex items-center w-1/2 gap-5 ${
                  i === 1 && "flex-row-reverse text-right"
                }`}
              >
                <p>{content.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="btn">{hero.btnText}</button>
          </div>
        </div>

        {/* Second Column */}
        {/* <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
