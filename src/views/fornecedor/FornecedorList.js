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

const FornecedorList = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

  const navigate = useNavigate();

  const fetchFornecedores = async () => {
    try {
      const response = await api.get('/fornecedor-produto'); // Supondo que a rota seja essa
      const data = Array.isArray(response.data) ? response.data : [];
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
      setFornecedores([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const handleEdit = (id) => {
    navigate(`/fornecedor-produto/add?id=${id}`);
  };

  const handleConfirmDelete = (fornecedorProduto) => {
    setFornecedorSelecionado(fornecedorProduto);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    if (fornecedorSelecionado) {
      try {
        await api.delete(`/fornecedor-produto/${fornecedorSelecionado.id}`);
        setModalVisible(false);
        setFornecedorSelecionado(null);
        fetchFornecedores();
      } catch (error) {
        console.error('Erro ao remover fornecedor-produto:', error);
      }
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Fornecedores e Produtos</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fornecedor</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Produto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Preço</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {fornecedores.map((fornecedorProduto) => (
                  <CTableRow key={fornecedorProduto.id}>
                    <CTableHeaderCell scope="row">{fornecedorProduto.id}</CTableHeaderCell>
                    <CTableDataCell>{fornecedorProduto.fornecedor.nome}</CTableDataCell>
                    <CTableDataCell>{fornecedorProduto.produto.nome}</CTableDataCell>
                    <CTableDataCell>{fornecedorProduto.precoProduto.toFixed(2)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="warning"
                        onClick={() => handleEdit(fornecedorProduto.id)}
                        className="me-2"
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilPencil} /> Editar
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => handleConfirmDelete(fornecedorProduto)}
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
          Tem certeza de que deseja remover o fornecedor "<strong>{fornecedorSelecionado?.fornecedor.nome}</strong>" com o produto "<strong>{fornecedorSelecionado?.produto.nome}</strong>"?
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

export default FornecedorList;
