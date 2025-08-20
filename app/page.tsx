import React from "react";
import money from "./images/money.png";
import Image from "next/image";
import MoneyShare from "@/compoents/MoneyShare";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Money Share Calculator
        </h1>
        <h3 className="text-xl font-bold text-center text-blue-800 mt-4">
          คำนวณเงินที่ต้องการหารกัน
        </h3>
        <Image
          className="mx-auto mt-4 mb-8"
          src={money}
          alt="money"
          width={100}
          height={100}
        />
        <MoneyShare />
      </div>
      <h3 className='mt-8 font-bold text-xl'>
            Developed by {' '}
            <span className="text-blue-500">
                Jirawad DTI SAU Team
            </span>
        </h3>
    </div>
  );
}
