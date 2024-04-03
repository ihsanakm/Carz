import { Car } from "@/types";

//Callin car api
export async function fetchCars() {
    const headers = {
        'X-Api-Key': 'ie4DHd+DMH2T62WwRkdamA==lrZyggHbhBwz42Nl'
    }

    const response = await fetch ('https://api.api-ninjas.com/v1/cars?model=q3',{headers:headers})

    const results = await response.json();

    return results
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const generateImageURL= (car:Car, angle?:string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make, model, year} = car

    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(" ")[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear',`${year}`)
    url.searchParams.append('angle',`${angle}`)

    return `${url}`

}