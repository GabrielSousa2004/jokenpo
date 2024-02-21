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
    
    placar:{
        
        flex: 2,
    },
    txtPlacar:{
        width: '100%',
        textAlign: 'center',
        fontFamily:'Bold',
        fontSize:30,
       
    },boxPlacar:{
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

})