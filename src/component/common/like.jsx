import React from 'react';

class Like  extends React.Component {
    render() { 
        const {onLike,Id} =this.props;
        let classes = "fa fa-heart";
        if(!this.props.liked) classes +="-o";

        return(
        <div>
            <i className={classes} onClick={onLike} style={{cursor: 'pointer'}}  aria-hidden="true"></i>
           
        </div>
        )
    }
}
 
export default Like ;