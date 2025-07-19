import React from 'react'
import Image from 'next/image'

const BoxStatistcs = ({icon, title, value}: {icon: string, title: string, value: string}) => {
  return (
    <div className='w-[222px] h-[105px] bg-background px-5 py-6 rounded-[10px]'>
        <div className='w-[42px] h-[42px] bg-primary rounded-full flex items-center justify-center'>
            <Image src={icon} alt='icon' width={20} height={20} />
        </div>
        <div>
            <p className='text-text-second-color text-sm font-medium'>{title}</p>
            <h1 className='text-text-first-color text-2xl font-bold'>{value}</h1>
        </div>
    </div>
  )
}

export default BoxStatistcs