import React, {useEffect} from 'react'
import {setUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getNewsPost} from "../api/api";


const NewsContainer = () => {

  useEffect(() => {
    getNewsPost()
  }, [])


  const handleClickProfile = (numberId) => {
    getNewsPost(numberId)
  }

  return <div>



  </div>
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

let WithUrlDataContainerComponent = withRouter(NewsContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
