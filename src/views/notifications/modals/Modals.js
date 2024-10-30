import React, { useState } from 'react';
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
} from '@coreui/react';
import api from '../../services/axiosConfig';

const CategoriaAdd = () => {
  const [nome, setNome] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/categoria', { nome });
      if (response.status === 201) {
        setModalVisible(true); // Exibe o modal ao salvar com sucesso
        setNome(''); // Limpa o campo após salvar
      }
    } catch (error) {
      console.error("Erro ao salvar a categoria:", error);
      alert('Erro ao salvar a categoria');
    }
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <h4>Adicionar Categoria</h4>
          <CForm onSubmit={handleSave}>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeCategoria">Nome da Categoria</CFormLabel>
              <CFormInput
                type="text"
                id="nomeCategoria"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
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
        <CModalBody>Categoria salva com sucesso!</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CategoriaAdd;
