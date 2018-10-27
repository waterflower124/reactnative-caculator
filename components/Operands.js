import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Styles from './styles'

const Operands = ({
  operatorInput,
  handleInput,
  handleEvaluation
}) => {

  return (
    <View style={Styles.groupTwo}>
      <TouchableHighlight
        onPress={() => handleInput('/')}
        style={[Styles.button, Styles.buttonOperand].concat(operatorInput === '/' ? [Styles.active] : [])}
        underlayColor='#e17509'>
        <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>÷</Text>
      </TouchableHighlight>



      <TouchableHighlight
        onPress={() => handleInput('-')}
        style={[Styles.button, Styles.buttonOperand].concat(operatorInput === '-' ? [Styles.active] : [])}
        underlayColor='#E17509'>
        <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>−</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleInput('+')}
        style={[Styles.button, Styles.buttonOperand].concat(operatorInput === '+' ? [Styles.active] : [])}
        underlayColor='#E17509'>
        <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>+</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => handleEvaluation()}
        style={[Styles.button, Styles.buttonOperand]}
        underlayColor='#B4B5B7'>
        <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>=</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Operands