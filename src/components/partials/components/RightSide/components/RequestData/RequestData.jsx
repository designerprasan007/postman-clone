
import React, {useState} from 'react'
import ParamsData from './components/ParamsData/ParamsData'
import HeadersData from './components/HeadersData/HeadersData'
import BodyData from './components/BodyData/BodyData';

const RequestData = ({calledApi, activeHeader}) => {
  const [activeBody, setActiveBody] = useState('none')
  const [formDataValues, setFormDataValues] = useState([])

  
  return (
    <div>
      {activeHeader === 'Params' && <ParamsData calledApi={calledApi} />}
      {activeHeader === 'Headers' && <HeadersData calledApi={calledApi} />}
      {activeHeader === 'Body' && <BodyData calledApi={calledApi} activeBody={activeBody} setActiveBody={setActiveBody} formDataValues={formDataValues} setFormDataValues={setFormDataValues} /> }
    </div>
  )
}

export default RequestData