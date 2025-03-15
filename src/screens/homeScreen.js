import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';
import ProdutoCard from '../components/ProductCard';
import DetailsScreen from './detailsScreen';

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const endpoint = 'https://dummyjson.com/products';
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setProdutos(json.products);
      })
      .catch(() => {
        Alert.alert('Error', 'Não foi possível encontrar os produtos!');
      });
  }, []);

  const handleProdutoEscolhido = (produto) => {
    navigation.navigate('Details', { produto });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titulo}>Loja de Produtos</Text>
        <Text style={styles.subtitulo}>Escolha um produto:</Text>
        <View style={styles.produtosContainer}>
          {produtos.map((produto) => (
            <TouchableOpacity key={produto.id} onPress={() => handleProdutoEscolhido(produto)}>
              <ProdutoCard produto={produto} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}