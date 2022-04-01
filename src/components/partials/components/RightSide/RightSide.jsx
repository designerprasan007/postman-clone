import TopHeader from "./components/Header/components/TopHeader"
import ApiHeader from './components/Header/components/ApiHeader'
const RightSide = ({currentApi, handleRemoveTab, currentActiveTab, calledApi}) => {
  return (
    <>
    {currentApi.length > 0 && 
      <div>
        <TopHeader currentApi={currentApi} handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} />
        <ApiHeader calledApi={calledApi} />
      </div>
    }
    </>
  )
}

export default RightSide