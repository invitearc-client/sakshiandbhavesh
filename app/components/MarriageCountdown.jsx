"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
export default function MarriageCountdown() {
  const TARGET_DATE = new Date("2026-12-20").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="md:bg-[url('/assets/countdown_desktop_bg.png')] bg-[url('/assets/countdown_mobile_bg.jpg')] bg-cover bg-no-repeat pb-12 md:pt-0 pt-10 ">
        <div className="min-h-280 md:min-h-300 lg:min-h-400 h-80">
          <h1 className="lg:text-[40px] md:text-5xl text-[40px] text-center text-[#FFF5B9] uppercaselg:pt-10 pt-6 font-Cormorant-upright">
            Our Countdown Starts
          </h1>
          <h2 className="lg:text-[60px] text-[36px] text-center text-[#FFF5B9] font-Cormorant-upright">
            {" "}
            {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M{" "}
            {timeLeft.seconds}S
          </h2>
          <div className="flex flex-col-1 gap-4 justify-center items-center mt-14">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src="/assets/instagram_w.png"
                alt=""
                className="h-9 md:h-14 w-9 md:w-14"
              />
            </a>
          </div>
          <p className="lg:text-[24px] text-xl text-[#FFF5B9] mt-2 text-center font-Cormorant-upright">
            ©{" "}
            <a href="https://invitearc.com/" target="_blank">
              InviteArc
            </a>{" "}
            2026{" "}
          </p>

          <div className="flex flex-col justify-center items-center ">
            <h2 className="lg:text-5xl text-2xl text-center text-[#FFF5B9] lg:pt-20 font-Cormorant-upright pt-16">
              AWAITING THE PLEASURE OF <br /> YOUR COMPANY
              <h2 className="lg:text-3xl text-[22px] text-center text-[#FFF5B9]  font-Cormorant-upright mt-8 font-bold">
                Dharampal N. Kataria
              </h2>
              <h2 className="lg:text-3xl text-[22px] text-center text-[#FFF5B9] font-Cormorant-upright mt-4 font-bold">
                Mukesh D. Kataria
              </h2>
              <a
                href="tel:9422190923"
                className="inline-flex items-center gap-2  transition font-eb-garamond text-[17px] ml-2"
              >
                <Phone size={15} />
                9422190923
              </a>
              <p className="text-[19px] -mt-1">Mukesh Garments</p>
              <h2 className="lg:text-3xl text-[22px] text-center text-[#FFF5B9] font-Cormorant-upright mt-4 font-bold">
                Mayuresh M. Kataria
              </h2>
              <a
                href="tel:8459340503"
                className="inline-flex items-center gap-2  transition font-eb-garamond text-[17px] ml-2"
              >
                <Phone size={15} />
               8459340503
              </a>
              <br />
             
              <h2 className="lg:text-3xl text-2xl text-center text-[#FFF5B9]  font-Cormorant-upright mt-8">
                With Love,
                <br />
                Kataria Family
              </h2>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
