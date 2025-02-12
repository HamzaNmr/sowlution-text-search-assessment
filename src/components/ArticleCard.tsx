import Highlight from "@/components/Highlight"
import { Article } from "@/types/article"

interface ArticleProps {
    article: Article,
    pattern: RegExp,
}
const ArticleCard = ({ article, pattern }: ArticleProps) => {

  const transformedDate = new Date(article.publishDate)
                          .toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: '2-digit' 
                          })

  return (
    <div className='w-full flex-1 space-y-2 py-1'>
      <h1 className='text-lg font-semibold text-gray-900'>
        <Highlight text={article.title} pattern={pattern} />
      </h1>
      <p className='text-base font-medium text-gray-600 mb-5'>
        {transformedDate}
      </p>
      <div className='prose prose-sm text-gray-500 line-clamp-3'>
        <Highlight text={article.description} pattern={pattern} />
      </div>
    </div>
  )
}

export default ArticleCard