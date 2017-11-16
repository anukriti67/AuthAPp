import {View, ActivityIndicator} from 'react-native'
import React from 'react'

const Spinner =({size})=>{
  return (
<View style={styles.SpinnerWrapper}>
  <ActivityIndicator size={ size||'large' }/>
</View>)
}

const styles = {
  'SpinnerWrapper':{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 }
}

export default Spinner;
