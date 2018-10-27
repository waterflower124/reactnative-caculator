
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import Operands from './Operands'
import Styles from './styles'

const numbers = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3']]

export default class KeyPad extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={Styles.containerKeypad}>
        <View style={Styles.groupOne}>
          <View style={Styles.row}>

            <TouchableHighlight
              onPress={() => this.props.handleMemoryClear()}
              style={[Styles.button, Styles.buttonClear, Styles.buttonControl]}
              underlayColor='#B4B5B7'>
              <Text style={[Styles.buttonText, Styles.buttonControlText]}>
                Clear
              </Text>
            </TouchableHighlight>

            
          </View>

          {numbers.map((row, i) => {
            return (
              <View
                style={Styles.row}
                key={`row_${i}`}>
                <TouchableHighlight
                  onPress={() => this.props.handleNumberInput(row[0])}
                  style={[Styles.button, Styles.buttonKey]}
                  underlayColor='#B4B5B7'>
                  <Text style={Styles.buttonText}>{row[0]}</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.handleNumberInput(row[1])}
                  style={[Styles.button, Styles.buttonKey]}
                  underlayColor='#B4B5B7'>
                  <Text style={Styles.buttonText}>{row[1]}</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.handleNumberInput(row[2])}
                  style={[Styles.button, Styles.buttonKey]}
                  underlayColor='#B4B5B7'>
                  <Text style={Styles.buttonText}>{row[2]}</Text>
                </TouchableHighlight>
              </View>
            )
          })}

        </View>

        <Operands
          handleEvaluation={this.props.handleInputEvaluation}
          handleInput={this.props.handleOperatorInput}
          operatorInput={this.props.operatorInput}
        />

      </View>
    )
  }
}
