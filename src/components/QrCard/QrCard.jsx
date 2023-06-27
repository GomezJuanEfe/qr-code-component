import './QrCard.scss'

function QrCard({imgSrc, title, text}) {
  return (
    <>
      <div className="qr-card__container">
        <img className='qr-card__image' src={imgSrc} />
        <div className="qr-card__body">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export { QrCard }