import { Skeleton } from "../ui/skeleton"

interface LoadingTableProps {
    rows?: number
}

export const LoadingTable = ({rows}: LoadingTableProps) => {
    const tableRows = Array.from({length: rows || 5}, (_, index) => {
        return <div className="mb-4" key={index}>
            <Skeleton className="w-full h-8 rounded"/>
        </div>
    })
  return (
    <>
    {tableRows}
    </>
  )
}
