import { useEffect, useState } from 'react'
import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
import RightSide from '../../partials/components/RightSide/RightSide'
import {useSelector} from 'react-redux';

const Home = () =>{
    const [showRighView, setShowRightView] = useState(false)
    const [currentApi, setCurrentApi] = useState([])
    const [calledApi, setcalledApi] = useState()

    const LIST = useSelector((state) => state.PostManReducer);
      
    useEffect(() =>{
      const last_element = currentApi.findLast((item) => true);
      currentActiveTab(last_element?.text, true)
      // eslint-disable-next-line 
    },[currentApi])

    const currentCall = (e) =>{
        setShowRightView(true)
        let callName = e.target.textContent;
        let apiCall  = e.target.dataset.apiCall;
        let apiId  = e.target.dataset.apiId;

        const preValue = currentApi.some((ele) => (ele.apiTitle === callName || ele.text === callName));
        if(!preValue){
            const search = (data, id) => {
                var f, s = (d, id) => d?.find(x => x.id === id ? f = x : s(x.apicalls, id))	
                s(data, id)
                return f
              }
              const checkVal = search(LIST, apiId) 
            setCurrentApi(currentApi => [...currentApi, checkVal])
            currentActiveTab(apiCall, true)
        }
    }
   
    const handleRemoveTab = (e) =>{
        const calledApi = e.target.dataset.text 
        setCurrentApi(currentApi.filter((call) => call.text !== calledApi))
    }

    const currentActiveTab = (e, isNested) =>{
      const validCall = isNested ? e : e.target.dataset.text
      setcalledApi('')
      let activeTab = currentApi.filter((el) => el.text === validCall)
      setcalledApi(activeTab)
      Array.from(document.querySelectorAll('.top-header-tabs')).forEach((el) => el.classList.remove('active-tab'));
      !isNested && e.target.parentNode.parentNode.classList.add('active-tab')
    }
   
    return(
        <div className='mainOuter'>
            <Header />
            <div className='row g-0'>
                <div className='col-md-3 col-lg-3'>
                    <LeftSide currentCall={currentCall} LIST={LIST} currentActiveTab={currentActiveTab} />
                </div>
                <div className='col-md-9 col-lg-9'>
                    {showRighView && <RightSide handleRemoveTab={handleRemoveTab} currentActiveTab={currentActiveTab} calledApi={calledApi} currentApi={currentApi}  />}
                    
                </div>
            </div>
           
        </div>
    )
}

export default Home