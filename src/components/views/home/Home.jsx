import { useEffect, useState } from 'react'
import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
import RightSide from '../../partials/components/RightSide/RightSide'
const Home = () =>{
    const [showRighView, setShowRightView] = useState(false)
    const [currentApi, setCurrentApi] = useState([])
    const [calledApi, setcalledApi] = useState()

    const LIST = [
        {
          id: '1',
          title: "Content 1",
          text:"http://localhost:3000/get1?param1=a&param2=b",
          method:"get",
          apiTitle:"get-product1",
          apiBody:[{
            
          }],
          apiHeaders:[{
            "key":"contentType",
            "value":"file/pdf",
            "isDisable":true
          }],
          apicalls: [
            {
              id: "1a",
              title: "Test 1 A",
              text:"http://localhost:3000/get1a",
              method:"get",
              apiTitle:"",
              apiBody:[{
                
              }],
              apiHeaders:[{
                "key":"contentType",
                "value":"application/json",
                "isDisable":true
              }],
    
            },
            { id: "1b", 
            title: "Test 1 B", 
            text: "http://localhost:3000/get1b",
            method:"get",
            apiTitle:"get-product2b",
            apiBody:[{
              
            }],
            apiHeaders:[{
              "key":"contentType",
              "value":"file/img",
              "isDisable":true
            }],
          }
          ]
        },
        {
          id: '2',
          title: "Content 2",
          apicalls: [
            {
              id: "2b",
              title: "Test 1 B",
              text:"http://localhost:3000/get2",
              method:"get",
              apiTitle:"",
              apiBody:[{
                
              }],
              apiHeaders:[{
                "key":"contentType",
                "value":"file/mp3",
                "isDisable":true
              }],
              apicalls: [
                {
                  id: "2b",
                  title: "Test 1 A B",
                  text: "http://localhost:3000/get2a",
                  method:"get",
                  apiTitle:"",
                  apiBody:[{
                    
                  }],
                  apiHeaders:[{
                    "key":"contentType",
                    "value":"file/video",
                    "isDisable":true
                  }],
                }
              ]
            },
            { id: "2c", 
            title: "Test 1 B", 
            text: "http://localhost:3000/get2b",
            method:"get",
            apiTitle:"",
            apiBody:[{
              
            }],
            apiHeaders:[{
              "key":"contentType",
              "value":"file/png",
              "isDisable":true
            }],
          }
          ]
        }
      ];
      
      
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
        <div>
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