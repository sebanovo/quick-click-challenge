import '../styles/Boton.css'

export default function Boton({ texto, esBotonClick, handleClik }) {
  return (
    <div className="boton-container">
      <button
        onClick={handleClik}
        className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
      >
        {texto}
      </button>
    </div>
  )
}
