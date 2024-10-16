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

const CategoriaList = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:8080/categoria');
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar a categoria
    console.log('Editando categoria com id:', id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover esta categoria?')) {
      try {
        await fetch(`http://localhost:8080/categoria/${id}`, {
          method: 'DELETE',
        });
        // Atualizar o estado para remover a categoria
        setCategorias((prevCategorias) => prevCategorias.filter((categoria) => categoria.id !== id));
      } catch (error) {
        console.error('Erro ao remover categoria:', error);
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
            <strong>Categorias</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Categoria Pai</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {categorias.map((categoria) => (
                  <CTableRow key={categoria.id}>
                    <CTableHeaderCell scope="row">{categoria.id}</CTableHeaderCell>
                    <CTableDataCell>{categoria.nome}</CTableDataCell>
                    <CTableDataCell>
                      {categoria.categoria ? categoria.categoria.nome : 'N/A'}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="warning"
                        onClick={() => handleEdit(categoria.id)}
                        className="me-2"
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilPencil} /> Editar
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => handleDelete(categoria.id)}
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

export default CategoriaList;
