import { Component } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const imagemLeao = require('./assets/leao.png');
const receita = require('./assets/receitabeta.png');

export default class Sorte extends Component{
    
    constructor(props){
        super(props);
        this.state = { salario: 0 };
    }

    calcularImposto(){
      
    }
  

    render(){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={receita}
              style={styles.image_header}
            />
          </View> 
    
          <View>
            <Text style={styles.text}>Informe o Valor do Salario BRUTO {this.state.salario}</Text>
            <TextInput style={styles.input}></TextInput>
            <Button style={styles.botao} title='Calcular' onPress={() => this.calcularImposto()}></Button>
          </View>
    
          <ImageBackground 
            source={imagemLeao}
            style={styles.image}
          >
          </ImageBackground>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 5,
    padding: 10,
    borderColor: "rgb(0, 52, 115)",
    borderRadius: "10px"
  },
  botao: {  
    borderWidth: 5,
    backgroundColor: 'red',
    color: "rgb(0,52,115)"
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    height: 500,
    width: 500,
    opacity: 0.5,
  },
  image_header: {
    height: 100, // Definir um tamanho fixo para a imagem do cabeçalho
    width: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Adicionado para criar espaçamento entre a imagem e o texto
  },
});