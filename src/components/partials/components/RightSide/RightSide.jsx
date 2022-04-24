import { useState } from "react";
import MainHeader from "./components/Header/MainHeader";
import RequestData from './components/RequestData/RequestData';
const RightSide = ({currentApi, handleRemoveTab, currentActiveTab, calledApi}) => {
  const [activeHeader, setActiveHeader] = useState("Headers")
  const changeHeaderTab = (e) =>{
    setActiveHeader(e)
  }
  return (
    <>
    {currentApi.length > 0 && 
      <div>
        <MainHeader calledApi={calledApi} currentApi={currentApi} handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} changeHeaderTab={changeHeaderTab} />
        <RequestData calledApi={calledApi} activeHeader={activeHeader} />
      </div>
    }
    </>
  )
}

export default RightSide