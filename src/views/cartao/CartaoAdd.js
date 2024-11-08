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
import api from '../../services/axiosConfig.js';
import { useLocation } from 'react-router-dom';

const CartaoAdd = () => {
  const [numeroCartao, setnumeroCartao] = useState('');
  const [dataValidade, setdataValidade] = useState([]);  // Alterado de categorias para cartoes
  const [cvv, setcvv] = useState(''); // Alterado de categoriaPai para cartaoPai
  const [nomeCliente, setnomeCliente] = useState(''); // Alterado de categoriaPai para cartaoPai
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const cartaoId = searchParams.get('id');  // Alterado de categoriaId para cartaoId

  useEffect(() => {
    // Busca todos os cartões para popular o select
    const fetchCartoes = async () => {
      try {
        const response = await api.get('/cartao');  // Alterado de /categoria para /cartao
        setCartoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar cartões:", error);
      }
    };
    fetchCartoes();
  }, []);


  useEffect(() => {
    if (cartaoId) {
      const fetchCartao = async () => {
        try {
          const response = await api.get(`/cartao/${cartaoId}`);  // Alterado de /categoria para /cartao
          const { nome, cartao } = response.data;
          setNome(nome);
          setCartaoPai(cartao ? cartao.id : '');
        } catch (error) {
          console.error("Erro ao carregar cartão:", error);
        }
      };
      fetchCartao();
    }
  }, [cartaoId]);


  const handleSave = async (e) => {
    e.preventDefault();

    const cartaoData = { nome, cartao: cartaoPai ? { id: nome } : null };

    try {
      if (cartaoId) {
        // Editar cartão existente
        await api.put(`/cartao/${cartaoId}`, cartaoData);  // Alterado de /categoria para /cartao
      } else {
        // Adicionar novo cartão
        await api.post('/cartao', cartaoData);  // Alterado de /categoria para /cartao
      }
      setModalVisible(true);
      setNome('');
      setCartaoPai('');
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      alert('Erro ao salvar o cartão');
    }
  };


  return (
    <>
      <CCard>
        <CCardBody>
          <h4>Adicionar Cartão</h4>  {/* Alterado de "Adicionar Categoria" para "Adicionar Cartão" */}
          <CForm onSubmit={handleSave}>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeCartao">Numero do cartão</CFormLabel>  {/* Alterado de nomeCategoria para nomeCartao */}
              <CFormInput
                type="text"
                id="nomeCartao"
                value={nomeCliente}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeCartao">Data de Validade</CFormLabel>  {/* Alterado de nomeCategoria para nomeCartao */}
              <CFormInput
                type="text"
                id="nomeCartao"
                value={nomeCliente}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeCartao">CVV</CFormLabel>  {/* Alterado de nomeCategoria para nomeCartao */}
              <CFormInput
                type="text"
                id="nomeCartao"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cartaoPai">Nome do cliente</CFormLabel>  {/* Alterado de categoriaPai para cartaoPai */}
              <CFormSelect
                id="cartaoPai"
                value={cartaoPai}
                onChange={(e) => setCliente(e.target.value)}
              >
                <option value="">Selecione um Cartão Pai</option>
                {clientes.map((cliente) => (  // Alterado de categorias para cartoes
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nome}
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
          <CModalTitle>Sucesso</CModalTitle>
        </CModalHeader>
        <CModalBody>Cartão salvo com sucesso!</CModalBody>  {/* Alterado de Categoria para Cartão */}
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CartaoAdd;  {/* Alterado de CategoriaAdd para CartaoAdd */}
