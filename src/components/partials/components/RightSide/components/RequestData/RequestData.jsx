import React from 'react'
import ParamsData from './components/ParamsData/ParamsData'
import HeadersData from './components/HeadersData/HeadersData'
const RequestData = ({calledApi, activeHeader}) => {
  return (
    <div>
      {activeHeader === 'Params' && <ParamsData calledApi={calledApi} />}
      {activeHeader === 'Headers' && <HeadersData calledApi={calledApi} />}
    </div>
  )
}

export default RequestData