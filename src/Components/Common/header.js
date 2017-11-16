import React from 'react';
import { Text, View } from 'react-native';

const Header = (propFromParent) => {
  const { textStyles, viewStyles } = styling;


  return (<View style={viewStyles}>
  <Text style={textStyles} > {propFromParent.mHeaderText}</Text>
  </View>);
};


const styling = {

  textStyles: {
    fontSize: 20
  },
  viewStyles: {
    backgroundColor: '#F6F6F5',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  }
};
export {Header};
