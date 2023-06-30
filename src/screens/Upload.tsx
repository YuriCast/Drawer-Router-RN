import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenC', {name: "Esse conteúdo veio da tela B"})
    }
  
    return (
        <View style={styles.container}>
        <View style={styles.container_upload}>
          <Text style={styles.upload_text}>Clique para adicionar ou para trocar a foto</Text>
        </View>
        <TouchableOpacity style={styles.btn_upload} onPress={openScreen}>
          <Text style={styles.btn_text}>
            Fazer Upload
          </Text>
        </TouchableOpacity>
        <View style={styles.container_bytes}>
          <Text style={styles.bytes_percent}>
            0%
          </Text>
          <Text style={styles.bytes_text}>
            0 de 100 bytes transferidos
          </Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      container_upload: {
        width: 260,
        height: 260,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#eaebed',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 16,
        marginTop: 40,
      },
      upload_text: {
        color: 'grey'
      },
      btn_upload: {
        height: 46,
        marginTop: 14,
        width: 260,
        borderRadius: 4,
        backgroundColor: '#35b471',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn_text: {
        color: 'white',
      },
        container_bytes: {
        marginTop: 100,
        textAlign: 'center',
        gap: 6,
      },
        bytes_percent: {
        fontSize: 32,
        color: 'grey',
      },
        bytes_text: {
        color: 'grey',
    
      },
    });