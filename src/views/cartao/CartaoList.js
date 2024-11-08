import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react';
import { cilPencil, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import api from '../../services/axiosConfig';

const CartaoList = () => {
  const [cartoes, setCartoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [cartaoSelecionado, setCartaoSelecionado] = useState(null);

  const navigate = useNavigate();

  // Função para buscar todos os cartões
  const fetchCartoes = async () => {
    try {
      const response = await api.get('/cartao');
      const data = Array.isArray(response.data) ? response.data : [];
      setCartoes(data);
    } catch (error) {
      console.error('Erro ao buscar cartões:', error);
      setCartoes([]);
    } finally {
      setLoading(false);
    }
  };

  // Efeito para carregar os cartões quando o componente é montado
  useEffect(() => {
    fetchCartoes();
  }, []);

  // Função para redirecionar para a página de edição de um cartão
  const handleEdit = (id) => {
    navigate(`/cartao/add?id=${id}`);
  };

  // Exibir modal de confirmação de exclusão
  const handleConfirmDelete = (cartao) => {
    setCartaoSelecionado(cartao);
    setModalVisible(true);
  };

  // Função para deletar um cartão
  const handleDelete = async () => {
    if (cartaoSelecionado) {
      try {
        await api.delete(`/cartao/${cartaoSelecionado.id}`);
        setModalVisible(false);
        setCartaoSelecionado(null);
        fetchCartoes(); // Recarregar os cartões
      } catch (error) {
        console.error('Erro ao remover cartão:', error);
      }
    }
  };

  // Exibir mensagem de carregamento enquanto busca os dados
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cartões</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Número do Cartão</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Validade</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {cartoes.map((cartao) => (
                  <CTableRow key={cartao.id}>
                    <CTableHeaderCell scope="row">{cartao.id}</CTableHeaderCell>
                    <CTableDataCell>{cartao.numeroCartao}</CTableDataCell>
                    <CTableDataCell>{cartao.validade}</CTableDataCell>
                    <CTableDataCell>{cartao.nome}</CTableDataCell>
                    <CTableDataCell>{cartao.cliente ? cartao.cliente.nome : 'N/A'}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="warning"
                        onClick={() => handleEdit(cartao.id)}
                        className="me-2"
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilPencil} /> Editar
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => handleConfirmDelete(cartao)}
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilTrash} /> Remover
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Modal de Confirmação de Exclusão */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Confirmar Exclusão</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Tem certeza de que deseja remover o cartão "<strong>{cartaoSelecionado?.numeroCartao}</strong>"?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancelar
          </CButton>
          <CButton color="danger" onClick={handleDelete}>
            Confirmar
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default CartaoList;
