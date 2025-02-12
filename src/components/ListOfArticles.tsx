import { Article } from '@/types/article'
import ArticleCard from './ArticleCard'
import NoArticleFound from './NoArticleFound'

interface ListOfArticlesProps {
    articles: Article[],
    pattern: RegExp,
}

const ListOfArticles = ({ articles, pattern }: ListOfArticlesProps) => {4
  
  if(articles.length === 0) {
    return <NoArticleFound />
  }

  return (
  <div>
    <h2 className='my-5 text-gray-800 '>
      <span className='font-semibold'>{articles.length} articles</span> were found.
    </h2>
    <ul className='divide-y divide-zinc-200 bg-white shadow-md rounded-b-md rounded-md'>
      {articles.map((article: Article) => (
        <li 
          key={article.id}
          className='mx-auto flex space-x-4'  
          role="presentation"
        >
            <ArticleCard 
              article={article}  
              pattern={pattern} 
            />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ListOfArticles