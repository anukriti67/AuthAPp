import React,{Component} from 'react'
import {View,Text} from 'react-native'
import firebase from 'firebase'
import {Header,CardSection} from './src/Components/Common'
import LoginForm from './src/Components/LoginForm'
import Spinner from './src/Components/Spinner'
class App extends Component
{
  state={loggedIn:null}
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCcYzuEyuMmtnyno9TC-8ZcySBnMHxoNZE",
      authDomain: "myauth-9c511.firebaseapp.com",
      databaseURL: "https://myauth-9c511.firebaseio.com",
      projectId: "myauth-9c511",
      storageBucket: "myauth-9c511.appspot.com",
      messagingSenderId: "857304555469"
    });

firebase.auth().onAuthStateChanged((user) => {
  if(user)
  {
    this.setState({loggedIn:true})

  }
  else
    {
      this.setState({loggedIn:false})
    }
})
}
onLogoutClicked(){
firebase.auth().signOut()
}
renderContent(){
  switch (this.state.loggedIn)
  {
    case true:return (<View style= {{height:50,width:150}}><Button text={"logout"} PressCallback ={this.onLogoutClicked.bind(this)} /></View>);
    case false:  return <LoginForm/>;
    default:return <Spinner size={"large"}/>;
  }
}


render(){
return(
<View >
<Header mHeaderText={'hello'}>
</Header>
{this.renderContent()}
</View>
);
}
}

export default App;
