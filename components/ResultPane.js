import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'

export default class ResultPane extends Component {

  constructor(props) {
    super(props)

    this.state = {
      adjustFontSize: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.displayValue !== nextProps.displayValue) {
      this.setState({
        adjustFontSize: nextProps.displayValue.length >= 7
      })
    }
  }

  formatValue = (value) => {
    // Do not format number if it has decimal point only e.g '0.'
    if (value.charAt(value.length - 1) === '.') {
      return value
    } else {
      // Parse as float if decimal value, e.g 0.25
      const result = value.indexOf('.') !== -1 ?
        parseFloat(value).toFixed(value.split('.')[1].length) : parseFloat(value)
      // Return formatted number e.g '1,000'
      return result > 999999999 ? value : result.toLocaleString('en')
    }
  }

  render() {
    return (
      <View style={Styles.resultPane}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit={this.state.adjustFontSize}
          style={Styles.resultText}
        >
          {this.formatValue(this.props.displayValue)}
        </Text>
      </View>
    )
  }
}
