import { useState } from 'react'
import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
import RightSide from '../../partials/components/RightSide/RightSide'
const Home = () =>{
    const [showRighView, setShowRightView] = useState(false)
    const [currentApi, setCurrentApi] = useState([])

    const currentCall = (e) =>{
        setShowRightView(true)
        // const apiCallValue = e.target.dataset.apiCall ? e.target.dataset.apiCall : e.target.textContent   
        const apiCallValue = {
            callName: e.target.textContent,
            apiCall : e.target.dataset.apiCall
        } 
        const preValue = currentApi.some((ele) => (ele.callName === apiCallValue.callName || ele.apiCall === apiCallValue.callName));
        if(!preValue){
            setCurrentApi(currentApi => [...currentApi, apiCallValue])
        }
    }
   
    const handleRemoveTab = (e) =>{
        console.log(e.target)
    }
    return(
        <div>
            <Header />
            <div className='row'>
                <div className='col-md-3 col-lg-3'>
                    <LeftSide currentCall={currentCall} />
                </div>
                <div className='col-md-9 col-lg-9'>
                    {showRighView && <RightSide handleRemoveTab={handleRemoveTab} currentApi={currentApi}  />}
                    
                </div>
            </div>
           
        </div>
    )
}

export default Home