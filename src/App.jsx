import './App.css'
import { useState, useEffect, useRef } from 'react'
import Boton from './Components/Boton'
import Contador from './Components/Contador'
export default function App() {
  const [count, setCount] = useState(0)
  const [clock, setClock] = useState(0)
  const [puntaje, setPuntaje] = useState(() => {
    return Number(window.localStorage.getItem('score'))
  })
  const refReloj = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(prevClock => {
        if (prevClock === 10) {
          setClock(1)
          setPuntaje(prevPuntaje => {
            let score = refReloj.current.innerHTML
            if (prevPuntaje < parseInt(score)) {
              window.localStorage.setItem('score', score)
              return score
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
      <main>
        <h1 className='titulo'>
          Quick Click
          <div className='reloj' ref={refReloj}>
            {clock}
          </div>
        </h1>
        <h2>Mejor puntuación es: {puntaje}</h2>
        <Contador numberClicks={count} subirContador={subirContador}></Contador>
        <Boton esBotonClick={false} texto='reset' handleClik={reset}></Boton>
      </main>
    </>
  )
}
