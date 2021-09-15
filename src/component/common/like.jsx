import React from 'react';

const Like = (props) => {
  
        const {onLike} =props;
        let classes = "fa fa-heart";
        if(!props.liked) classes +="-o";

        return(
        <div>
            <i className={classes} onClick={onLike} style={{cursor: 'pointer'}}  aria-hidden="true"></i>
           
        </div>
        )
    }

 
export default Like;

