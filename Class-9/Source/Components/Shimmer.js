import React from 'react'
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Shimmer() {
  return (
    <>
     <div className="bodyContainer">
       <SkeletonTheme >
    <p>
      <Skeleton count={1} width={"100%"} height={"100px"}/>
      
      <Skeleton count={1} width={"90%"}/>
      <Skeleton count={1} width={"50%"}/>
      <Skeleton count={1} />
      <Skeleton count={1} width={"70%"}/>
    </p>
  </SkeletonTheme>
        </div>
    </>
  )
}
