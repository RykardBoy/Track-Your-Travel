import { Text, StyleSheet } from "react-native";
import { View } from "react-native";

const BoxContainer = () => {
    return(
    
        <View>
            <Text style={styles.titre_carre}>Les carrés colorés !</Text>
            <View style={styles.view_flex}>
                <Text style={[styles.box, {backgroundColor:"red"}]}>ROUGE</Text>
                <Text style={[styles.box,{backgroundColor:"blue"}]}>BLEU</Text>
                <Text style={[styles.box, {backgroundColor:"green"}]}>VERT</Text>
            </View>
        </View>    
        
    )
}

const styles = StyleSheet.create({

    titre_carre:{
        textAlign:"center",
        fontSize:24
    },
    view_flex:{
        flexDirection:"row",
        justifyContent:"space-around"

    },
    box:{
        width:100,
        height:100,
        borderRadius:20,
        backgroundColor:"red",
        alignContent:"center",
        textAlign:"center"
    }

})

export default BoxContainer;