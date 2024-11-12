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

const CartaoAdd = () => {
  const [nome, setNome] = useState('');
  const [numeroCartao, setnumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvc, setCvc] = useState('');
  const [cliente, setCliente] = useState(''); // Agora é um único cliente
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const cartaoId = searchParams.get('id'); // Obtém o ID do cartão, caso haja

  // Carregar a lista de clientes
  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await api.get('/cliente');
        setCliente(response.data); // Agora o estado é um único cliente
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
      }
    };
    fetchCliente();
  }, []);

  // Carregar os dados do cartão para edição, caso haja um ID
  useEffect(() => {
    if (cartaoId) {
      const fetchCartao = async () => {
        try {
          const response = await api.get(`/cartao/${cartaoId}`);
          const { nome, numeroCartao, validade, cvc, cliente } = response.data;
          setNome(nome);
          setnumeroCartao(numeroCartao);
          setDataValidade(validade);
          setCvc(cvc);
          setCliente(cliente ? cliente.id : ''); // Assumindo que cliente é um objeto com o ID
        } catch (error) {
          console.error("Erro ao carregar os dados do cartão:", error);
        }
      };
      fetchCartao();
    }
  }, [cartaoId]);

  // Função para salvar ou editar o cartão
  const handleSave = async (e) => {
    e.preventDefault();

    const cartaoData = {nome, numeroCartao, validade: dataValidade, cvc, cliente: cliente ? { id: cliente } : null, // Relacionando com o cliente
    };

    try {
      if (cartaoId) {
        // Editar cartão existente
        await api.put(`/cartao/${cartaoId}`, cartaoData);
      } else {
        // Adicionar novo cartão
        await api.post('/cartao', cartaoData);
      }
      setModalVisible(true); // Exibe o modal de sucesso
      setNome('');
      setnumeroCartao('');
      setDataValidade('');
      setCvc('');
      setCliente('');
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      alert('Erro ao salvar o cartão');
    }
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <h4>{cartaoId ? 'Editar Cartão' : 'Adicionar Cartão'}</h4>
          <CForm onSubmit={handleSave}>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeCartao">Nome do Cartão</CFormLabel>
              <CFormInput
                type="text"
                id="nomeCartao"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="numeroCartao">Número do Cartão</CFormLabel>
              <CFormInput
                type="text"
                id="numeroCartao"
                value={numeroCartao}
                onChange={(e) => setnumeroCartao(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="validade">Data de Validade</CFormLabel>
              <CFormInput
                type="date"
                id="validade"
                value={dataValidade}
                onChange={(e) => setDataValidade(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cvc">CVC</CFormLabel>
              <CFormInput
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cliente">Cliente</CFormLabel>
              <CFormSelect
                id="cliente"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
              >
                <option value="">Selecione um Cliente</option>
                {cliente && (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                  </option>
                )}
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
        <CModalBody>Cartão salvo com sucesso!</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CartaoAdd;
