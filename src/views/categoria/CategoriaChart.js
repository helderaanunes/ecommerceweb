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
const CategoriaChart = () => {
  const [categoriasDTO, setCategoriasDTO] = useState([]);

  const fetchCategoriasDTO = async () => {
    try {
      const response = await api.get('/subcategorias/contar');
      const data = Array.isArray(response.data) ? response.data : [];
      setCategoriasDTO(data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      setCategorias([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriasDTO();
  }, []);

  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: categoriasDTO.map( (categoriaDTO) =>categoriaDTO.nome),
                datasets: [
                  {
                    label: 'Categoria',
                    backgroundColor: '#f87979',
                    data:categoriasDTO.map( (categoriaDTO) =>categoriaDTO.numeroDeSubcategorias),
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

export default CategoriaChart
