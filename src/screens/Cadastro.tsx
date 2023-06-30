import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenC() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenC')
    }
  
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>MyShopping</Text>
          <Text style={styles.subtitulo}>Monte aqui a sua lista</Text>
        </View>

        <View style={styles.mid}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.entrar} onPress={openScreen}>
            <Text style={styles.entrar_text}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.criar_recuperar}>
          <Text>Recuperar Senha</Text>
          <Text>Criar Minha Conta</Text>
          </View>

        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'f7f7f7',
        alignItems: 'center',
      },
      header: {
        alignItems: 'center',
        paddingTop: 150,
      },
      titulo: {
        fontSize: 32,
        fontWeight: 'normal',
        color: '#8481b4',
      },
      subtitulo: {
        color: '#8481b4',
        fontSize: 13,
      },
      mid: {
        alignItems: 'center',
        marginTop: 80,
        gap: 16,
      },
      descricao: {
        color: '#44434a',
      },
      input: {
        height: 46,
        width: 300,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#eaebed',
        color: '#B5B5B5',
      },
      entrar: {
        height: 46,
        marginTop: 14,
        width: 300,
        borderRadius: 4,
        backgroundColor: '#35b471',
        alignItems: 'center',
        justifyContent: 'center',
      },
      entrar_text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#f7f7f8',
      },
      criar_recuperar: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    });