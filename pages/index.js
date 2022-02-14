import { useState } from "react";

export default function Home() {
  const description = [
    "Frontend",
    "Barista",
    "Entertainer",
    "Creator",
    "Tiktoker",
    "Army",
    "Brother",
    "Runner",
    "Speaker",
    "Thai",
    "Coder",
  ];
  const [current, setCurrent] = useState(0);

  setTimeout(() => {
    if (current < description.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }, 1000);
  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-full">
        <div className="flex justify-center items-center h-full">
          <div>
            <div className="space-y-6">
              <h1 className="text-4xl">Hy! I Am</h1>

              <div className="w-96 font-bold animate-pulse text-7xl text-orange-500 overflow-hidden ">
                {description[current]}{" "}
              </div>

              <div className="text-md">
                I am <span className="font-bold"> Nack </span>.<br />
                Frontend developder - Art designer that live in Chiang Mai.
                Thailand
              </div>

              <div className="space-x-2">
                <button className="py-3 px-8 h-10 text-xs rounded-md bg-orange-400 shadow-lg text-white">
                  Let talk
                </button>

                <button className="py-3 px-8 h-10 text-xs rounded-md bg-transparent ">
                  Portfolio
                </button>
              </div>
            </div>

            <div className="mt-48">
              <div className="flex space-x-4  items-center">
                <div>Check Out My</div>
                <a
                  href="https://www.instagram.com/nacktapong/"
                  className="w-16 h-16 bg-stone-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-slate-400"
                >
                  <img src="Instagram.svg" width={25} height={25} />
                </a>
                <a
                  href="https://web.facebook.com/nack.nuntapong.5/"
                  className="w-16 h-16 bg-stone-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-slate-400"
                >
                  <img src="Facebook.svg" width={10} height={10} />
                </a>
                <a
                  href="https://www.pinterest.com/snoopysnacky/_created/"
                  className="w-16 h-16 bg-stone-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-slate-400"
                >
                  <img src="Pinterest.svg" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        {" "}
        <img src="nack.png" width={400} />
      </div>
    </div>
  );
}
