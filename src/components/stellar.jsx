import { Stack } from "@chakra-ui/react"
import PageFrame from "./PageFrame.jsx"

export default function Stellar({changePage}) {
    return (
        // <Box h="100%" >
        <PageFrame
            title="Stellar classification"
            text="Machine learning classifaction project to determine if visible night sky bodies are stars, quasars, or galaxies 
            using Sloan Digital Sky Survey (SDSS) observational data.
            Implements KNN, random forest, and AdaBoost techniques in R. Completed as coursework for a Machine Learning course at NYU Tandon."
            changePage={changePage}
        >
           <Stack direction="row" spacing={4} pb={4} alignSelf="center" h="100%" w="100%">
                <object 
                    style={{width:"100%", height:"800px"}} 
                    data="/stellar_classification.pdf" 
                    type="application/pdf"
                ></object>
            </Stack>
        </PageFrame>
    )
}