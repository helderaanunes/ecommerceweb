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

const EstoqueList = () => {
<<<<<<< HEAD
  const [estoque, setEstoque] = useState([])
  const [loading, setLoading] = useState(true)
=======
  const [estoque, setEstoque] = useState([]);
  const [loading, setLoading] = useState(true);
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:8080/categoria')
        const data = await response.json()
        setEstoque(data)
      } catch (error) {
        console.error('Erro ao busca:', error)
=======
        const response = await fetch('http://localhost:8080/categoria');
        const data = await response.json();
        setEstoque(data);
      } catch (error) {
        console.error('Erro ao buscar estoque:', error);
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c
      } finally {
        setLoading(false)
      }
    }

<<<<<<< HEAD
    fetchEstoque()
  }, [])

  const handleEdit = (id) => {
    // Lógica para editar a categoria
    console.log('Editando estoque com id:', id)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover este produto?')) {
=======
    fetchEstoque();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar a categoria
    console.log('Editando Estoque com id:', id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover este prouduto do estoque?')) {
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c
      try {
        await fetch(`http://localhost:8080/estoque/${id}`, {
          method: 'DELETE',
        })
        // Atualizar o estado para remover a categoria
<<<<<<< HEAD
        setEstoque((prevEstoque) => prevEstoque.filter((estoque) => estoque.id !== id))
      } catch (error) {
        console.error('Erro ao remover:', error)
=======
        setEstoque((prevEstoque) => prevEstoque.filter((estoque) => estoque.id !== id));
      } catch (error) {
        console.error('Erro ao remover produto do estoque:', error);
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c
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
<<<<<<< HEAD
                  <CTableHeaderCell scope="col">Estoque</CTableHeaderCell>
=======
                  <CTableHeaderCell scope="col">Estoque Pai</CTableHeaderCell>
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c
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
  )
}

<<<<<<< HEAD
export default EstoqueList
=======
export default EstoqueList;
>>>>>>> 4938e257756e50ca13fc2f95af377cacf46abe9c
