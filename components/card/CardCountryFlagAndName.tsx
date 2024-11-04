import { findCountryByCode } from "@/utils/countries"

interface CardCountryFlagAndNameProps {
  countryCode: string
}


export const CardCountryFlagAndName = ({countryCode}: CardCountryFlagAndNameProps) => {
  const validCountry = findCountryByCode(countryCode)
  if(!validCountry) {
    return
  }
  const countryName = validCountry?.name.length > 20 ? `${validCountry?.name.substring(0, 20)}...` : validCountry.name
  return (
   <span className="flex justify-between items-cnter gap-2 text-sm" >
    {validCountry.flag} {countryName}
   </span>
  )
}
