import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartDoughnut,
} from '@coreui/react-chartjs'
//import { DocsCallout } from 'src/components'

interface propsFromParent {
  priorityLvl : Array<number>
}

const PriorityDoughnutChart : React.FC<propsFromParent>= (props) => {
  const random = () => Math.round(Math.random() * 100)

  return (
   
        <CCard className="mb-4">
          <CCardHeader>Priority Chart</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['High', 'Medium', 'Low'],
                datasets: [
                  {
                    backgroundColor: ['#e74c3c', '#f39c12', '#82e0aa'],
                    data: props.priorityLvl,
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
  )
}

export default PriorityDoughnutChart;
