import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const ProdutoCard = ({ produto, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.produto}>
      <Image source={{ uri: produto.thumbnail }} style={styles.imagem} />
      <Text style={styles.nomeProduto}>{produto.title}</Text>
      <Text style={styles.precoProduto}>R${produto.price}</Text>
    </TouchableOpacity>
  );
};

export default ProdutoCard;