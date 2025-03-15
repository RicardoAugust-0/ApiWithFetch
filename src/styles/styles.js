import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Estilos gerais
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    scrollView: {
        width: '100%',
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#00698f',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    produto: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    precoProduto: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    detalhesBotao: {
        backgroundColor: '#00698f',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    detalhesTexto: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    // Estilos da página de detalhes
    detalhesContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imagemDetalhe: {
        width: 250,
        height: 250,
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginBottom: 20,
    },
    nomeProdutoDetalhe: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    precoProdutoDetalhe: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
    },
    descricaoProdutoDetalhe: {
        fontSize: 16,
        color: '#666',
        textAlign: 'justify',
        marginBottom: 20,
    },
    categoriaProdutoDetalhe: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
});
export default styles;