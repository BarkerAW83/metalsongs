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
  console.log('SEARCH - EACH SEARCH CLICK', this.state.textInput)
//   `http://em.wemakesites.net/search/song_title/{this.state.textInput}?api_key=0b397ce4-1961-401b-92dd-a1226c118f17`
  this.props.onSearch(this.state.textInput);
}


handleChange(event){
//   console.log('HANDLE CHANGE - EACH KEYPRESS', this.state.textInput)
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