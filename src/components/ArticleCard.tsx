import Highlight from "@/components/Highlight"
import { Article } from "@/types/article"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"

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
    <Card className='w-full flex-1 space-y-2 shadow-none border-none'>
      <CardHeader>
        <h1 className='text-lg font-semibold text-gray-900'>
          <Highlight text={article.title} pattern={pattern} />
        </h1>
        <p className='text-sm font-medium text-gray-600'>
          {transformedDate}
        </p>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <div className='prose prose-sm text-gray-500 line-clamp-3'>
            <Highlight text={article.description} pattern={pattern} />
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ArticleCard