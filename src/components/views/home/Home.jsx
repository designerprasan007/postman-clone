import { useState } from 'react'
import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
import RightSide from '../../partials/components/RightSide/RightSide'
const Home = () =>{
    const [showRighView, setShowRightView] = useState(false)
    const [currentApi, setCurrentApi] = useState([])
    const LIST = [
        {
          id: 1,
          title: "Content 1",
          text:"localhost:3000/get1",
          apiTitle:"get-product1",
          apicalls: [
            {
              id: "1a",
              title: "Test 1 A",
              text:"localhost:3000/get1a",
              apiTitle:"",
    
            },
            { id: "1b", 
            title: "Test 1 B", 
            text: "localhost:3000/get2b",
            apiTitle:"get-product2b",
          }
          ]
        },
        {
          id: 2,
          title: "Content 2",
          apicalls: [
            {
              id: "1b",
              title: "Test 1 B",
              text:"localhost:3000/get2",
              apiTitle:"",
              apicalls: [
                {
                  id: "1ba",
                  title: "Test 1 A B",
                  text: "localhost:3000/get2a",
                  apiTitle:"",
                }
              ]
            },
            { id: "1b", 
            title: "Test 1 B", 
            text: "localhost:3000/get2b",
            apiTitle:"",
          }
          ]
        }
      ];
    const currentCall = (e) =>{
        setShowRightView(true)
        const apiCallValue = {
            callName: e.target.textContent,
            apiCall : e.target.dataset.apiCall,
            apiId : e.target.dataset.apiId
        } 
        const preValue = currentApi.some((ele) => (ele.callName === apiCallValue.callName || ele.apiCall === apiCallValue.callName));
        if(!preValue){
            const search = (data, id) => {
                var f, s = (d, id) => d?.find(x => x.id == id ? f = x : s(x.apicalls, id))	
                s(data, id)
                return f
              }
              console.log(search(LIST, apiCallValue.apiId))
            setCurrentApi(currentApi => [...currentApi, apiCallValue])
        }
    }
   
    const handleRemoveTab = (e) =>{
        const calledApi = e.target.dataset.apicall 
        setCurrentApi(currentApi.filter((call) => call.apiCall !== calledApi))

    }
   
    return(
        <div>
            <Header />
            <div className='row g-0'>
                <div className='col-md-3 col-lg-3'>
                    <LeftSide currentCall={currentCall} LIST={LIST} />
                </div>
                <div className='col-md-9 col-lg-9'>
                    {showRighView && <RightSide handleRemoveTab={handleRemoveTab} currentApi={currentApi}  />}
                    
                </div>
            </div>
           
        </div>
    )
}

export default Home