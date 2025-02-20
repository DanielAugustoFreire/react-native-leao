import React, { Component } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component';


const imagemLeao = require('./assets/leao.png');
const receita = require('./assets/receitabeta.png');

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class Sorte extends Component{
    
    constructor(props){
        super(props);
        this.state = { salario: 0 };
        this.inputSalario = React.createRef();
        this.state = {
          isPortrait: true,
          tableHead: ['Renda Bruta', 'Alíquota', 'Parcela a Deduzir'],
          tableData: [
            ['0,00 - 1400,00', '0%', '0,00'],
            ['1400,01 - 2100,00', '10%', '100,00'],
            ['2100,01 - 2800,00', '15%', '270,00'],
            ['2800,01 - 3600,00', '25%', '500,00'],
            ['3600,01 ou mais', '30%', '700,00']
          ]
        };
        
    }

    calcularImposto(){
      const regex = /^[0-9]*\.?[0-9]*$/; 
      var ValorSalario = this.inputSalario.current.value;

      if (!regex.test(ValorSalario)) {
        this.setState({ salario: 'Apenas Numeros!!!' });
      } else {
        let saida = 0;
        if(ValorSalario >= 3600.01){
          saida = (ValorSalario * 0.3) + 700;
        }else if (ValorSalario < 3600 && ValorSalario >= 2800.01){
          saida = (ValorSalario * 0.25) + 500;
        }else if(ValorSalario < 2800 && ValorSalario >= 2100.01){
          saida = (ValorSalario * 0.15) + 270;
        }else if(ValorSalario < 2100 && ValorSalario >= 1400.01){
          saida = (ValorSalario * 0.10) + 100;
        }

        this.setState({ salario: saida });
      }
    }

    render(){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={receita}
              style={styles.image_header}
              resizeMode='contain'
            />
          </View>
    
          <View>

            <Table style={styles.table_style} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.texty}/>
              <Rows data={this.state.tableData} textStyle={styles.texty}/>
            </Table>

            <View style={{ top: "5%" }}>
              <Text style={styles.text}>Informe o Valor do Salario BRUTO</Text>
              <TextInput style={styles.input} ref={this.inputSalario}></TextInput>
              <Button style={styles.botao} title='Calcular' onPress={() => this.calcularImposto()}></Button>
            </View>

          </View>
          <Text style={styles.text}>{this.state.salario}</Text>

    
          <ImageBackground 
            source={imagemLeao}
            style={styles.image}
            resizeMode='contain'
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
    height: windowHeight * 0.5,
    width: windowWidth * 0.9,
    opacity: 0.5,
  },
  image_header: {
    height: windowHeight * 0.09,
    width: windowWidth * 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  head: { 
    height: windowHeight * 0.05, 
    backgroundColor: '#f1f8ff',
    width: windowWidth * 0.8,
  },
  texty: {
    fontSize: 10,
  },
  table_style: {
    top: '10px'
  },
});