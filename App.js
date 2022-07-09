import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert= ()=>{
    alert("Padre de la computación")
  }
  render(){
    return(
      <Button color={this.props.color} title="Charles Babbagage" onPress={this.displayAlert}/>
    );
  }
}

class AnyColorButton2 extends Component {
  displayAlert= ()=>{
    alert("Padre de la nación")
  }
  render(){
    return(
      <Button color={this.props.color} title="Mahatma Gandhi" onPress={this.displayAlert}/>
    );
  }
}

class AnyColorButton3 extends Component {
  displayAlert= ()=>{
    alert("Primer presidente negro de Sudáfrica")
  }
  render(){
    return(
      <Button color={this.props.color} title="Nelson Mandela" onPress={this.displayAlert}/>
    );
  }
}

class AnyColorButton4 extends Component {
  displayAlert= ()=>{
    alert("Santa Teresa de Calcuta")
  }
  render(){
    return(
      <Button color={this.props.color} title="Madre Teresa" onPress={this.displayAlert}/>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton color="red"/>

        <View style={{marginTop: 100}}>
        <AnyColorButton2 color="green"/>
        </View>

        <View style={{marginTop: 100}}>
        <AnyColorButton3 color="orange"/>
        </View>
        
        <View style={{marginTop: 100}}>
        <AnyColorButton4 color="pink"/>
        </View>

      </View>
    );
  }
}
