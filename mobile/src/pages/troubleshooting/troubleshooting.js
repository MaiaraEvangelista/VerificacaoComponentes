import React, { Component } from "react";
import { View, Text, StyleSheet,ImageBackground, TouchableOpacity, Image} from "react-native";
import RNFullBatteryStatus from 'react-native-full-battery-status';

export default class Trouble extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            tempBat : 0,
            tempCPU : 0,
        }
    }

    // INÍCIO PARTE TESTE
    mostrarBateria = () =>{
        getTemperature().then(valor =>{
            this.setState({tempBat: valor})
            this.setState({tempCPU:valor})
        })
        this.setState({tempBat: getTemperature()})
        this.setState({tempCPU : getTemperatureResult()})

        getTemperatureResult().then(dado =>{
            this.setState({tempBat: dado})
            this.setState({tempCPU: dado})
        })
        this.setState({tempBat: getTemperatureResult()})
        this.setState({tempCPU: getTemperatureResult()})
    }

    componentDidMount = () =>{
        this.setState({tempBat: valor});
        this.setState({tempCPU : valor});
        this.setState({tempBat: getTemperature()});
       
        this.setState({tempBat: dado});
        this.setState({tempCPU : dado});
        this.setState({tempBat: getTemperatureResult()});
    }
    // FINAL PARTE TESTE

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.banner}>
                        <ImageBackground resizeMode='cover' style={styles.bannerImg} source={require('../../../assets/bannerImg.png')}>
                            <Text style={styles.txtBanner}>Verifique se o seu smartphone está em boas condições</Text>
                        </ImageBackground>
                </View>

                <View style={styles.btnCtnVerif}>
                    <TouchableOpacity style={styles.btnVerif}>
                        <Text style={styles.btnTxt}>Verificação</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.InfsCtn}>
                    <View style={styles.meioInfs}>
                        <View style={styles.infs1}>
                            <View style={styles.numInfs}>
                                <Text style={styles.h3}>{this.state.tempBat} °C - temperatura da bateria</Text>
                            </View>

                            <View style={styles.corInfs}>
                                <View style={styles.temp}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infs1}>
                            <View style={styles.numInfs}>
                                <Text style={styles.h3}>{this.state.tempCPU} °C - temperatura da CPU</Text>
                            </View>

                            <View style={styles.corInfs}>
                                <View style={styles.temp}>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </View>

                <View style={styles.txtCtn}>
                    <View style={styles.meioTxt}>
                        <View style={styles.txt}>
                            <Text style={styles.txtEdit}>Veja todas as nossas soluções para um futuro ao seu smartphone !</Text>
                        </View>
                        <View style={styles.btnCtnTxt}>
                            <TouchableOpacity style={styles.btnCtn}>
                                <Text style={styles.btn}>Soluções</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imgTxtCtn}>
                        <View style={styles.imgTxt}>
                            <Image style={styles.ideia} source={require('../../../assets/ideia.svg')}/>
                        </View> 
                    </View>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    banner: {
        height: '25%',
        width: '100%',
        backgroundColor: 'black',
    },

    bannerImg: {
        flex: 1,
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        opacity: '80%',
    },

    txtBanner: {
        width: '60%',
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        
        position: 'absolute',
        zIndex: 1,
    },

    btnCtnVerif: {
        width: '100%',
        height: '15%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center',
    },

    btnVerif: {
        width: '25%',
        height:'35%',

        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6,

        justifyContent: 'center',
        alignItems: 'center',
    },

    btnTxt: {
        fontSize: '80%',
    },

    InfsCtn: {
        width: '100%',
        height: '20%',
        backgroundColor: '#00873B',

        justifyContent: 'center',

        borderRadius: 13,
    },

    meioInfs: {
        width: '100%',
        height: '50%',

        // backgroundColor: 'red',

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    infs1: {
        width: '45%',
        height: '100%',
        // backgroundColor: 'orange',
    },

    numInfs: {
        width: '100%',
        height: '50%',
        // backgroundColor: 'green',

        justifyContent: 'center',
        alignItems: 'center',
    },
    
    corInfs: {
        width: '100%',
        height: '50%',
        // backgroundColor: 'pink',

        justifyContent: 'center',
        alignItems: 'center',
    },

    h3: {
        fontSize: '80%',
        color: 'white',
    },

    temp: {
        width: '85%',
        height: '27%',
        backgroundColor: 'white',

        borderRadius: 25,
    },

    txtCtn: {
        height: '40%',
        width: '100%',
        // backgroundColor: 'red',

        flexDirection: 'row',
    },

    btnCtn: {
        height: '40%',
        width: '50%',
        borderWidth: 3,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: '5%',
    },

    btn: {
        fontFamily: 'Arial',
        fontSize: '90%',
    },

    meioTxt: {
        height: '100%',
        width: '60%',
        // backgroundColor: 'orange',

        justifyContent: 'flex-end',
        flexDirection: 'column',
    },

    btnCtnTxt: {
        height: '30%',
        width: '100%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center',

    },

    txt: {
        height: '35%',
        width: '100%',
        // backgroundColor: 'blue',

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    txtEdit: {
        fontSize: '85%',
        fontFamily: 'Arial',
        margin: '5%',
    },

    imgTxtCtn: {
        width: '40%',
        height: '100%',
        // backgroundColor: 'pink',

        justifyContent: 'flex-end',
    },

    imgTxt: {
        width: '100%',
        height: '60%',
        backgroundColor: '#008763',
        borderRadius: 10,
        marginBottom: '10%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    ideia: {
        width: '90%',
        height: '90%',
    },
})