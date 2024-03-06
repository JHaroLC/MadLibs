import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        flex: 2,
        backgroundColor: 'yellow',
        width: '100%',
        justifyContent: 'center',
        borderTopWidth: 5,  
        borderBottomWidth: 5,
    },
    heading: {
        width: '100%',
        fontSize: 32,
        textAlign:'center',
        textShadowColor: 'white',
        textShadowRadius: 8,
    },
    description: {
        flex: 6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '80%',
        fontSize: 28,
        textAlign: 'center',
        textShadowColor: 'white',
        textShadowRadius: 6,
        padding: 20,
    },
    entries: {
        flex: 3.5,
        width: '80%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1.2,
        width: '100%',
        backgroundColor: 'lime',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 15,
        minHeight: '5%',
        
    },
    submit: {
        flex: 2,
        width: '90%',
        backgroundColor: 'lime',
        borderWidth: 2,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    next: {
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: 'white',
        textShadowRadius: 8,
    },
    reset: {
        flex: 2,
        width: '70%',
        backgroundColor: 'lime',
        borderWidth: 2,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clear: {
        fontSize: 24,
        width: '60%',
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: 'white',
        textShadowRadius: 8,
    },
});
export default Styles;