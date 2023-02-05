import React from 'react'
import Notes from './Notes'


export const View = (props) => {
 const {showAlert}=props;
 
  return (
   <div>
    <Notes showAlert={showAlert}/>
   </div>
  )
}
