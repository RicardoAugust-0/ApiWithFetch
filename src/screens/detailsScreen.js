import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const DetailsScreen = ({ route }) => {
    const { produto } = route.params;

    return (
        <View style={styles.detalhesContainer}>
            <Image source={{ uri: produto.thumbnail }} style={styles.imagemDetalhe} />
            <Text style={styles.nomeProdutoDetalhe}>{produto.title}</Text>
            <Text style={styles.precoProdutoDetalhe}>R${produto.price}</Text>
            <Text style={styles.descricaoProdutoDetalhe}>{produto.description}</Text>
            <Text style={styles.categoriaProdutoDetalhe}>Categoria: {produto.category}</Text>
        </View>
    );
};

export default DetailsScreen;