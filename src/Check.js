import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';

class Check extends Component{
  constructor (props){
    super(props);
    this.state = {
      checked: false
    }
    this.checkClick = this.checkClick.bind(this);
  }

  checkClick = (e) =>{
    this.setState(
      {
        checked: !this.state.checked,
      }
    )

  };
  render () {
    let className = "check";
    if (this.state.checked) className=className + " checked";
    return(
      <div className={className} onClick={this.checkClick}>
        <Icon path={mdiCheckBold}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
        />
      </div>
    )
  }
}


export default Check;
