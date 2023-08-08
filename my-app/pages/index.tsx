'use client';
import RandomImage from '@/components/RandomImage'
import { Inter } from 'next/font/google'
import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })




type ImageItems = {id:string, url:string}





export default function Home() {
  
  const generateID =()=> {return uuidv4();}

  const [images, setImages] = useState<ImageItems[]>([]);


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
      

        <h1 className="text-3xl font-bold underline">titulo</h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {images.map(({id, url}) =>(
          <div key={id} className='p-4'>
            <RandomImage image={url}/>
          </div>
        ))}
      
    </main>
  )
}
