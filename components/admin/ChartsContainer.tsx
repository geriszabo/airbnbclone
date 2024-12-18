import { fetchChartsData } from "@/utils/actions"
import { Chart } from "./Chart"


export const ChartsContainer = async () => {
  const bookings = await fetchChartsData()
  if(bookings.length === 0) {
    return null
  }
  return (<>
    <Chart data={bookings} />
  </>
  )
}
