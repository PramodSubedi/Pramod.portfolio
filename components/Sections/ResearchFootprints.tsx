import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ResearchMap from "./ResearchMap";


export default function ResearchFootprint(){

return (

<Section id="research-footprint">

<SectionHeading
            title="Research Footprint Across Nepal"
            description="Mapping hazards, forests and landscapes through GIS and Remote Sensing." eyebrow={""}/>


<div className="mt-10">

<ResearchMap />

</div>

</Section>

)

}