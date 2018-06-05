import React from 'react';

class Heading extends React.Component {
  render() {
    return <th>{this.props.heading}</th>;
  }
}

class Headings extends React.Component {
  render() {
    var headings = this.props.headings.map(function(name, i) {
      return <Heading heading = {name} key={i}/>;
    });
   return <thead><tr className="table-heading">{headings}</tr></thead>;
  }
}
  
class Items extends React.Component{
  render(){
    var items = this.props.categories.map(function(categories, i) {
      return(<li key={i}>{categories}</li>);
    });
    return <ul>{items}</ul>;

  }
}

class Row extends React.Component {
  constructor(props){
    super(props);
    this.state={
      categories: [],
      popupVisible: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOnClick(){
    if(!this.state.popupVisible){
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState (prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if(this.node.contains(e.target)) {
      return;
    }
    this.handleOnClick();
  }

  render() {
    console.log()
    return (<tr className="tableRow">
              <td onClick={this.handleOnClick} id={this.props.changeSet.id} ref={node => { this.node = node; }}> 
                {this.props.changeSet.name} 
                {this.state.popupVisible && (<Items className="categoryList" categories={this.props.changeSet.category_type}/>
                  )}
              </td>
            </tr>
           );
  }
}

class Rows extends React.Component {
  render() {
    var rows = this.props.changeSets.map(function(changeSet, i) {
      return(<Row changeSet = {changeSet} key={i} />);
    });
    return <tbody>{rows}</tbody>;
  }

}

// creates a table with the given data
class Reacttable extends React.Component { 
  constructor(props) {
      super(props);
      this.state = {
        headings: ['Name of Insurance Companies']
    };
  
  }      
  render() {
    return <table className = 'table'>
             <Headings headings = {this.state.headings} />
             <Rows changeSets = {this.props.changeSets}/>
           </table>;
  }

}
 
export default Reacttable;
