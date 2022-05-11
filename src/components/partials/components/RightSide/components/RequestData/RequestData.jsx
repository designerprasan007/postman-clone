import React from 'react'
import ParamsData from './components/ParamsData/ParamsData'
import HeadersData from './components/HeadersData/HeadersData'
import BodyData from './components/BodyData/BodyData'
const RequestData = ({calledApi, activeHeader}) => {
  return (
    <div>
      {activeHeader === 'Params' && <ParamsData calledApi={calledApi} />}
      {activeHeader === 'Headers' && <HeadersData calledApi={calledApi} />}
      {activeHeader === 'Body' && <BodyData calledApi={calledApi} /> }
    </div>
  )
}

export default RequestData