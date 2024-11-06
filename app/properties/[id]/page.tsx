 

import { fetchPropertyDetails } from "@/utils/actions"
import { redirect } from "next/navigation"
import { BreadCrumbs } from "../BreadCrumbs"
import { CardFavoriteToggleButton } from "@/components/card/CardFavoriteToggleButton"
import { ShareButton } from "../ShareButton"

interface PropertyDetailsPageProps {
    params: {
        id: string
    }
}


async function PropertyDetailsPage ({params}: PropertyDetailsPageProps) {
    const property = await fetchPropertyDetails(params.id)
    if(!property) {
        redirect("/")
    }
    const {} = property
    return <section>
        <BreadCrumbs  name={property.name}/>
        <header className="flex justify-between items-center mt-4" >
            <h1 className="text-4xl font-bold capitalize" >{property.tagline}</h1>
            <div className="flex items-center gap-x-4">
                <ShareButton name={property.name} propertyId={property.id} />
                <CardFavoriteToggleButton propertyId={property.id} />
            </div>
        </header>
    </section>
}

export default PropertyDetailsPage