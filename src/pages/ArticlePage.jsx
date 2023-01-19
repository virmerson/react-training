import { Fragment } from "react"
import { useParams } from "react-router-dom"
import articles from './article-content'

const ArticlePage = ()=> {
    const {articleId} =  useParams()
    
   const article =  articles.find ( (a)=> a.name === articleId )

  
    return (
    <>
        <h1> {article.title} </h1>
        {article.content.map( (paragraph , index ) => (
            <p key={index} > {paragraph} </p>
        ))}
    </>
    )
}

export default ArticlePage;