import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    btnType?:"button"
    handleClick?:MouseEventHandler<HTMLButtonElement>
    textStyles?:string
    rightIcon?:string
    isDisabled?: boolean
}

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(maufacturer:string)=>void;
}

export interface Car {
    make: string;
    model: string;
    fuel_type: 'gas' | 'diesel' | 'electricity';
    drive: 'fwd' | 'rwd' | 'awd' | '4wd';
    cylinders: 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
    transmission: 'manual' | 'automatic';
    year: number;
    min_city_mpg: number;
    max_city_mpg: number;
    min_hwy_mpg: number;
    max_hwy_mpg: number;
    min_comb_mpg: number;
    max_comb_mpg: number;
    limit: number; // Must be between 1 and 50
    city_mpg:number
  }

  export interface CarCardProps {
    car: Car;
  }
  
 export interface CarDetailsProps {
    car: Car; 
    isOpen: boolean;
    closeModal: () => void;
  }