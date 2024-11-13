import React,{ useEffect, useState }  from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import api from '../../services/axiosConfig';
const ProdutoChart = () => {
  const [produtosDTO, setProdutosDTO] = useState([]);

  const fetchProdutosDTO = async () => {
    try {
      const response = await api.get('/subprodutos/contar');
      const data = Array.isArray(response.data) ? response.data : [];
      setProdutosDTO(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setProdutos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutosDTO();
  }, []);

  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: produtosDTO.map( (produtoDTO) =>produtoDTO.nome),
                datasets: [
                  {
                    label: 'Produto',
                    backgroundColor: '#f87979',
                    data:produtosDTO.map( (produtoDTO) =>produtoDTO.numeroDeSubprodutos), // Falta alterar alguma coisa
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProdutoChart
