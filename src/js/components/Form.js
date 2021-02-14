

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'

function mapDispatchToProps( dispatch ) {
    return {
        addArticle: function(article) {
            dispatch(addArticle(article))
        }
   } 
}

class ConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
              title : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    handleChange(event) {
        this.setState({
             title : event.target.value
         })  
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addArticle(this.state)
        this.setState({
            title : ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        id='title'
                        value={this.state.title}
                        onChange={ this.handleChange }  />
                </div>
                <button type='submit'>SAVE</button>
            </form>
       )
   }

}


const Form = connect(null,mapDispatchToProps)(ConnectedForm)
export default Form;
