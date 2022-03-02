import { useState, useRef, useEffect } from 'react';
import React from 'react'
import './styles.css'
const FolderView = ({ title, text, apicalls, ...props }) => {
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
             {title}
           </button>
           <div className='CollapseContent' ref={content} style={{maxHeight: height}}>
             <div className='CollapseText'>
                {text}
                {apicalls?.map((datumn, index) => (
                <FolderView
                  {...datumn}
                  key={`collapse-child-${index}`}
                  isParentOpen={isopen}
                />
              ))}
             </div>
           </div>
       </div>
    </>
    )
}

export default FolderView