import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeContainer: {
        flex:1,
        

      },
    
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    title:{
       
        flex: 2,
        justifyContent: 'center'
    },

    imgTitle:{
        width: '100%',
        
    },
    imgPlacar:{
        width: '50%',
        resizeMode: 'contain',
        alignSelf: 'center'
        
        
    },
    
    placar:{
        
        flex: 2,
    },
    txtPlacar:{
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:50,
       
    },
    txtReiniciar:{
        width: '70%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20,
        color: 'white'
       
    },

    txtJogadores:{
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:15,
       
    },
    
    boxPlacar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',  
        fontSize:90
    },


    
    sinais:{
        
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        flex: 3
    },

    imgSinais: {
        height: '70%',  
        width: '30%',
        resizeMode: 'contain'


    },

    imgResultado:{
        width: 300,
        height: 100,
        resizeMode: 'contain'
    },
    
    novaPartida:{
       flex: 1
    },

    botaoPartida:{
        justifyContent:'center',
        borderColor:'gray',
        backgroundColor: '#f3aa47',
        width: '70%',
        Height: '70%',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20
    },
    
    textbutton:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    sinaisTable:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
        flex: 2,
        padding: 20,
        gap: 20

    },
    imgSinalTable:{
        padding: 10, 
        margin: 5, 
        height: '100%', 
        width: '100%', 
        resizeMode: 'stretch',
    },

    botaoSinal:{
        alignItems: 'center', 
        height: '100%',
        width: '30%', 
        borderRadius: 5, 
        margin: 5, 
    },

    ModalFimJogo:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 1.0)',
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModalReiniciar:{
        width: '85%',
        backgroundColor: '#ff8c00',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#eca753',
        borderWidth: 7
        
    },
    ModalReiniciarJogo:{
        flex: 1,
        height: '50%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxReiniciar:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 50
    },
boxTextModal:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},

    textModal:{
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    textButtonReiniciar:{
        fontWeight: 'bold',
        color: '#eca753'
    },

    buttonReload:{
        justifyContent:'center',
        backgroundColor: 'white',
        width: '50%',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10
    },
    buttonReloadMenu:{
        justifyContent:'center',
        backgroundColor: '#eca753',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20
    },
    reiniciarPartida: {
    borderRadius: '50%',

}
})