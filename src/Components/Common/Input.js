import React from 'react'
import { Text,View ,TextInput} from 'react-native'

const Input = ({p_Label,p_value,p_onChangeText,p_placeholder,p_secureTextEntry}) =>{
  const{LabelStyle,InputStyle,WrapperStyle}=styles
  return(
    <View style={WrapperStyle}>
      <Text style={LabelStyle}>
      {p_Label}
      </Text>
      <TextInput autoCorrect ={false} onChangeText = {p_onChangeText}
      value = {p_value}
      style = {InputStyle}
      secureTextEntry={p_secureTextEntry}
      placeholder = {p_placeholder}/>
    </View>
  )

}

const styles = {
  LabelStyle:{
  fontSize:18,
  lineHeight:18,
  flex:1,
  paddingLeft:5,
  paddingRight:5
  },
  InputStyle:{
  flex:2,
  backgroundColor:'white',
  paddingRight:5,
  paddingLeft:5,
  height:20,
  },
  WrapperStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'

  }





}


export {Input};
