import React, {useState, useEffect, useRef} from 'react'

import "../css/Loading.css";

const rotationTimeout = 800;
const blobCount = 6;

function Loading() {
  const [blobStage, setBlobStage] = useState(1);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setBlobStage(prev => {
        if(prev >= blobCount) {
          //clearInterval(interval.current);
          return 1;
        }
        else {
          return prev + 1;
        }
      });
    }, rotationTimeout);

    return () => {
      clearInterval(interval.current);
    }
  }, []);

  return(
    <>
      <div className="loading">
        <div className="loading-text">Just a sec, we are signing you in...</div>
        <div className={ `loading-background loading-background-${blobStage}` }>
          <div className="loading-elements" />
        </div>
      </div>
      <div className="loading-bottom" />
    </>
  )
}

export default Loading
