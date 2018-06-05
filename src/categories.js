import React from 'react';


class Categorylist extends React.Component {
  render() {
    var listItems = this.props.list.map(function(i){
      return(<li key={i}> {i}</li>);
    });
    return <ul>{listItems}</ul>;
  }
}

// creates a table with the given data
class Categories extends React.Component {
  render() {
    return <div className = 'popin'>
              <Categorylist list = {this.props.list}/>
           </div>;
  }

}
 
export default Categories;
