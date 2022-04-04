import React from 'react'
import ParamsData from './components/ParamsData/ParamsData'

const RequestData = ({calledApi}) => {
  return (
    <div>
        <ParamsData calledApi={calledApi} />
    </div>
  )
}

export default RequestData