import '../styles/Boton.css'

export default function Boton({ text, isClickButton, handleClik }) {
  return (
    <div className="boton-container">
      <button
        onClick={handleClik}
        className={isClickButton ? 'boton-click' : 'boton-reiniciar'}
      >
        {text}
      </button>
    </div>
  )
}
