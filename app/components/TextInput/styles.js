import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  $buttonBAckgroundColorBase: '$white',
  $buttonBAckgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonContainer: {
    height: INPUT_HIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue'
  },
  input: {
    height: INPUT_HIGHT,
    flex:1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  border: {
    height: INPUT_HIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  },
}); 