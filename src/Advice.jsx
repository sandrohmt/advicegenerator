import { useEffect, useState } from "react";

function Advice() {

  const [info, setInfo] = useState()

  const URL = "https://api.adviceslip.com/advice"

  async function getRandomAdvice() {
    const resp = await fetch(URL)
    const data = await resp.json()
    const newInfo = await {
      id: data.slip.id,
      advice: data.slip.advice
    }
    await setInfo(newInfo)
  }  

  useEffect(() => {
    getRandomAdvice()
  }, [])





  return (
    <div className='main'>
        <div className='title'>
          <h1>ADVICE #{info.id}</h1>
        </div>
        <div className="advice">
          {info.advice}
        </div>
        <div className="divisor"></div>
        <div className='img-dice'>
          <img src="./src/assets/icon-dice.svg" alt="Icone de um dado" />
        </div>
    </div>
  )
}

export default Advice