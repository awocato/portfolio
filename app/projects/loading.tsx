import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
  return (
  <div className="container mx-auto flex items-center gap-5 flex-col px-4 py-8">
    <Skeleton className="w-40 h-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-40 md:mx-20 mx-5 lg:grid-cols-3 gap-4">
            <Skeleton className="rounded-md h-96 w-72"/>
            <Skeleton className="rounded-md h-96 w-72"/>
            <Skeleton className="rounded-md h-96 w-72"/>
        </div>
  </div>
  )
}

export default Loading