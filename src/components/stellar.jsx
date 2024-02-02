import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

export default function Stellar({changePage}) {
    return (
        <Box h="100%" >
            <Stack spacing={3} my={3} alignItems="start" >
                <Button
                    variant="link"
                    onClick={changePage}
                ><ChevronLeftIcon mr="5px"/>Back
                </Button>

                <Heading size="lg" >Stellar classification</Heading>
                <Text>Machine learning classifaction project to determine if visible night sky bodies are stars, quasars, or galaxies 
                    using Sloan Digital Sky Survey (SDSS) observational data.
                    Implements KNN, random forest, and AdaBoost techniques in R. Completed as coursework for a Machine Learning course at NYU Tandon.
                </Text>
            </Stack>
            <object style={{width:"100%", height:"600px"}} data="/stellar_classification.pdf" type="application/pdf" ></object>
        </Box>
    )
}