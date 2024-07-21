"use client";

import { ComponentProps } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import questions from "../../questions.json";

const Hamburger = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.4375 15.3125H16.5625M3.4375 10.3125H16.5625M3.4375 5.3125H16.5625"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Navbar: React.FC<ComponentProps<"div">> = () => {
  const pathname = usePathname();

  const id = pathname.split("/")[3];

  const round =
    parseInt(id) + 1 > questions.length ? undefined : parseInt(id) + 1;

  return (
    <div className="text-white px-6 py-3 flex flex-row justify-between items-center h-[3.75rem] bg-gradient-to-r from-[#212C7B] via-[#3C50E1] to-[#212C7B]">
      <Hamburger />

      {round && (
        <>
          Runde {round}/{questions.length}
        </>
      )}

      <div className="text-black text-[10px] p-[6px] bg-white rounded-[20px] flex flex-row items-center gap-2">
        <Image
          src="/scholz-happy.png"
          alt="scholz with crown"
          width={30}
          height={30}
          className="rounded-full shadow-md max-h-[30px] object-cover"
        />
        1xp
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.41667 8.75H3.5L7.58333 0.583336V5.25H10.5L6.41667 13.4167V8.75Z"
            fill="#FFBC42"
          />
        </svg>
      </div>
    </div>
  );
};
