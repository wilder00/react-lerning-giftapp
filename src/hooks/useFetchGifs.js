import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const getImages = async (category, saverImageFn, changeLoaingFn) => {
  try {
    const newImages = await getGifs(category);
    saverImageFn(newImages)
    changeLoaingFn(false)
  } catch (error) {
    console.log(error);
  }
}

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{ getImages(category, setImages,setIsLoading) }, [])

  return {
    images,
    isLoading,
  }
}
