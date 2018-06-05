import React from 'react';
import ReactDOM from 'react-dom';
import Reacttable from './reacttable.js';

import categories from './category_list.json';
import compcat  from './category_per_company.json';
import companies from './company_list.json';
//get data from data file(s)
function getInfo(){
  let data=[];
  //companies
  for (const key of Object.keys(companies)) {
    let compType= compcat[key];
    let categoryList=[];
    //categories
    for (const i of Object.keys(compType)) {
      if(compType[i] === 1){
          categoryList.push(categories[i].title);
      };
    }
    data.push({
      name: companies[key].title,
      id: key,
      category_type: categoryList
    });
  }  
  return data;
}
var companiesData = getInfo();

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

ReactDOM.render(<Container />, document.getElementById('table-body'));
 

