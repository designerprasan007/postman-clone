import './styles.css'
import { MdClose } from "react-icons/md";

const TopHeader = ({currentApi}) => {
  const handleShowview = (e) =>{
    console.log(e.target.parentNode.parentNode.parentNode)
  }
  return (
      <div className='top-header-outer'>
        {currentApi.map((call, index) =>{
          return(
            <div key={index} className='top-header-tabs'>
              <p className='top-header-name'>
                  <span onClick={(e) => handleShowview(e)}><MdClose /></span>
                  <span>{call.callName ? call.callName : call.apiCall}</span>
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default TopHeader