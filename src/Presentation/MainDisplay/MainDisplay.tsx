import React, { useEffect, useRef, useState } from 'react';
import getNumber from '../../Service/api';
import './MainDisplay-styles.scss';
import { IoMdRefresh } from "react-icons/io";

const MainDisplay: React.FC = () => {
  const [number,setNumber] = useState<Number>(0)
  const [error,setError] = useState<Number>()
  const [value,setValue] = useState<string>('')
  const [message,setMessage] = useState<string>('')
  const [isNewValue, setIsNewValue] = useState<boolean>(false)
  const [isReadyOnly, setIsReadyOnly] = useState<boolean>(false)
  const input = useRef<HTMLInputElement>(null)
  const btn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    getNumber().then((response) => {
      response.data.value ? setNumber(response.data.value) : setError(response.status)
    })
  },[isNewValue])

  const maskNumber = (value:string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})/, "")
  }

  const searchForCorrectrValue = () => {
    clearCacheNumbers()
    if(!value) return 
    const guess = !error ? value.split('') : error.toString().split('')
    const mensagem = document.getElementById(`message`) as HTMLParagraphElement
    
    let index = 1
    let ClassMessage = ''

    if(!!error) {
      setMessage('ERRO')
      setIsReadyOnly(true)
      mensagem.className = 'Display__Message Display__Message--red'
      ClassMessage = `Display__red `
    }else if(Number(value) === number) {
      setMessage('Você acertou!!!!')
      setIsReadyOnly(true)
      mensagem.className = 'Display__Message Display__Message--green'
      ClassMessage = `Display__green `
    } else if(Number(value) < number) {
      setMessage('É maior')
      mensagem.className = 'Display__Message'
    } else {
      setMessage('É menor')
      mensagem.className = 'Display__Message'
    }

    if(ClassMessage) {
      const button = btn.current as HTMLButtonElement
      button.className = 'Display__Btn Display__Btn--disable'
    }

    while (index <= guess.length ) {
      const baseClass = `Display__Box--${index}`
      const display = document.getElementById(`display${index}`) as HTMLDivElement
      display.className = ClassMessage + baseClass + ` Display__Ligth--${guess[index-1]}`
      index++
    }
  }

  const clearCacheNumbers = () => {
    setValue('')
    input.current?.focus()
    const display1 = document.getElementById(`display1`) as HTMLDivElement
    const display2 = document.getElementById(`display2`) as HTMLDivElement
    const display3 = document.getElementById(`display3`) as HTMLDivElement
    const message = document.getElementById(`message`) as HTMLParagraphElement
    display1.className = 'Display__Box--1 Display__Ligth--0'
    display2.className = 'Display__Box--2 Display__hidden'
    display3.className = 'Display__Box--3 Display__hidden'
    message.className = 'Display__Message Display__hidden'
  }

  const ResetDisplay = () => {
    const button = btn.current as HTMLButtonElement
    button.className = 'Display__Btn Display__Btn--Orange'
    clearCacheNumbers()
    setIsNewValue(!isNewValue)
    setIsReadyOnly(false)
    setMessage('')
    setNumber(0)
    setError(0)
  }

  return (
    <div className='Display__Container'>
      <div className='Display__Header'>
        <h1 className='Display__First'>QUAL É O NÚMERO?</h1>
        <div className='Display__Trace'></div>
      </div>
      <div className='Display__Content'>
        <p className='Display__Message hidden' id='message'>{message}</p>
        <div className='Display__Number'>
          <div className="Display__Box--1  Display__Ligth--0" id='display1'>
            <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
            <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
            <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
            <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
            <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
            <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
            <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
          </div>
          <div className="Display__Box--2 Display__hidden" id='display2'>
            <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
            <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
            <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
            <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
            <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
            <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
            <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
          </div>
          <div className="Display__Box--3 Display__hidden" id='display3'>
            <div className="Display__Segment--A"><span className="Display__Span Display__Span--A"></span></div>
            <div className="Display__Segment--B"><span className="Display__Span Display__Span--B"></span></div>
            <div className="Display__Segment--C"><span className="Display__Span Display__Span--C"></span></div>
            <div className="Display__Segment--D"><span className="Display__Span Display__Span--D"></span></div>
            <div className="Display__Segment--E"><span className="Display__Span Display__Span--E"></span></div>
            <div className="Display__Segment--F"><span className="Display__Span Display__Span--F"></span></div>
            <div className="Display__Segment--G"><span className="Display__Span Display__Span--G"></span></div>
          </div>
        </div>
        {(message === 'Você acertou!!!!' || message === 'ERRO') && <button type='button' className='Display__Btn Display__Btn--Gray' onClick={ResetDisplay} ><IoMdRefresh className='Display__Icon' />NOVA PARTIDA</button>}
      </div>

      <div className='Display__Footer'>
        <input ref={input} readOnly={isReadyOnly} type="text" maxLength={3} placeholder='Digite o palpite' className='Display__Input' value={value} onChange={(e) => setValue(maskNumber(e.target.value))} />
        <button ref={btn} disabled={isReadyOnly} type='button' className='Display__Btn Display__Btn--Orange' onClick={searchForCorrectrValue}>ENVIAR</button>
      </div>
    </div>
  )
}

export default MainDisplay;