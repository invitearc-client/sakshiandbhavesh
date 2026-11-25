"use client";
import Image from "next/image";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleMessage from "./components/CoupleMessage";
import { useEffect, useState, useRef, useMemo } from "react";



const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  const events = [
    {
      date: "Saturday, 19th December 2026",
      Main_title_ceremony: "Full Filmy Phool Masti",
      image: "/assets/carnival.webp",
      time: "1:00 pm - 4:00 pm",
      venue: "Venue: Pool Lawn",

      Main_title_ceremony2: "Disco Deewaane",
      time2: "8:00 pm – 11:00 pm",
      venue2: "Venue: Podium Lawn",
      image2: "/assets/deewane.webp",

    },
    {
      date: "Sunday, 20th December 2026",

      // Main_title_ceremony: "Saath Sagun",
      // image: "/assets/sagun.webp",
      // time: "8:00 am",



      Main_title_ceremony2: "Sehra Bandhan",
      image2: "/assets/sehra.webp",
      time2: "11:30 am",
      venue2: "Venue: Anand Karaj Hall",

      Main_title_ceremony3: "Band Baaja Baarat",
      time3: "12:30 pm – 2:00 pm",
      // venue3: "Pool Lawn",
      image3: "/assets/baarat.webp",

      Main_title_ceremony4: "Baaraatiyon Ka Dil Se Swagat",
      time4: "2:00 pm – 3:00 pm",
      venue4: "Venue: Anand Karaj Hall",
      image4: "/assets/swagat.webp",


      Main_title_ceremony5: "Jai Mala",
      time5: "5:00 pm",
      venue5: "Venue: Mahal Terrace",
      image5: "/assets/jai_mala.webp",


      Main_title_ceremony6: "Saat Vachan",
      time6: "6:00 pm – 8:00 pm",
      venue6: "Venue: Mahal Terrace",
      image6: "/assets/vachan.webp",


      Main_title_ceremony7: "The Family Jam",
      time7: "10:00 pm – 12:00 am",
      // venue7: "Mahal Terrace",
      image7: "/assets/jam.webp",



    },





  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (

    <div>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/bhavesh.mp3" loop preload="auto" playsInline />



      <div className="fixed bottom-20 right-2 z-50 flex flex-col items-center">
        <button
          type="button"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight * 0.7,
              behavior: "smooth",
            });
          }}
          className="flex flex-col items-center gap-2 text-[#fff]"
          aria-label="Scroll down to explore"
        >
          <span className="flex h-16 w-6 items-center justify-center rounded-full border-2 border-[#C14405] bg-[#C14405] cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 10 5 5 5-5" />
              <path d="m7 5 5 5 5-5" />
            </svg>
          </span>

          <span className="animate-pulse text-[12px] tracking-[2px] poppins-bold  font-bold text-[#C14405]">
            SCROLL <br /> DOWN
          </span>

        </button>

      </div>





      <div className="
    bg-[url('/assets/bhavesh_mobile.webp')]
    md:bg-[url('/assets/bhavesh_desktop.webp')]  3xl:bg-[url('/assets/bhavesh_desktop.webp')]
    bg-cover bg-no-repeat bg-top md:bg-center w-full md:px-4 sm:px-8 overflow-hidden relative">


        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-10 left-8 w-18 h-18 transform rotate-12 opacity-90" />
        <FloatingLamp className="hidden lg:block absolute top-30 left-20 w-16 h-16 transform rotate-45 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-70 left-60 w-14 h-14 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-90 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-110 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-130 left-120 w-20 h-20 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-150 left-140 w-16 h-16 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-170 left-160 w-20 h-20 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-190 left-180 w-18 h-18 transform rotate-28 opacity-85" />



        <FloatingLamp className="lg:hidden absolute top-10 left-8 w-12 h-12 transform rotate-12 opacity-90" />
        <FloatingLamp className="lg:hidden absolute top-30 left-20 w-12 h-12 transform rotate-45 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-50 left-40 w-10 h-10 transform rotate-30 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-70 left-60 w-10 h-10 transform rotate-15 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-90 left-80 w-12 h-12 transform rotate-25 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-110 left-100 w-12 h-12 transform rotate-10 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-130 left-120 w-12 h-12 transform rotate-35 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-150 left-140 w-12 h-12 transform rotate-22 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-170 left-160 w-12 h-12 transform rotate-18 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-190 left-180 w-12 h-12 transform rotate-28 opacity-85" />



        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-20 h-20 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-28 h-28 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-20 h-20 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-28 h-28 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-20 h-20 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />


        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-20 right-12 w-18 h-19 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-40 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-60 right-52 w-18 h-18 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-80 right-72 w-16 h-16 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-100 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-120 right-112 w-18 h-18 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-140 right-132 w-16 h-16 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-160 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-180 right-172 w-16 h-16 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-200 right-192 w-18 h-18 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-20 h-20 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-20 h-20 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-20 h-20 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-20 h-20 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-20 h-20 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />

        <FloatingLamp className="lg:hidden absolute top-20 right-12 w-12 h-12 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-40 right-32 w-12 h-12 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-60 right-52 w-12 h-14 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-80 right-72 w-10 h-10 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-100 right-92 w-12 h-12 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-120 right-112 w-10 h-10 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-140 right-132 w-12 h-12 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-160 right-152 w-12 h-12 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-180 right-172 w-12 h-12 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-200 right-192 w-10 h-10 transform -rotate-35 opacity-85" reverse={true} />


        {/* <FallingLamps /> */}


        <div className=" md:pt-24 pt-4 md:pb-50 lg:pb-160 relative z-10  px-4 md:px-0">
          <h2 className="text-[#15528A]  text-center leading-tight text-[38px] sm:text-5xl lg:text-[100px] md:pb-370 pb-0 flex flex-col items-center gap-y-0">
            <span className="font-eb-garamond [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
              Sakshi
            </span>
            <span className="text-[16px] sm:text-3xl tracking-[6px] font-cormorant [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">WEDS</span>
            <span className="font-eb-garamond [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Bhavesh</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-200 pt-150 3xl:pt-280">

            <h2 className="text-white md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>

            <img
              src="/assets/ganesh_inter.png"
              alt="ganesh"
              className="md:w-40 w-28 h-auto"
            />

            <h2 className="text-white font-Cormorant-upright lg:text-[34px] md:text-2xl text-[32px] font-semibold">
              THE KATARIA FAMILY
            </h2>
          </div>

          <div className="mt-8 text-center">
            {/* <h2 className="text-white font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              cordially invites you
            </h2> */}

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              With the blessings of <br />
              Smt. Jasoda & Shri Dharampal Kataria
            </p>


            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              cordially invite you to celebrate the wedding of their beloved granddaughter
            </p>


            <h2 className="text-white font-Cormorant-upright text-center mt-5
            md:text-5xl text-[64px] lg:text-[100px] leading-tight font-bold">
              SAKSHI
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[20px]">
              (Daughter of Mrs. Muskan & Mr. Mukesh Kataria)
              <br />

            </p>


            <h2 className="text-white font-Cormorant-upright text-center 
            text-[64px] sm:text-7xl lg:text-[100px] leading-tight font-bold">
              <span className="text-white font-Cormorant-upright text-center lg:mt-10 mt-4
            md:text-4xl text-[32px] lg:text-[60px] leading-tight">Weds</span>   <br />
              BHAVESH
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[20px]">
              (Son of Mrs. Preeti & Mr. Mahesh Adwani)<br />

            </p>


          </div>

          <div className="flex flex-col-1 justify-center items-center mt-10">
            <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2 text-center">
              <span className="text-[24px] uppercase font-bold">Venue</span>  <br />
              <span className="text-[24px] ">Vijan Mahal</span> <br />
              <span className="text-[20px]">114/2 and 107, Mandla - Jabalpur Rd, <br /> Tilhari, Madhya Pradesh 482020</span> <br />
              <a
                href="https://maps.app.goo.gl/iH5R8UBvyehWnDnQA"
                className="text-white underline md:text-sm text-[18px] mt-2 font-cormorant"
                target="_blank"
              >
                See the route
              </a>
            </p>

          </div>

          <p className="text-white font-Cormorant-upright lg:text-3xl md:text-2xl text-[24px] mt-15 md:mt-20 text-center">
            THE WEDDING CELEBRATIONS
          </p>
          <div className="flex justify-center mt-10 md:mb-30 3xl:mb-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p className="text-white font-Cormorant-upright text-[26px] lg:text-[30px] mb-6">
                    {event.date}

                  </p>
                  {/* <img
                    src={event.image}
                    alt={event.Main_title_ceremony2}
                    className="lg:w-80 w-60 sm:w-76  h-auto"
                  />
                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] mt-4 font-bold">
                    {event.Main_title_ceremony}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base">
                    <span className="text-[22px]">  {event.time} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[24px]">

                    {event.venue}

                  </p> */}
                  {/* {event.image2 && (<img
                    src={event.image2}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony2}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time2} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[24px]">
                    {event.venue2}
                  </p> */}




                  {/* {event.image3 && (<img
                    src={event.image3}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony3}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time3} </span>
                  </p> */}
                  {/* <p className="text-white font-Cormorant-upright text-[14px] sm:text-[24px]">
                    {event.venue3}
                  </p> */}


                  {event.image4 && (<img
                    src={event.image4}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony4}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time4} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[24px]">
                    {event.venue4}
                  </p>




                  {event.image5 && (<img
                    src={event.image5}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony5}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time5} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[24px]">
                    {event.venue5}
                  </p>



                  {event.image6 && (<img
                    src={event.image6}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony6}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time6} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[24px]">
                    {event.venue6}
                  </p>


                  {event.image7 && (<img
                    src={event.image7}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony7}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time7} </span>
                  </p>
                  {/* <p className="text-white font-Cormorant-upright text-[14px] sm:text-[24px]">
                    {event.venue7}
                  </p> */}


                </div>
              ))}
            </div>
          </div>



          <div className="lg:h-200 md:h-180 h-60 lg:pt-20 pt-30 lg:pr-180 md:pr-100 pr-40 flex flex-col justify-end items-center text-center md:pb-40 pb-10 lg:pb-0  ">

            {/* <h1 className="lg:text-7xl md:text-xl text-xl text-[#E1EF1E] font-parisienne ">
              With <br /> Love From Us
            </h1>

            <h2 className="lg:text-[40px] md:text-xl text-[14px] text-[#ADBAE7] lg:pt-12 pt-6  font-eb-garamond md:leading-6 lg:leading-12 leading-5 lg:px-40">

              Two hearts, one journey and countless dreams to share! We can't wait to celebrate our special moments with the people who make our lives beautiful.Your presence and blessings will make our celebrations even more special and memorable.
            </h2> */}
          </div>

        </div>
        <img
          src="/assets/mobile_bottom.png"
          alt="ganesh"
          className="w-full h-auto md:hidden block -mt-55"
        />
      </div>


      <CoupleMessage />

      {/* <picture className="block w-full">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/bride1.png"
        />
<p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (Son of Mrs. Binita & Mr. Binay Kumar Thakur) </p>
        <img
          src="/assets/bide_mobilet.jpg"
          alt=""
          className="block w-full h-auto"
        />
      </picture> */}




      <div className="w-full relative">


        {/* <p className="absolute md:top-50 lg:top-110 top-55 left-0 w-full text-center text-[#071949] font-Cormorant-upright lg:text-[50px] md:text-2xl text-[32px] z-10 font-bold">
          #SAKSHIGotBHAVESH
        </p> */}
      </div>




      <MarriageCountdown />

    </div>
  );
}
