import {useState} from 'react'
import TopHeader from "./components/Header/components/TopHeader"
import FolderStructure from './components/Header/components/FolderStructure'
const RightSide = ({currentApi, handleRemoveTab}) => {
  const [calledApi, setcalledApi] = useState("")
  const currentActiveTab = (e) =>{
    setcalledApi(e.target.dataset.apicall)
    Array.from(document.querySelectorAll('.top-header-tabs')).forEach((el) => el.classList.remove('active-tab'));
    e.target.parentNode.parentNode.classList.add('active-tab')
  }
  return (
    <>
      <TopHeader currentApi={currentApi} handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} />
      {calledApi && <FolderStructure calledApi={calledApi} />}
    </>
  )
}

export default RightSide