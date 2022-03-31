import {useState} from 'react'
import TopHeader from "./components/Header/components/TopHeader"
import ApiHeader from './components/Header/components/ApiHeader'
// import FolderStructure from './components/Header/components/FolderStructure'
const RightSide = ({currentApi, handleRemoveTab}) => {
  const [calledApi, setcalledApi] = useState()

  const currentActiveTab = (e) =>{
    setcalledApi('')
    let activeTab = currentApi.filter((el) => el.text === e.target.dataset.text)
    setcalledApi(activeTab)
    Array.from(document.querySelectorAll('.top-header-tabs')).forEach((el) => el.classList.remove('active-tab'));
    e.target.parentNode.parentNode.classList.add('active-tab')
  }

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