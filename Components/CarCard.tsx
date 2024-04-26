"use client"

import { CarCardProps } from '@/types'
import { calculateCarRent, generateImageURL } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { CarDetails, CustomButton } from '.'

export const CarCard = ({car}:CarCardProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const {city_mpg, year, make, model,transmission, drive, fuel_type} = car

    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>

        </div>

        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-mediumm'>
                /day
            </span>

        </p>

        <div className='relative h-40 w-full my-3 object-contain'>
            <Image src={generateImageURL(car,'01')} alt='car model' fill priority className='object-contain'/>
            
        </div>

        <div className='relative mt-2 w-full flex'>
            <div className='flex w-full group-hover:invisible justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt='steering-wheel'/>
                    <p className='text-[14px]'>
                        {transmission ==='automatic'? 'Automatic':'Manual'}
                    </p>

                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt='steering-wheel'/>
                    <p className='text-[14px]'>
                        {fuel_type ==='electricity'? 'Electricity':('gas'?'Gas':'Diesel')}
                    </p>

                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt='gas-wheel'/>
                    <p className='text-[14px]'>
                        {city_mpg}
                    </p>

                </div>

            </div>
            <div className='car-card__btn-container'>
                    <CustomButton
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={()=>setIsOpen(true)}
                    />
            </div>



        </div>

        <CarDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car} />

    </div>
  )
}
