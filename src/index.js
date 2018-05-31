import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reacttable from './reacttable'
import companies from './companies';
import categories from './categories.js';
import compcat  from './category_per_company.js';
//get data from data file(s)
/*
@param dataOject: JSON Object
*/
function getInfo(dataObject){
  var data=[];
  for (const key of Object.keys(dataObject)) {
      data.push({
      name: dataObject[key].title,
      id: key
    });
  }
  return data
}
var companiesData = getInfo(companies);
var categoriesData =getInfo(categories);
var compcatData = getInfo(compcat);

console.log(categoriesData)
console.log(compcatData)

class Container extends React.Component {
  //constructs the state of the class
  constructor(props) {
    super(props);
    this.state = {
        data: companiesData
    };  
  }

//render the container with the table
  render() {
    return (
      <div className="React-table">
          <Reacttable changeSets={this.state.data} />
      </div>
    );
  }
}


// =================================

ReactDOM.render(<Container />, document.getElementById('body'));



 