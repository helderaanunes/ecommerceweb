import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormSelect,
} from '@coreui/react';
import api from '../../services/axiosConfig';
import { useLocation } from 'react-router-dom';

const ProdutoAdd = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [categoriaProduto, setCategoriaProduto] = useState(''); // Categoria do Produto
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const produtoId = searchParams.get('id');

  // Buscar categorias para o select
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/categoria');
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    fetchCategorias();
  }, []);

  // Carregar dados do produto caso esteja editando
  useEffect(() => {
    if (produtoId) {
      const fetchProduto = async () => {
        try {
          const response = await api.get(`/produto/${produtoId}`);
          const { nome, descricao, preco, categoria, imagemUrl } = response.data;
          setNome(nome);
          setDescricao(descricao);
          setPreco(preco);
          setCategoriaProduto(categoria ? categoria.id : '');
          setImagem(imagemUrl || null);
        } catch (error) {
          console.error("Erro ao carregar produto:", error);
        }
      };
      fetchProduto();
    }
  }, [produtoId]);

  // Função de salvar produto
  const handleSave = async (e) => {
    e.preventDefault();

    const produtoData = new FormData();
    produtoData.append('nome', nome);
    produtoData.append('descricao', descricao);
    produtoData.append('preco', preco);
    produtoData.append('categoria', categoriaProduto);
    if (imagem) {
      produtoData.append('imagem', imagem);
    }

    try {
      if (produtoId) {
        // Editar produto existente
        await api.put(`/produto/${produtoId}`, produtoData);
      } else {
        // Adicionar novo produto
        await api.post('/produto', produtoData);
      }
      setModalVisible(true);
      setNome('');
      setDescricao('');
      setPreco('');
      setCategoriaProduto('');
      setImagem(null);
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
      alert('Erro ao salvar o produto');
    }
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <h4>{produtoId ? 'Editar Produto' : 'Adicionar Produto'}</h4>
          <CForm onSubmit={handleSave}>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeProduto">Nome do Produto</CFormLabel>
              <CFormInput
                type="text"
                id="nomeProduto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="descricaoProduto">Descrição do Produto</CFormLabel>
              <CFormInput
                type="text"
                id="descricaoProduto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="precoProduto">Preço</CFormLabel>
              <CFormInput
                type="number"
                id="precoProduto"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="imagemProduto">Imagem do Produto</CFormLabel>
              <CFormInput
                type="file"
                id="imagemProduto"
                accept="image/*"
                onChange={(e) => setImagem(e.target.files[0])}
              />
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="categoriaProduto">Categoria</CFormLabel>
              <CFormSelect
                id="categoriaProduto"
                value={categoriaProduto}
                onChange={(e) => setCategoriaProduto(e.target.value)}
                required
              >
                <option value="">Selecione uma Categoria</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nome}
                  </option>
                ))}
              </CFormSelect>
            </div>

            <CButton type="submit" color="primary">Salvar</CButton>
          </CForm>
        </CCardBody>
      </CCard>

      {/* Modal de Confirmação */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>{produtoId ? 'Produto Editado' : 'Produto Adicionado'}</CModalTitle>
        </CModalHeader>
        <CModalBody>{produtoId ? 'Produto editado com sucesso!' : 'Produto adicionado com sucesso!'}</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ProdutoAdd;
