import { useEffect, useState } from "react"
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/IHeroes";
import ListHeroes from "../ui/ListHeroes/ListHeroes";

const DCHeroes = () => {

  const [heros,setHeros]=useState<IHeroes[]>([]);
  const handleGetHeroesDC=()=>{
    const result = heroesData.filter((hero)=>hero.publisher==="DC Comics");
    setHeros(result);
  }
  useEffect(()=>{
    handleGetHeroesDC();
  },[])
  return (
    <ListHeroes heroes={heros} title="Heroes DC Comic"/>
  )
}

export default DCHeroes
