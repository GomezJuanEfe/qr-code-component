import './Main.scss'

function Main({children}) {
  return (
    <main>
      <section className='qr-card'>
        {children}
      </section>
    </main>
  )
}

export { Main }