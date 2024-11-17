import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import ProdutoChart from './ProdutoChart.js';


const ProdutoList = () => {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const navigate = useNavigate()

  const fetchProdutos = async () => {
    try {
      const response = await api.get('/produto')
      const data = Array.isArray(response.data) ? response.data : []
      setProdutos(data)
    } catch (error) {
      console.error('Erro ao buscar produto:', error)
      setProdutos([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  const handleEdit = (id) => {
    navigate(`/produto/add?id=${id}`)
  }

  const handleConfirmDelete = (produto) => {
    setProdutoSelecionado(produto)
    setModalVisible(true)
  }

  const handleDelete = async () => {
    if (produtoSelecionado) {
      try {
        await api.delete(`/produto/${produtoSelecionado.id}`)
        setModalVisible(false)
        setProdutoSelecionado(null)
        // Recarregar todas as produtos para garantir que a tabela esteja atualizada
        fetchProdutos()
      } catch (error) {
        console.error('Erro ao remover produto:', error)
      }
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <CRow>
      <ProdutoChart></ProdutoChart>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Produtos</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Descrição</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Categoria</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ficha Técnica</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {produtos.map((produto) => (
                  <CTableRow key={produto.id}>
                    <CTableHeaderCell scope="row">{produto.id}</CTableHeaderCell>
                    <CTableDataCell style={{ maxWidth: '15ch' }}>{produto.nome}</CTableDataCell>
                    {/* <CTableDataCell>{produto.descricao}</CTableDataCell> */}
                    <CTableDataCell style={{ maxWidth: '15ch' }}>
                      {produto.categoria?.nome}
                    </CTableDataCell>
                    <CTableDataCell style={{ maxWidth: '20ch' }}>
                      {produto.fichaTecnica}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="warning"
                        onClick={() => handleEdit(produto.id)}
                        className="me-2"
                        style={{ color: 'white' }}
                      >
                        <CIcon icon={cilPencil} /> Editar
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => handleConfirmDelete(produto)}
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
          Tem certeza de que deseja remover a produto &quot;
          <strong>{produtoSelecionado?.nome}</strong>&quot;?
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
  )
}

export default ProdutoList
