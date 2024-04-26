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
    limit: number; 
    city_mpg:number
  }

  export type CarState = Car[] & { message?: string };

  export interface CarCardProps {
    car: Car;
  }
  
 export interface CarDetailsProps {
    car: Car; 
    isOpen: boolean;
    closeModal: () => void;
  }

  export interface filterProps{
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,

  }

  export interface HomeProps {
    searchParams: filterProps;
  }

  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void;
  }
  
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
  }
  

  export interface SearchBarProps {
    setManuFacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }
  export interface SearchManuFacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
  }