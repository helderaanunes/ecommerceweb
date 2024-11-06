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

const EstoqueList = () => {
  const [estoques, setEstoques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [estoqueSelecionada, setEstoqueSelecionada] = useState(null);

  const navigate = useNavigate();



  const fetchEstoques = async () => {
    try {
      const response = await api.get('/estoque');
      const data = Array.isArray(response.data) ? response.data : [];
      setEstoques(data);
    } catch (error) {
      console.error('Erro ao buscar estoques:', error);
      setEstoques([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstoques();
  }, []);

  const handleEdit = (id) => {
    navigate(`/estoque/add?id=${id}`);
  };

  const handleConfirmDelete = (estoque) => {
    setEstoqueSelecionado(estoque);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    if (estoqueSelecionada) {
      try {
        await api.delete(`/estoque/${estoqueSelecionada.id}`);
        setModalVisible(false);
        setEstoqueSelecionada(null);
        // Recarregar todos os estoques para garantir que a tabela esteja atualizada
        fetchEstoques();
      } catch (error) {
        console.error('Erro ao remover estoque:', error);
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
            <strong>Estoques</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Logradouro</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Numero</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Complemento</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Bairro</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cidade</CTableHeaderCell>
                  <CTableHeaderCell scope="col">uf</CTableHeaderCell>
                  <CTableHeaderCell scope="col">cep</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>


                </CTableRow>
              </CTableHead>
              <CTableBody>
                {estoques.map((estoque) => (
                  <CTableRow key={estoque.id}>
                    <CTableHeaderCell scope="row">{estoque.id}</CTableHeaderCell>
                    <CTableDataCell>{estoque.nome}</CTableDataCell>
                    <CTableDataCell>
                      {estoque.estoque ? estoque.estoque.nome : 'N/A'}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="warning"
                        onClick={() => handleEdit(estoque.id)}
                        className="me-2"
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilPencil} /> Editar
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => handleConfirmDelete(estoque)}
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
          Tem certeza de que deseja remover o estoque "<strong>{estoqueSelecionada?.nome}</strong>"?
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

export default EstoqueList;
