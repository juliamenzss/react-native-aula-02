import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  nome: string;
};

function Usuario({ nome }: Props) {
  const [saudacao, setSaudacao] = useState(`Olá, ${nome}!`);
  const [original, setOriginal] = useState(true);

  const alternarSaudacao = () => {
    if (original) {
      setSaudacao(`Bem-vindo(a) de volta, ${nome}!`);
    } else {
      setSaudacao(`Olá, ${nome}!`);
    }
    setOriginal(!original);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.texto}>{saudacao}</Text>
      <Button title="Mudar Mensagem" onPress={alternarSaudacao} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default Usuario;