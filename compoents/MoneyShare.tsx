import React from 'react'

export default function MoneyShare() {
  return (
    <div>
        <h3 className='font-bold text-xl text-gray-800 mb-4'>
            จำนวนเงิน:
        </h3>
        <input type="number" id="amount" min={0} placeholder="ป้อนจำนวนเงิน" 
         className='w-full border border-gray-300 pt-4 focus:outline-none 
                    focus:right-2 focus:ring-blue-500 rounded p-4'/>
        <h3 className='font-bold text-xl text-gray-800 mt-8 mb-4'>
            จำนวนคน:
        </h3>
        <input type="number" id="person" min={0} placeholder="ป้อนจำนวนคน" 
         className='w-full border border-gray-300 pt-4 focus:outline-none 
                    focus:right-2 focus:ring-blue-500 rounded p-4'/>
        <button className='w-full mt-8 bg-blue-800 text-2xl text-white p-4 rounded'>
            คำนวณ
        </button>
        <button className='w-full mt-4 bg-red-600 text-2xl text-white p-4 rounded'>
            ล้างข้อมูล
        </button>
        <div className='mt-8 text-center'>
            <h3 className='font-bold text-xl text-gray-800'>
                หารกันคนละ
                <span className='text-red-600 text-5xl'>
                    0.00
                </span>
                บาท
            </h3>
        </div>
    </div>
  )
}
