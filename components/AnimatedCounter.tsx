'use client';

import CountUp from "react-countup"

export const AnimatedCounter = ({ 
    amount
}: { amount: Number }
) => {
  return (
    <div className="w-full">
        <CountUp
        separator = "."
        prefix = "Rp."
        end = { amount }
        />
    </div>
  )
}
