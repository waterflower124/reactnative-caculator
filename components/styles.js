import { StyleSheet, PixelRatio } from 'react-native'
import Dimensions from 'Dimensions'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  resultPane: {
    flex: 0.27,
    marginTop: 30,
    backgroundColor: '#202020'
  },

  resultText: {
    fontFamily: 'System',
    fontWeight: '100',
    fontSize: 80,
    color: 'white',
    textAlign: 'right',
    flex: 1,
    width: Dimensions.get('window').width - 25,
    position: 'absolute',
    right: 15,
    bottom: 5,
  },

  /* Container for keypad */
  containerKeypad: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 0.73,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 0.75,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },

  groupOne: {
    flex: 0.75,
    flexDirection: 'column',
    backgroundColor: "teal",
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  groupTwo: {
    flex: 0.25,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderLeftWidth: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonKey: {
    flex: 0.333333,
    alignSelf: 'stretch'
  },

  buttonClear: {
    flex: 1,
    alignSelf: 'stretch'
  },

  buttonText: {
    fontSize: 34,
    color: 'black',
    fontFamily: 'System',
    fontWeight: '200',
  },

  buttonOperand: {
    alignSelf: 'stretch',
    flex: 0.25,
    backgroundColor: '#ff0040'
  },

  buttonTextOperand: {
    fontSize: 42,
    color: 'white'
  },

  buttonControl: {
    backgroundColor: '#ffffff'
  },

  buttonControlText: {
    fontSize: 24,
  },

  double: {
    flex: 0.66777,
    alignSelf: 'stretch',
    alignItems: 'center'
  },

  dot: {
    flex: 0.3333,
    alignSelf: 'stretch',
    alignItems: 'center'
  },

  active: {
    borderColor: 'black',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  //Misc
  linearGradient: {
    flex: 1,
  },

  bold: {
    fontWeight: 'normal'
  },
  alignLeft: {
    alignSelf: 'flex-start',
    paddingLeft: '19%'
  }

});

export default Styles
