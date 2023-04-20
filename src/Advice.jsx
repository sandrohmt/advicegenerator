import { useEffect, useState } from "react";

function Advice() {

  const [advice, setAdvice] = useState()
  const [id, setId] = useState()

  const URL = "https://api.adviceslip.com/advice"

  async function getRandomAdvice() {
    const resp = await fetch(URL)
    const data = await resp.json()
    const {slip} = data
    const {id, advice} = slip
    setAdvice(advice)
    setId(id)
  }  

  useEffect(() => {
    getRandomAdvice()
  }, [])

  return (
    <div className='main'>
        <div className='title'>
          <h1>ADVICE #{id}</h1>
        </div>
        <div className="advice">
          {advice}
        </div>
        <div className="divider">
          <img src="./src/assets/pattern-divider-desktop.svg" alt="" />
        </div>
        <div className='btn-dice'>
          <img onClick={getRandomAdvice} src="./src/assets/icon-dice.svg" alt="Icone de um dado" />
        </div>
    </div>
  )
}

export default Advice