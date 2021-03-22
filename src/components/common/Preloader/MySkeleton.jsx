import React from 'react'
import Skeleton from "react-loading-skeleton";
import classes from './MySkeleton.module.css'

export const MySkeleton = ({number}) => {
  return <div className={classes.skeleton}>
    {
      Array(number).fill().map(sk =>
        <div key={sk} className={classes.skeleton}>
          <Skeleton duration={2}/>
          <Skeleton count={2}/>
        </div>
      )
    }

    {/*<Skeleton circle={true} height={60} width={60}/>*/}
    {/*<Skeleton/>*/}
    {/*<Skeleton duration={2} count={3}/>*/}
  </div>
}