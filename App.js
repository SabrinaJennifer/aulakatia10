import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';




export default function App() {
  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf, setUF] = useState("")
  
  return(
    <View style={StyleSheet.container}>
  <view style={styles.topbar}>
      <Text style={styles.titulo}>
        Buscar Cep
      </Text>
      </view>
      <View style={styles.containerCep}>
      <TextInput
      style={{borderColor:"000000", borderWidth:2,}}
      width:150, fontSize:18, marginTop: 40, MarginEnd: 20, borderRadius: 10
      />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCep:{
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20

  },
})

const styles = StyleSheet({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topbar:{
    flexDirection: "row",
    height:70,
    backgroundColor: '#219ebc',
  },
  titulo:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: "bold",
    alignSelf:"center",
    margin:20
  }
})
