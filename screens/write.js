import * as React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class Write extends React.Component {
  constructor(){
    super();
    this.state={title:"", author:"", body:""}
  }

  render() {
    return (
      <SafeAreaProvider style={{backgroundColor:'#ffc0c2'}}>
        <Header
          centerComponent={{
            text: "WRITER'S BLOCK",
            style: {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'monospace',
              padding:10
            },
          }}
          backgroundColor="#0e3150"
        />
        <TextInput style={st.title} placeholder="Title"></TextInput>
        <TextInput style={st.author} placeholder="Author"></TextInput>
        <TextInput style={st.body} placeholder="Body" multiline></TextInput>
        <TouchableOpacity style={st.button}><Text style={st.buttontext}>SUBMIT</Text></TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}

const st = StyleSheet.create({
  title:{
    borderWidth:2,
    marginTop:25,
    textAlign:'center',
    fontFamily:'monospace'
  },
  author:{
    borderWidth:2,
    marginTop:15,
    textAlign:'center',
    fontFamily:'monospace'
  },
  body:{
    borderWidth:2,
    marginTop:15,
    height:400,
    borderRadius:0,
    textAlign:'center',
    fontFamily:'monospace'
  },
  button:{
    backgroundColor:'#00425e',
    padding:10,
    marginTop:10
  },
  buttontext:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontFamily:'monospace'
  }
})