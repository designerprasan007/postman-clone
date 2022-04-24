import React from 'react'

import TopHeader from "./components/TopHeader/TopHeader"
import ApiHeader from './components/ApiHeader/ApiHeader'
import RequestDataHeader  from './components/RequestDataHeader/RequestDataHeader'

const MainHeader = ({calledApi, currentApi, handleRemoveTab, currentActiveTab, changeHeaderTab}) => {
  return (
    <div>
        <TopHeader currentApi={currentApi} handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} />
        <ApiHeader calledApi={calledApi} />
        <RequestDataHeader changeHeaderTab={changeHeaderTab} />
    </div>
  )
}

export default MainHeader