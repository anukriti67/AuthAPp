import React,{Component} from 'react'
import {TextInput,Text} from 'react-native'
import {Button,Card,CardSection,Input} from './Common'
import  * as firebase from 'firebase'
import Spinner from './Spinner'
class LoginForm extends Component
{

renderButtonOrSpinner(){
  if(this.state.loading){
    return <Spinner/>
  }
  else
  return( <Button text='log in' PressCallback = {this.onButtonPress.bind(this)}/>)
  }
onLoginSuccess(){
  this.setState({
    email:'',
    password:'',
    error:'Login Successful',
    loading:false
  })
}
onLoginFailure(){
  this.setState({
    error:'Authentication Failed',
    loading:false
  })
}
onButtonPress(){
  this.setState({loading:true})
  const {email,password} = this.state;
 firebase.auth().signInWithEmailAndPassword(email,password)
 .then(this.onLoginSuccess.bind(this))
 .catch(()=>{
   firebase.auth().createUserWithEmailAndPassword(email,password)
   .catch(this.onLoginFailure.bind(this))

   }
   )
 }

state = {email:'',password:'',error:'',loading:false}
render(){
  return (
    <Card>
      <CardSection>
        <Input
        p_placeholder="someone@gmail.com"
        p_Label="Email"
        p_value ={this.state.email}
        p_onChangeText = { (text) => this.setState({email:text}) }/>
      </CardSection>
      <CardSection>
      <Input
      p_secureTextEntry
      p_placeholder ="password"
      p_Label="Password"
      p_value={this.state.password}
      p_onChangeText={ (text) => this.setState({password:text}) } />
      </CardSection>
      <CardSection>
      {this.renderButtonOrSpinner()}
      </CardSection>
      <CardSection>
      <Text>
      {this.state.error}
      </Text>
      </CardSection>
    </Card>
  )
}
}

export default LoginForm;
