import { FileX2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const NoArticleFound = () => {
  return (
    <Card className="w-full max-w-md mt-5">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
          <FileX2 className="h-6 w-6 text-muted-foreground" />
        </div>
        <CardTitle>No Article Found</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          We couldn't find any articles matching your search criteria. Please try again with different keywords.
        </p>
      </CardContent>
    </Card>
  )
}

export default NoArticleFound