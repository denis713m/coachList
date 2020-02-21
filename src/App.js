import React from 'react';
import './App.css';
import { mdiCheckBold } from '@mdi/js';
import Icon from '@mdi/react';


const items=[{
  id: 1,
  level: 1,
  firstName: "Brian",
  lastName: "McCauley",
  profilePicture:"https://live.staticflickr.com/7579/15671305855_0cbe715034_b.jpg",
},
  {
    id: 2,
    level:2,
    firstName: "Chad",
    lastName: "Hayes",
    profilePicture:"https://thumbs.dreamstime.com/z/young-man-portrait-18441696.jpg",
  },
  {
    id: 3,
    level: 2,
    firstName: "Jeff",
    lastName: "Buck",
    profilePicture:"https://i.pinimg.com/474x/29/4a/3e/294a3e32afa58b3ca946883c44515e19.jpg",
  },
  {
    id: 4,
    level: 3,
    firstName: "Kenny",
    lastName: "Griffin",
    profilePicture:"data:image/jpeg;base64,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",
  },{
    id: 5,
    level: 3,
    firstName: "Tom",
    lastName: "Glover",
    profilePicture:"https://i.pinimg.com/564x/a8/35/90/a835903c5d506282e4e87fefc08e1d8c.jpg",
  }];




class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      items:items.map((item)=>{return{...item, isSelected:false}})
    };
    //this.checkClick = this.checkClick.bind(this);
  }

  checkClick (id){
    this.setState(
      {
        items: items.map((item)=>{
          if(item.id===id){
            item.isSelected = !item.isSelected;
          }
          return item})
      }
    )

  };

  selectedCoaches = () => {
    return this.state.items.map((coach) => {
      if(coach.isSelected)
      return <div key={coach.id+"sel"}>
        <span >{coach.firstName} {coach.lastName}</span>
        <span className="delete"> </span>
      </div>

    })
  };

  renderCoaches = () => {


    return this.state.items.map((coach) => {
      let className = "check";
      if(coach.isSelected) className = className + " checked";
      return (
        <li key={coach.id} className = "coachRow">
          <div className="profilePicture">
            <img src={coach.profilePicture} alt="pics"/>
          </div>
          <div className="coachInfo">
            <div className="coachName">{coach.firstName} {coach.lastName}</div>
            <div className="coachLevel" >Level {coach.level}</div>
          </div>
          <div className={className} onClick={() => this.checkClick(coach.id)}>
            <Icon path={mdiCheckBold}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="white"
                  />
          </div>
        </li>
      );
    });
  };

  render () {
    return (
      <div className="App">
        <div className = "listContainer">
          {this.selectedCoaches()}
        </div>
        <ul className = "listContainer">
          {this.renderCoaches()}
        </ul>
      </div>
    )

  }


}

export default App;
