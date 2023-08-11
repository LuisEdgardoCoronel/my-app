'use client';
import LazyImage from '@/components/RandomImage'
import { Inter } from 'next/font/google'
import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })










export default function Home() {
  
  const generateID =():string=> {return uuidv4();}

  const [images, setImages] = useState<IFoxItems[]>([]);


  const randomGenerate = ():number=>{
    return Math.floor(Math.random()*123) +1;
  }
  
  // const imgUrl = {id:generateID(), url:`https://randomfox.ca/images/${randomGenerate()}.jpg`}
  

  const addNewFox : MouseEventHandler<HTMLButtonElement> = () => {


    const newImageItem = {
      id:generateID(), 
      url:`https://randomfox.ca/images/${randomGenerate()}.jpg`
    }

    setImages([
      ...images,
      newImageItem
    ])
  }







  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      

        <h1 className="text-3xl font-bold underline">Fox image generator</h1>
        <button className='text-red-500 border border-red-500 rounded p-1 mt-3' onClick={addNewFox}>Add new Fox</button>
        {images.map(({id, url}) =>(
          <div key={id} className='p-4'>
            <LazyImage src={url}/>
          </div>
        ))}
      
    </main>
  )
}
