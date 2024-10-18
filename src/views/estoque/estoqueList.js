import React, { useEffect, useState } from 'react';
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
} from '@coreui/react';
import { cilPencil, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const EstoqueList = () => {
  const [estoque, setEstoque] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
        const response = await fetch('http://localhost:8080/categoria');
        const data = await response.json();
        setEstoque(data);
      } catch (error) {
        console.error('Erro ao buscar estoque:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEstoque();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar a categoria
    console.log('Editando Estoque com id:', id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover este prouduto do estoque?')) {
      try {
        await fetch(`http://localhost:8080/estoque/${id}`, {
          method: 'DELETE',
        });
        // Atualizar o estado para remover a categoria
        setEstoque((prevEstoque) => prevEstoque.filter((estoque) => estoque.id !== id));
      } catch (error) {
        console.error('Erro ao remover produto do estoque:', error);
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
            <strong>Estoque</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Estoque Pai</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {estoque.map((estoque) => (
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
                        onClick={() => handleDelete(estoque.id)}
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
    </CRow>
  );
};

export default EstoqueList;
