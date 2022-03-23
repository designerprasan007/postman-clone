import './styles.css'
import { MdClose } from "react-icons/md";

const TopHeader = ({handleRemoveTab, currentApi}) => {
  return (
      <div className='top-header-outer'>
        {currentApi.map((call, index) =>{
          return(
            <div key={index} className='top-header-tabs'>
              <p className='top-header-name'>
                  <span className='close-current-tab' onClick={handleRemoveTab} data-apicall={call.apiCall}>
                    <MdClose />
                  </span>
                  <span>{call.callName ? call.callName : call.apiCall}</span>
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default TopHeader