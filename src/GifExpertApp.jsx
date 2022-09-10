import { useState } from "react"
import { AddCategory, GrifGrid } from "./components"


export const GifExpertApp = () =>{
  const [categories, setCategories] = useState(['one punch', 'Dragon ball'])

  const onAddCategory = (event) =>{
    if (categories.includes(event)) return;
    setCategories((categories)=> [event,...categories])
  }
  return (
    <>
      <h1 >GifExpertApp</h1>
      <AddCategory onNewCategory={value => onAddCategory(value)}/>
        { categories.map((category)=> (<GrifGrid key={category} category={category} />))}
    </>
  )
}