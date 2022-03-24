import './styles.css'
import { MdClose } from "react-icons/md";
import { Tooltip } from '@chakra-ui/react'

const TopHeader = ({handleRemoveTab, currentApi, currentActiveTab}) => {
  return (
      <div className='top-header-outer'>
        {currentApi.map((call, index) =>{
          return(
            <Tooltip key={index} label={call.apiCall} bg='gray.300' color='black' placement='top-start'>
              <div  className='top-header-tabs' onClick={currentActiveTab}>
                <p className='top-header-name'>
                    <span className='close-current-tab' onClick={handleRemoveTab} data-apicall={call.apiCall}>
                      <MdClose className='close-tab-icon'/>
                    </span>
                    <span className='api-title-bar' data-apicall={call.apiCall}>{call.callName ? call.callName : call.apiCall}</span>
                </p>
              </div>
            </Tooltip>
          )
        })}
    </div>
  )
}

export default TopHeader