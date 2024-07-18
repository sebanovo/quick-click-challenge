import '../styles/Contador.css'
import { forwardRef } from 'react'

const Contador = forwardRef(({ numberOfClicks, incrementCounter }, $refCounter) => {
  return (
    <div className='contador-container' onClick={incrementCounter}>
      <h1 className='contador' ref={$refCounter}>{numberOfClicks}</h1>
    </div>
  )
}
)
export default Contador