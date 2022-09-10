import { useState } from "react"

export const AddCategory = ({onNewCategory, ...props}) => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ({target})=>{
    setInputValue( (c)=>target.value )
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if( inputValue.trim().length<= 1) return;
    /* setCategories((categories)=> [...categories, inputValue]) */
    onNewCategory( inputValue.trim())
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit} {...props}>
      <input name="category" type="text" value={inputValue} onChange={ onInputChange } placeholder="Buscar gifs"/>

    </form>
  )
}