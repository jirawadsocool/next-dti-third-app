'use client'
 
import { useState } from 'react'
 
import React from 'react'
 
 
export default function MoneyShare() {
 
    const [money, setMoney] = useState('')
    const [person, setPerson] = useState('')
    const [moneyshare, setMoneyShare] = useState('0.00')
 
 
    const handleInputperseon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson(e.target.value)
    }
 
    const handleResetuiValue = () => {
        setMoney('')
        setPerson('')
        setMoneyShare('0.00')
    }
 
    const handleClickCalculatemoneyshare = () => {
        if (money === '' || money <= '0') {
            alert("can't Enter money 0")
            return
        }
 
        if (person === '' || person <= '0') {
            alert("can't Enter person 0")
            return
        }
 
        let result = parseFloat(money) / parseInt(person)
        setMoneyShare(result.toFixed(2))
    }
 
    return (
 
        <div>
            <h3 className="font-bold text-xl text-gray-800 mb-4">
                Amount:
            </h3>
            <input
                type="number"
                id="amount"
                min={0}
                placeholder="Enter your money"
                className="w-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                value={money} onChange={(e) => setMoney(e.target.value)}
            />
            <h3 className="font-bold text-xl text-gray-800 mb-4">
                People:
            </h3>
            <input
                type="number"
                id="amount"
                min={0}
                placeholder="Enter your People"
                className="w-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                value={person} onChange={handleInputperseon}
 
            />
            <button className='w-full mt-8 bg-blue-600 text-2xl text-white p-2 rounded'
                onClick={handleClickCalculatemoneyshare}
            >
                Run
            </button>
            <button className='w-full mt-4 bg-red-600 text-2xl text-white p-2 rounded'
                onClick={handleResetuiValue}
            >
                Clear
            </button>
            <div className='mt-8 text-center'>
                <h3 className='font-bold text-xl text-gray-600'>
                    Around {''}
                    <span className='text-red-600 text-4xl'>{moneyshare}</span>  bath
                </h3>
            </div>
        </div>
    )
}
 