import { useState } from "react";
import Card from "../components/card";
import HomeStyle from "../styles/Home.module.scss";

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
    <div className="h-screen w-full flex bg-neutral-100">
      <div className="h-full w-full">
        <div className="flex justify-center items-center h-full">
          <div>
            <div className="space-y-6">
              <h1 className="text-4xl">Hy! I Am</h1>

              <div className="font-bold animate-pulse text-6xl text-orange-500 ">
                {description[current]}
              </div>

              <div className="text-md">
                I am <span className="font-bold"> Nack </span>.<br />
                Frontend developder with 2 Years experience that live in Chiang Mai.
                Thailand<br />
              </div>

              <div className="space-x-2">
                <button className="py-3 px-8 text-xl font-bold rounded-md bg-orange-400 shadow-lg text-white">
                  Let talk
                </button>

                <button className="py-3 px-8  text-sm rounded-md bg-transparent ">
                  Portfolio
                </button>
              </div>
            </div>

            <div className="mt-48">
              <div className="flex space-x-4  items-center">
                <div>Check Out My</div>
                <a
                  href="https://www.instagram.com/nacktapong/"
                  className="w-16 h-16 bg-orange-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-orange-400"
                >
                  <img src="Instagram.svg" width={25} height={25} />
                </a>
                <a
                  href="https://web.facebook.com/nack.nuntapong.5/"
                  className="w-16 h-16 bg-orange-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-orange-400"
                >
                  <img src="Facebook.svg" width={10} height={10} />
                </a>
                <a
                  href="https://www.pinterest.com/snoopysnacky/_created/"
                  className="w-16 h-16 bg-orange-300 rounded-full  flex justify-center items-center shadow-2xl text-white hover:bg-orange-400"
                >
                  <img src="Pinterest.svg" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="absolute top-[210px] left-[50px] z-20">
          <Card text="Frontend Developer"></Card>
        </div>

        <div className="absolute top-[300px] right-[50px] z-20">
          <Card text="Graphic designer"></Card>
        </div>

        <div className="absolute top-[400px] left-[120px] z-20">
          <Card text="Adventure"></Card>
        </div>

        <div className="absolute top-[600px] left-[120px] z-20 flex justify-center items-center space-x-5">
          <div className="flex h-full items-center flex-col space-x-3 shadow-lg bg-white p-3 rounded-lg">
            <img src="graphic1.png" className="w-[160px] rounded-lg" />

            <div className="flex pt-2">
              <img src="avatar.jpg" className="rounded-full" width={25} />
              <div className="font-bold ml-2">Skynack</div>
            </div>
          </div>

          <div className="flex h-full items-center flex-col space-x-3 shadow-lg bg-white p-3 rounded-lg">
            <img src="graphic2.png" className="w-[160px] rounded-lg" />

            <div className="flex pt-2">
              <img src="avatar.jpg" className="rounded-full" width={25} />
              <div className="font-bold ml-2">Skynack</div>
            </div>
          </div>

          <div className="flex h-full items-center flex-col space-x-3 shadow-lg bg-white p-3 rounded-lg">
            <img src="graphic3.png" className="w-[150px] rounded-lg" />

            <div className="flex pt-2">
              <img src="avatar.jpg" className="rounded-full" width={25} />
              <div className="font-bold ml-2">Skynack</div>
            </div>
          </div>

          <div className="flex h-full items-center flex-col space-x-3 shadow-lg bg-white p-3 rounded-lg">
            <img src="graphic4.png" className="w-[160px] rounded-lg" />

            <div className="flex pt-2">
              <img src="avatar.jpg" className="rounded-full" width={25} />
              <div className="font-bold ml-2">Skynack</div>
            </div>
          </div>
        </div>

        <div className={HomeStyle["image-container"]}>
          <img src="nack-2.png" className="max-h-[935px] z-10" />
        </div>
      </div>
    </div>
  );
}
