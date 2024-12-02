import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
} from '@coreui/react-chartjs'
//import { DocsCallout } from 'src/components'

interface propsFromParent {
  priorityLvl : Array<number>
}

const PriorityBarChart : React.FC<propsFromParent> = (props) => {
  const random = () => Math.round(Math.random() * 100)

  console.log("sheep",props.priorityLvl);

  return (
        <CCard className="mb-4">
          <CCardHeader>Priority Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['High', 'Medium', 'Low'],
                datasets: [
                  {
                    label: 'Number Of Tasks',
                    backgroundColor: '#f87979',
                    data: props.priorityLvl,
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
  )
}

export default PriorityBarChart;
