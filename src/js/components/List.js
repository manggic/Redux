


import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{ articles  : state.articles }    
}


const ConnectedList = ({ articles }) => {
    return (
        <ul>
            {articles.map(article => <li key={ article.title} >{ article.title }</li> )}
        </ul>  
     ) 
}

const List = connect(mapStateToProps)(ConnectedList)

export default List


