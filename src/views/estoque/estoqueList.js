import React, { useEffect, useState } from 'react'
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
} from '@coreui/react'
import { cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import api from '../../services/axiosConfig';
const EstoqueList = () => {
  const [estoques, setEstoque] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
        const response = await api.get('http://localhost:8080/estoque')
        const data = await response.data
        setEstoque(data)
      } catch (error) {
        console.error("Erro ao busca:", error);
      } finally {
        setLoading(false)
      }
    }

    fetchEstoque();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar o estoque
    console.log('Editando Estoque com id:', id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover este prouduto do estoque?')) {
      try {
        await fetch(`http://localhost:8080/estoque/${id}`, {
          method: 'DELETE',
        })
        // Atualizar o estado para remover o estoque
        setEstoque((prevEstoque) => prevEstoque.filter((estoque) => estoque.id !== id));
      } catch (error) {
        console.error('Erro ao remover produto do estoque:', error);
      }
    }
  }

  if (loading) {
    return <div>Carregando...</div>
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
                  <CTableHeaderCell scope="col">numero</CTableHeaderCell>
                  <CTableHeaderCell scope="col">complemento</CTableHeaderCell>
                  <CTableHeaderCell scope="col">bairro</CTableHeaderCell>
                  <CTableHeaderCell scope="col">cidade</CTableHeaderCell>
                  <CTableHeaderCell scope="col">uf</CTableHeaderCell>
                  <CTableHeaderCell scope="col">cep</CTableHeaderCell>

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
  )
}


export default EstoqueList;
