import { log } from 'console';
import React, { useEffect, useRef, useState } from 'react'


type Props = {image:string};


const RandomImage = ({image}:Props):React.JSX.Element => {

  const [srcImg, setSrcImg]= useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  )//cuadro transparente


  const node = useRef<HTMLImageElement>(null)//se usa null para inicializar el elemento sin errores

/**
 * nuevo observador
 * observar el node
 * desconectar
 */
useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        console.log('hola, te veo');
        setSrcImg(image)
      }
    });
  });


  if (node.current) observer.observe(node.current);


  return()=>{
    observer.disconnect();
  }
},[image])



  return (
    <img ref={node} width={320} height="auto" className='rounded bg-gray-300' src={image} />
  )
}

export default RandomImage

/**
 * Tipos para referencias y observadores
Cuando trabajamos con React y TypeScript, puede que nos encontremos con problemas a la hora de utilizar 
referencias y observadores en nuestros componentes. Esto se debe a que, dependiendo del objeto HTML con 
el que estemos trabajando, necesitamos tener en cuenta ciertos conceptos para que nuestro código sea válido.

Digamos que vamos a nuestro componente RandomFox y queremos añadir una referencia con useRef().

export default function RandomFox( { image }: Props ):JSX.Element {  
  const node = useRef()

  return (
    <img **ref={node}** src={ image } className="w-80 h-auto rounded-lg" />
  )
}
Incluso si especificamos que la referencia será de tipo HTMLImageElement en el generic de useRef(), el error persiste:

const node = useRef<HTMLImageElement> ()

// Esto seguirá dando error
<img **ref={node}** src={ image } className="w-80 h-auto rounded-lg" />
La razón de este error es que el tipo de dato que useRef() devuelve por defecto es undefined, mientras 
que el elemento <img> solo acepta referencias de tipo null cuando no están asignadas. Por lo tanto, ambos 
tipos de dato no coinciden.

Para solucionar este problema, debemos inicializar la referencia con un valor nulo en lugar de dejarla sin asignar:

export default function RandomFox( { image }: Props ):JSX.Element {  
  const node = useRef<HTMLImageElement> (null)

  return (
    <img ref={node} src={ image } className="w-80 h-auto rounded-lg" />
  )
}
De esta manera, ya no recibiremos el error en el linter y nuestra referencia será válida para trabajar con el elemento <img>.
Es importante tener en cuenta estos detalles cuando trabajamos con referencias y observadores en React 
y TypeScript, ya que pueden generar errores difíciles de depurar. Conocer estas diferencias nos 
permitirá solucionar problemas con mayor facilidad y hacer un mejor uso del tipado de TypeScript en nuestros proyectos.
 */