import { StyleSheet, Button } from "react-native";


const CustomButton = () => {
    return (
            <Button title="appuie ici !" style={styles.bouton_1}></Button>
    );
};

const styles = StyleSheet.create({
    bouton_1: {
            backgroundColor: "blue",
            margin:10,
            borderRadius:15,
            overflow:"hidden"
    }
});



export default CustomButton;