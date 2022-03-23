import { useState, useRef, useEffect } from 'react';
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import './styles.css'
const FolderView = ({ title, text, apiTitle, apicalls, currentCall, ...props }) => {
  const [isopen, setisopen] = useState("false");
  const toggleCollapse = () => {
    setisopen(isopen === 'false' ? 'true' : 'false');
  }
  const closeCollapse = () => setisopen("false");

  const content = useRef(null);

  const isParentOpen = props.isParentOpen;

  useEffect(() => {
    if (!isParentOpen) closeCollapse();
  }, [isParentOpen]);

  const height = isopen === "false" ? "0px" : `100vh`; // ${content.current?.scrollHeight}px

  return (
    <>
       <div className='CollapseContainer'>
           <button className='CollapseButton' isopen={isopen} onClick={toggleCollapse}>
             {isopen === 'false' ? <FaAngleRight /> : <FaAngleDown /> }  
             &nbsp;{title}
           </button>
           <div className='CollapseContent' ref={content} style={{maxHeight: height}}>
             <div className='CollapseText'>
                <p onClick={currentCall} className="apiText" data-api-call={text}>
                  {apiTitle ? apiTitle : text }
                  </p>
                {apicalls?.map((datumn, index) => (
                <FolderView
                  {...datumn}
                  key={`collapse-child-${index}`}
                  isParentOpen={isopen}
                  currentCall={currentCall}
                />
              ))}
             </div>
           </div>
       </div>
    </>
    )
}

export default FolderView