import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import styles from './style';

import{useState} from 'react';
export default function Home() {

    const [jogador, setJogador] = useState(0)
    const [computador, setComputador] = useState(0)
    const [placarjogador, setPlacarJogador] = useState(0)
    const [placarComputador, setPlacarComputador] = useState(computador)
    
    
    function jogar (valor) {
        setJogador(valor)
        let maquina = Math.floor (Math.random()*3)+1
    setComputador(maquina)


    if(valor ==1 && maquina ==2){
    
        setPlacarComputador(placarComputador +1)
    } else if (valor == 2 && maquina == 1) {
        setPlacarJogador(placarjogador +1)
    } else if (valor == 1 && maquina == 3) {
        setPlacarJogador(placarjogador +1)
        
    }
     else if (valor == 3 && maquina == 1) {
        setPlacarComputador(placarComputador +1)
        
    }
    else if (valor ==2 && maquina ==3){
        setPlacarComputador(placarComputador +1)

    } 
    else if (valor ==3 && maquina ==2){
        setPlacarJogador(placarjogador +1)

    } 
    }

    
    
    function exibirImagem (valor){
    if(valor==1){
        return (<Image source={require("../../../assets/Img/pedra.png")} style={styles.imgSinais}/>)
    } else if(valor==2){
    return (<Image source={require("../../../assets/Img/papel.png")} style={styles.imgSinais}/>)
    } else if(valor==3){
    return (<Image source={require("../../../assets/Img/tesoura.png")} style={styles.imgSinais}/>)
    } else {
    return (<Image source={require("../../../assets/Img/caixa.png")} style={styles.imgSinais}/>)
    }
    }

  return (
    <SafeAreaView  style={styles.safeContainer}>
      
        <View style={styles.container}>

        <View style={styles.title}>
          <Image
             source={require('../../../assets/Img/titulo.png')}
             style={styles.imgTitle}
          />
        </View>
        <View style={styles.placar}>
          
          <Text style={styles.txtPlacar}>placar</Text>
          <View style={styles.boxPlacar}>
          <Text style={styles.txtPlacar}>{placarjogador}</Text>
          <Text style={styles.txtPlacar}>{placarComputador}</Text>
          </View>
        </View>
        <View style={styles.sinais}>
        {exibirImagem(jogador)}
        <Image
             source={require('../../../assets/Img/vs.png')}
             style={styles.imgSinais}
          />
       {exibirImagem(computador)}
          
        </View>
        <View style={styles.novaPartida}>
          <Pressable style={styles.botaoPartida}>
            
          <Text style={styles.textbutton}>Nova Partida</Text>
          </Pressable>
        </View>

        <View style={styles.sinaisTable}>
          <Pressable  style={styles.botaoSinal} onPress={()=>jogar(1)}><Image
             source={require('../../../assets/Img/pedra.png')}
             style={styles.imgSinalTable}/></Pressable>
          <Pressable style={styles.botaoSinal} onPress={()=>jogar(2)}><Image
             source={require('../../../assets/Img/papel.png')}
             style={styles.imgSinalTable}/></Pressable>
          <Pressable style={styles.botaoSinal} onPress={()=>jogar(3)}><Image
             source={require('../../../assets/Img/tesoura.png')}
             style={styles.imgSinalTable}/></Pressable>
          
        </View>
        
        </View>
      
    </SafeAreaView>
  );
}
