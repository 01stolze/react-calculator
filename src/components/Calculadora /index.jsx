import { useRef, useState } from 'react'
import { Display } from '../Display'
import './styles.css'

export const Calculadora = () => {
  const [display, setDisplay] = useState(0)
  const [operator, setOperator] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const result = useRef('')
  const previousDisplay = useRef('')

  const inputNumber = (e) => {
    if (display === 0) {
      setDisplay(e.target.value)
    } else {
      setDisplay(display + e.target.value)
    }
  }

  const inputOperator = (e) => {
    setFirstNumber(display)
    setOperator(e.target.value)
    setDisplay(0)
  }

  /* teste */

  const displayResult = () => {
    switch (operator) {
      case '+': {
        result.current = Number(firstNumber) + Number(display)
        setDisplay(Number(firstNumber) + Number(display))
        previousDisplay.current = `${firstNumber} ${operator} ${display} = ${result.current}`

        break
      }
      case '-': {
        result.current = Number(firstNumber) - Number(display)
        setDisplay(Number(firstNumber) - Number(display))
        previousDisplay.current = `${firstNumber} ${operator} ${display} = ${result.current}`
        break
      }
      case '/': {
        result.current = Number(firstNumber) / Number(display)
        setDisplay(Number(firstNumber) / Number(display))
        previousDisplay.current = `${firstNumber} ${operator} ${display} = ${result.current}`

        break
      }
      case '*': {
        result.current = Number(firstNumber) * Number(display)
        setDisplay(Number(firstNumber) * Number(display))
        previousDisplay.current = `${firstNumber} ${operator} ${display} = ${result.current}`

        break
      }
      case '%': {
        result.current = Number(firstNumber) / 100
        setDisplay(Number(firstNumber) / 100)
        previousDisplay.current = `${firstNumber} ${operator} = ${result.current}`

        break
      }
      case 'x²': {
        result.current = Number(firstNumber) * Number(firstNumber)
        setDisplay(Number(firstNumber) * Number(firstNumber))
        previousDisplay.current = `${firstNumber} ${operator} = ${result.current}`
      }
    }
  }

  if (display.length > 12) {
    console.error('TOO MUCH NUMBERS')
    setDisplay(0)
    setFirstNumber(0)
    setOperator('')
  }

  return (
    <div className="container">
      <Display previousDisplay={previousDisplay.current} display={display} />
      <div className="inside-container">
        <button
          className="AC"
          onClick={() => {
            setDisplay(0)
            setFirstNumber(0)
            setOperator('')
            previousDisplay.current = ''
            result.current = 0
          }}
        >
          AC
        </button>
        <button className="raiz" onClick={inputOperator} value="x²">
          x²
        </button>
        <button className="porc" onClick={inputOperator} value="%">
          %
        </button>
        <button className="operator" onClick={inputOperator} value="/">
          /
        </button>
        <button onClick={inputNumber} value={7}>
          7
        </button>
        <button onClick={inputNumber} value={8}>
          8
        </button>
        <button onClick={inputNumber} value={9}>
          9
        </button>
        <button className="operator" onClick={inputOperator} value="*">
          *
        </button>
        <button onClick={inputNumber} value={4}>
          4
        </button>
        <button onClick={inputNumber} value={5}>
          5
        </button>
        <button onClick={inputNumber} value={6}>
          6
        </button>
        <button className="operator" onClick={inputOperator} value="-">
          -
        </button>
        <button onClick={inputNumber} value={1}>
          1
        </button>
        <button onClick={inputNumber} value={2}>
          2
        </button>
        <button onClick={inputNumber} value={3}>
          3
        </button>
        <button className="operator" onClick={inputOperator} value="+">
          +
        </button>
        <button
          className="del"
          onClick={() => {
            setDisplay(0)
            result.current = 0
          }}
        >
          C
        </button>
        <button onClick={inputNumber} value={0}>
          0
        </button>
        <button onClick={inputNumber} value=".">
          .
        </button>
        <button className="operator" onClick={displayResult}>
          =
        </button>
      </div>
    </div>
  )
}
