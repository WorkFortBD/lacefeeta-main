import React from 'react'
import Skeleton from 'react-loading-skeleton';

const LoadingPlaceHolder = (props) => { 
    let placeHolder = Array.from({ length: props.count }).map((_, index) => (
        <div className={props.className ? props.className : ''} key={index}>
            <Skeleton width={props.width} height={props.height} />
        </div>
    ))
    
    return placeHolder;
}
 
export default LoadingPlaceHolder;