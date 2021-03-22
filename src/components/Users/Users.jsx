import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import classes from './Users.module.css'
import {ReactComponent as IconProfile} from '../../assets/images/profile.svg'

import Skeleton from "react-loading-skeleton";


export const Users = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading)

  const {totalUsersCount, pageSize} = props;

  setTimeout(() => {
    setIsLoading(true)
  }, 1400)

  let pages = [];
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(isLoading)
  return (
    <div className={classes.root}>
      {props.users.map((user) => (
        <NavLink to={`/profile/${user.id}`}>

          <div className={classes.bodyCard}>
            <div className={classes.imageProfile}>
              {
                isLoading ? <IconProfile/> :
                  <Skeleton circle={true} height={60} width={60}/>
              }

            </div>
            <div className={classes.cardInfo}>
              <div className={classes.userNameCard}>

                {
                  isLoading ? <span>{user.name}</span> :
                    <Skeleton width={200} height={20}/>
                }
              </div>
              <div className={classes.userEmail}>
                {
                  isLoading ? <span>E-mail: {user.email}</span>
                    : <Skeleton width={200} height={15}/>
                }

                <span className={classes.cardBorder}>
                {isLoading && <span>|</span>}
                </span>

                {
                  isLoading ? <span><span>Phone:</span> {user.phone} </span>
                    : <Skeleton width={200} height={15}/>
                }

              </div>
            </div>

          </div>

        </NavLink>
      ))}
    </div>
  );
};
