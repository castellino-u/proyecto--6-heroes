import { useEffect, useState } from "react";
import ListHeroes from "../ui/ListHeroes/ListHeroes";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/IHeroes";

const MarvelHeroes = () => {
  const [heros,setHeros]=useState<IHeroes[]>([]);
  const handleGetHeroesDC=()=>{
    const result = heroesData.filter((hero)=>hero.publisher==="Marvel Comics");
    setHeros(result);
  }
  useEffect(()=>{
    handleGetHeroesDC();
  },[])
  return (
    <ListHeroes heroes={heros} title="Heroes Marvel"/>
  )

}

export default MarvelHeroes
