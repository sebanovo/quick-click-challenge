import './App.css'
import { useState, useEffect, useRef } from 'react'
import Boton from './Components/Boton'
import Contador from './Components/Contador'

const SCORE_KEY = 'score'
const CLOCK_LIMIT = 10

export default function App() {
  const [count, setCount] = useState(0)
  const [clock, setClock] = useState(0)
  const [score, setscore] = useState(() => {
    return Number(window.localStorage.getItem(SCORE_KEY))
  })
  const $refCounter = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(prevClock => {
        if (prevClock === CLOCK_LIMIT) {
          setClock(1)
          setscore(prevScore => {
            const counterText = parseInt($refCounter.current.innerHTML)
            if (prevScore < counterText) {
              window.localStorage.setItem(SCORE_KEY, counterText)
              return counterText
            }
            return prevScore
          })
          setCount(0)
          return 1
        }
        return prevClock + 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1)
  }

  const reset = () => {
    setCount(0)
    setClock(0)
    setscore(0)
    window.localStorage.removeItem(SCORE_KEY)
  }

  return (
    <>
      <main>
        <h1 className='titulo'>
          Quick Click
          <div className='reloj'>
            {clock}
          </div>
        </h1>
        <h2>Mejor puntuación es: {score}</h2>
        <Contador numberOfClicks={count} incrementCounter={incrementCounter} ref={$refCounter}></Contador>
        <Boton isClickButton={false} text='reset' handleClik={reset}></Boton>
      </main>
    </>
  )
}
