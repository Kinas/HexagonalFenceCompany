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
    super(props)
    this.state={
      categories: this.props.changeSet.category_type
    }
  }
  render() {
    return (<tr className="tableRow">
              <td id={this.props.changeSet.id}> 
                {this.props.changeSet.name}
                { (this.props.stateInfo.target === this.props.changeSet.id)? 
                  (<Items className="categoryList" categories={this.state.categories}/>
                  ) : ''}
              </td>
            </tr>
           );
  }
}

class Rows extends React.Component {
  constructor(){
    super()
    this.state={
      target: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick(e){
    const targetID = e.target.id;
    this.setState({
      target: targetID
    });
  }
  render() {
    const stateInfo = this.state;
    const rows = this.props.changeSets.map(function(changeSet, i) {
      return(<Row changeSet = {changeSet} key={i} stateInfo={stateInfo}/> );
    });
    return <tbody onClick={this.handleOnClick}>{rows}</tbody>;
  }

}

// creates a table with the given data
class Reacttable extends React.Component { 
  // no need for super(pros) => just needed when you want to access this.props in constructor
  constructor() {
      super();
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
