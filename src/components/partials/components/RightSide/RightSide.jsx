import MainHeader from "./components/Header/MainHeader";
import RequestData from './components/RequestData/RequestData';
const RightSide = ({currentApi, handleRemoveTab, currentActiveTab, calledApi}) => {
  return (
    <>
    {currentApi.length > 0 && 
      <div>
        <MainHeader calledApi={calledApi} currentApi={currentApi} handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} />
        <RequestData calledApi={calledApi} />
      </div>
    }
    </>
  )
}

export default RightSide