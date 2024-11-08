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
} from '@coreui/react';
import api from '../../services/axiosConfig';
import { useLocation } from 'react-router-dom';

const EstoqueAdd = () => {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const estoqueId = searchParams.get('id');

  useEffect(() => {
    if (estoqueId) {
      const fetchEstoque = async () => {
        try {
          const response = await api.get(`/estoque/${estoqueId}`);
          const { nome, numero, complemento, bairro, cidade, uf, cep } = response.data;
          setNome(nome);
          setNumero(numero);
          setComplemento(complemento);
          setBairro(bairro);
          setCidade(cidade);
          setUf(uf);
          setCep(cep);
        } catch (error) {
          console.error("Erro ao carregar estoque:", error);
        }
      };
      fetchEstoque();
    }
  }, [estoqueId]);

  const handleSave = async (e) => {
    e.preventDefault();

    const estoqueData = {
      nome,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
    };

    try {
      if (estoqueId) {
        // Editar estoque existente
        await api.put(`/estoque/${estoqueId}`, estoqueData);
      } else {
        // Adicionar novo estoque
        await api.post('/estoque', estoqueData);
      }
      setModalVisible(true);
      setNome('');
      setNumero('');
      setComplemento('');
      setBairro('');
      setCidade('');
      setUf('');
      setCep('');
    } catch (error) {
      console.error("Erro ao salvar o estoque:", error);
      alert('Erro ao salvar o estoque');
    }
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <h4>{estoqueId ? 'Editar Estoque' : 'Adicionar Estoque'}</h4>
          <CForm onSubmit={handleSave}>
            <div className="mb-3">
              <CFormLabel htmlFor="nomeEstoque">Nome do Estoque</CFormLabel>
              <CFormInput
                type="text"
                id="nomeEstoque"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="numeroEstoque">Número</CFormLabel>
              <CFormInput
                type="text"
                id="numeroEstoque"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="complementoEstoque">Complemento</CFormLabel>
              <CFormInput
                type="text"
                id="complementoEstoque"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="bairroEstoque">Bairro</CFormLabel>
              <CFormInput
                type="text"
                id="bairroEstoque"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cidadeEstoque">Cidade</CFormLabel>
              <CFormInput
                type="text"
                id="cidadeEstoque"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ufEstoque">Estado (UF)</CFormLabel>
              <CFormInput
                type="text"
                id="ufEstoque"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cepEstoque">CEP</CFormLabel>
              <CFormInput
                type="text"
                id="cepEstoque"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
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
        <CModalBody>Estoque salvo com sucesso!</CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default EstoqueAdd;
