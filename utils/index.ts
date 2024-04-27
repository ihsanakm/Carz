import { Car, filterProps } from "@/types";

//Callin car api
export async function fetchCars(filters:filterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'X-Api-Key': 'ie4DHd+DMH2T62WwRkdamA==lrZyggHbhBwz42Nl'
    }

    const response = await fetch (`https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{headers:headers})

    const results = await response.json();

    return results
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; ''
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const generateImageURL = (car: Car, angle: string) => {
    const { make, model, year } = car;
    const baseUrl = 'https://cdn.imagin.studio/getimage';

    const url = `${baseUrl}?customer=hrjavascript-mastery&make=${make}&modelFamily=${model.split(" ")[0]}&zoomType=fullscreen&modelYear=${year}&angle=${angle}`;

    return url;
};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };