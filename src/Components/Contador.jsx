import '../styles/Contador.css'
export default function Contador({ numberClicks }) {
  return (
    <div className="contador-container">
      <h1 className="contador">{numberClicks}</h1>
    </div>
  )
}
