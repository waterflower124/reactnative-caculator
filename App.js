import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { AsyncStorage } from 'react-native'
import math from 'mathjs'

import ResultPane from './components/ResultPane'
import KeyPad from './components/KeyPad'
import Styles from './components/styles'

const initialState = {
  register: [],
  displayValue: '0',
  operandInput: '',
  operatorInput: null,
  waitingForOperand: false,
  memoryState: 'AC'
}

export default class CalculatorApp extends Component {

  constructor(props) {
    super(props)

    this.operators = ['+', '-', '/', '*']
    this.state = {
      ...initialState
    }
  }

  handleNumberInput = (value) => {
    const {
      register,
      operandInput,
      operatorInput
    } = this.state
    const operand = operandInput === '0' ? value : (operandInput + value).slice(0, 9)
    const hasOperator = this.operators.includes(register.slice(-1)[0])

    // Save previous state
    const prevState = { ...this.state }
    AsyncStorage.setItem('prevState', JSON.stringify(prevState))

    this.setState({
      register: [...(hasOperator) ? register : register.slice(0, -1), operand],
      displayValue: operand,
      operandInput: operand,
      operatorInput: null,
      waitingForOperand: false,
      memoryState: 'C'
    })
  }

  handleOperatorInput = (operator) => {

    if(this.state.memoryState === 'C') {

        // Save previous state
        const prevState = { ...this.state }
        AsyncStorage.setItem('prevState', JSON.stringify(prevState))

        this.setState((state) => {
          let { register } = state
          const hasOperator = this.operators.includes(register.slice(-1)[0])

          if (hasOperator) {
            register = register.slice(0, -1)
          }

          return {
            register: [...register, operator],
            displayValue: this.evaluate(register, operator),
            operandInput: '',
            operatorInput: operator,
            waitingForOperand: true,
            memoryState: register.length ? 'C' : 'AC'
          }
        })
    }
  }

  handleMemoryClear = () => {
    const {
      register,
      operandInput,
      memoryState,
      waitingForOperand
    } = this.state

    const isFirstInput = register.length === 1 && !! operandInput

    if (memoryState === 'AC' || isFirstInput) {
      // All memory clear
      this.setState({
        ...initialState
      })
    } else {

      if (waitingForOperand) {
        this.setState({
          displayValue: '0',
          memoryState: 'AC',
        })
      } else {
        // Reset to previous state if waiting for operand
        AsyncStorage.getItem('prevState').then(value => {
          const prevState = JSON.parse(value)
          this.setState({
            ...prevState,
            displayValue: '0',
            memoryState: 'AC'
          })
        }).done()
      }
    }
  }

  evaluate = (register, operator) => {

    if (!register && !operator) {
      // Evaluate entire register, show result
      this.setState({
        ...initialState,
        displayValue: this.print(this.state.register.join(' ')),
      })
      return
    }

    const lowerPrecedenceOperators = ['+', '-']
    let interimInput = []

    if (lowerPrecedenceOperators.includes(operator)) {
      // Calculate sub expression
      return this.print(register.join(' '))

    } else {
      // Calculate interim expression to account for operator precedence
      for (let i = register.length - 1; i >= 0; i--) {
        if (lowerPrecedenceOperators.includes(register[i])) break
        interimInput.push(register[i])
      }
      return this.print(interimInput.reverse().join(' '))
    }
  }

  print = (value) => {
    const result = math.eval(value)
    return result > 999999999 ?
      // Format large numbers, e.g 1e+9 -> 1e9
      math.format(result, { precision: 6 }).replace(/\+/, '')
      :
      result.toString()
  }

  render() {
    return (
      <View style={Styles.container} >
        <ResultPane displayValue={this.state.displayValue} />
        <KeyPad
          handleInputEvaluation={this.evaluate}
          handleNumberInput={this.handleNumberInput}
          handleOperatorInput={this.handleOperatorInput}
          handleDecimalInput={this.handleDecimalInput}
          handleMemoryClear={this.handleMemoryClear}
          memoryState={this.state.memoryState}
          operatorInput={this.state.operatorInput}
        />
      </View>
    )
  }

  componentWillUnmount() {
    AsyncStorage.removeItem('prevState')
  }
}
