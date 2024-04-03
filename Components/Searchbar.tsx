"use client";

import React, { createContext, useState } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import { SearchManufacturer } from ".";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(manufacturer==='' && model===''){
      return alert('Please Fill Search Bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model:string, manufacturer:string)=>
  {
    const searchParam = new URLSearchParams(window.location.search)
    
    if(model){
      searchParam.set('model',model)
    }else
    {
      searchParam.delete('model')
    }

    if(manufacturer){
      searchParam.set('manufacturer', manufacturer)
    }else{
      searchParam.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParam.toString()}`

    router.push(newPathName)

    }

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-12 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={40}
          height={40}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model icon"
        />

        <input
          name="model"
          type="text"
          value={model}
          placeholder="Tiquan"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
