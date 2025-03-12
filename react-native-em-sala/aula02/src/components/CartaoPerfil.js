import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'


const CartaoPerfil = () => {

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false)


  return (
    <View style={styles.container}>

    {/* Imagem de perfil */}

    <Image
        source={{ uri: 'https://github.com/ticianooliveira.png' }}
        style={styles.imagemPerfil}
    />
    
    {/* Nome e ocupão*/}

    <Text style={styles.nome}>Ticiano Oliveira</Text>
    <Text style={styles.ocupacao}>Dentista e Entusiasta em Tecnologia</Text>

    {/* Botões de ação */}

    <TouchableOpacity
        style={styles.botao}
        onPress={() => setDetalhesVisiveis(!detalhesVisiveis)}
    >       
        <Text style={styles.textoBotao}>
            {detalhesVisiveis ? 'Ver Menos': 'Ver Mais'}
        </Text>
    </TouchableOpacity>  

    {/* Área de detalhes visíveis apenas quando os detalhes visíveis for true*/}  

        {detalhesVisiveis &&
        (<View style={styles.detalhes}>
          <Text style={styles.textoDetalhe}>Localização: João Pessoa</Text>
          <Text style={styles.textoDetalhe}>Email: ticianoodonto@gmail.com</Text>
          <Text style={styles.textoDetalhe}>Hobbbies: Praticar esportes e assistir Filmes</Text>
        </View>
        )}

            
    </View>
  )
}


const styles = StyleSheet.create({
    // Container principal do cartão
    container: { 
      width: 300, // Largura do cartão
      padding: 20, // Espaçamento interno
      borderRadius: 10, // Bordas arredondadas
      backgroundColor: '#fff', // Fundo branco
      alignItems: 'center', // Centraliza os itens
      shadowColor: '#000', // Cor da sombra
      shadowOffset: { width: 0, height: 2 }, // Direção da sombra
      shadowOpacity: 0.1, // Transparência da sombra
      shadowRadius: 4, // Espalhamento da sombra
      elevation: 5, // Sombra no Android
    },
  
    // Estilo da imagem de perfil
    imagemPerfil: {
      width: 100, // Largura da imagem
      height: 100, // Altura da imagem
      borderRadius: 50, // Deixa a imagem redonda
      marginBottom: 10, // Espaço abaixo da imagem
    },
  
    // Nome do usuário
    nome: {
      fontSize: 22, // Tamanho da fonte
      fontWeight: 'bold', // Negrito
      color: '#333', // Cor escura
    },
  
    // Ocupação do usuário
    ocupacao: {
      fontSize: 16,
      color: '#777',
      marginBottom: 10,
    },
  
    // Estilo do botão
    botao: {
      backgroundColor: '#0077b5', // Azul do LinkedIn
      padding: 10, // Espaçamento interno
      borderRadius: 5, // Bordas arredondadas
      alignItems: 'center', // Centraliza o texto
      marginVertical: 10, // Espaço vertical
    },
  
    // Texto do botão
    textoBotao: {
      color: '#fff', // Texto branco
      fontSize: 16, // Tamanho do texto
      fontWeight: 'bold', // Negrito
    },
  
    // Estilo da área dos detalhes
    detalhes: {
      marginTop: 10, // Espaço acima
      paddingTop: 10, // Espaço interno superior
      borderTopWidth: 1, // Linha separadora
      borderColor: '#ddd', // Cor da linha separadora
      width: '100%', // Ocupa a largura total do cartão
    },
  
    // Texto dentro da área de detalhes
    textoDetalhe: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
      textAlign: 'center',
    },
  })

export default CartaoPerfil