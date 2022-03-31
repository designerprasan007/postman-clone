import './styles.css'
import { MdClose } from "react-icons/md";
import { Tooltip } from '@chakra-ui/react'

const TopHeader = ({handleRemoveTab, currentApi, currentActiveTab}) => {
  return (
      <div className='top-header-outer'>
        {currentApi.map((call, index) =>{
          return(
            <Tooltip key={index} label={call.text} bg='gray.300' color='black' placement='top-start'>
              <div  className='top-header-tabs' onClick={currentActiveTab}>
                <p className='top-header-name'>
                    <span className='close-current-tab' onClick={handleRemoveTab} data-text={call.text}>
                      <MdClose className='close-tab-icon'/>
                    </span>
                    <span className='api-title-bar' data-text={call.text}>{call.apiTitle ? call.apiTitle : call.text}</span>
                </p>
              </div>
            </Tooltip>
          )
        })}
    </div>
  )
}

export default TopHeader