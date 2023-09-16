import './App.css'
import { useState, useEffect } from 'react'
import Boton from './Components/Boton'
import Contador from './Components/Contador'
export default function App() {
  const [count, setCount] = useState(0)
  const [clock, setClock] = useState(0)
  const [puntaje, setPuntaje] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(prevClock => {
        if(prevClock === 10){
          setClock(1)
          setPuntaje(prevPuntaje => {
            let $puntaje = document.getElementsByClassName("contador")[0].innerHTML
            if(prevPuntaje < parseInt($puntaje)){
              return $puntaje
            }
            return prevPuntaje
          })
          setCount(0)
        }
        return prevClock + 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, []) // El arreglo de dependencias vacío asegura que el efecto se ejecute solo una vez al montar el componente.

  const subirContador = () => {
    setCount(prevCount => prevCount + 1)
  }

  const reset = () => {
    setCount(0)
    setClock(0)
    setPuntaje(0)
  }

  return (
    <>
      <div className="reloj">{clock}</div>
      <main>
        <h1 className="titulo">Botón</h1>
        <h2>Mejor puntuación es: {puntaje}</h2>
        <Contador numberClicks={count}></Contador>
        <Boton
          esBotonClick={true}
          texto={'click'}
          handleClik={subirContador}
        ></Boton>
        <Boton esBotonClick={false} texto="reset" handleClik={reset}></Boton>
      </main>
    </>
  )
}
