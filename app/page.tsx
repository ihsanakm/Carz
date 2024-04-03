import { Hero } from "@/Components";
import Image from "next/image";
import {Searchbar, CustomFilter, CarCard} from "@/Components";
import { fetchCars } from "@/utils";
import { Car } from "@/types";

export default async function Home() {

  const cars = await fetchCars();
  const isDataEmpty = !cars || !Array.isArray(cars) || cars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
    
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-conatiner">
        <h1 className="text-4xl font-extrabold">
          Car Catalogue
        </h1>
        <p>
          Explore your dream car
        </p>
      </div>
      <div className="home__filters">
        <Searchbar />
        <div className="home__filter-container">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
      {!isDataEmpty?(
      <div>
        {cars?.map((car:Car)=>(
          <CarCard car={car} />
        ))}
      </div>):
      (<div className="home__error-container">
        <h2 className="text-black text-xl font-bold">OOPS! No Results</h2>
      </div>)}
      
    </div>

    </main>
  );
}
