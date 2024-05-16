import '../styles/Contador.css'
export default function Contador({ numberClicks, subirContador }) {
  return (
    <div className='contador-container' onClick={subirContador}>
      <h1 className='contador'>{numberClicks}</h1>
    </div>
  )
}
