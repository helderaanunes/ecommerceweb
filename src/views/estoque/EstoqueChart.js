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
const EstoqueChart = () => {
  const [estoquesDTO, setEstoquesDTO] = useState([]);

  const fetchEstoquesDTO = async () => {
    try {
      const response = await api.get('/subestoques/contar');
      const data = Array.isArray(response.data) ? response.data : [];
      setEstoquesDTO(data);
    } catch (error) {
      console.error('Erro ao buscar estoques:', error);
      setEstoques([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstoquesDTO();
  }, []);

  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: estoquesDTO.map( (estoqueDTO) =>estoqueDTO.nome),
                datasets: [
                  {
                    label: 'Estoque',
                    backgroundColor: '#f87979',
                    data:estoquesDTO.map( (estoqueDTO) =>estoqueDTO.numeroDeSubestoques),
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

export default EstoqueChart
