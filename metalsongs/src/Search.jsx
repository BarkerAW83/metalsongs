import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textInput: ''
    }
    this.search = this.search.bind(this);
  this.onChange = this.onChange.bind(this);   
  this.handleChange = this.handleChange.bind(this); 
}

onChange (e){
  this.setState({
    textInput: e.target.value
  });
}

search(){
  this.props.onSearch(this.state.textInput);
}

handleChange(event){
  this.setState({
    textInput: event.target.value
  });
}

render(){
  return(<div>
    <input value={this.state.textInputs} onChange={this.handleChange}/>
      <button onClick={this.search}> UNHOLY SUBMISSIONS</button>
    </div>)
  }
}

export default Search;