import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const InicioSeccion: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('soltero');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [colorFavorito, setColorFavorito] = useState('#000000');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleRegistro = () => {
    
    setRegistroExitoso(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/128/9133/9133681.png'}} />

      <Text style={styles.bienvenida}>¡Estamos emocionados de verte!{'\n'}Ingresa para explorar y disfrutar de todas las funciones.</Text>

      <View style={styles.inicio}>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Usuario"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>

        {registroExitoso && (
          <Text style={styles.mensaje}>¡Cargando Sesión!</Text>
        )}
      </View>
      <Text style={styles.final}>¿Nuevo por aquí?{'\n'}¡Regístrate para explorar todas las funciones y hacer de tu experiencia algo único! ¡Bienvenido a FarmaSwift!</Text>
      <TouchableOpacity style={styles.buttonReg} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#711DB0',
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
  inicio: {
    justifyContent: 'center',
    borderColor: 'aqua',
    padding: 20,
    top: '3%',
  },
  entrada: {
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonReg: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    height: 40,
    width: 300,
    marginVertical: '9%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  mensaje: {
    color: 'green',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    top: '2%',
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    top: '4%',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  final: {
    fontSize: 20,
    fontWeight: 'bold',
    top: '3%',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginHorizontal: 20,
  }
});