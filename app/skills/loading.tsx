import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="container mx-auto flex items-center gap-5 flex-col px-4 py-8">
      <Skeleton className="w-40 h-10" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-4 lg:mx-20 sm:mx-20 xl:mx-36">
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28  md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28  md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md  w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-mdw-28  md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
        <Skeleton className="rounded-md w-28 md:w-48  justify-self-center h-32 md:h-48 m-2" />
      </div>
    </div>
  );
}

export default Loading;
