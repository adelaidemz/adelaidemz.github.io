import { Box, Stack, Button, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function PageFrame({title, text, changePage, children}) {
    return (
        <Box display="flex" flexDirection="column" w="100%">
            <Stack 
                spacing={3} 
                pb={4}
                alignItems="start" 
                bgColor={useColorModeValue("white", "gray.800")}
                sx={{ position: 'sticky', top: '0', }}
                zIndex="sticky"
            >
                <Button
                    variant="link"
                    onClick={changePage}
                    
                    leftIcon={<ChevronLeftIcon/>}
                >
                    Back
                </Button>

                <Heading size="lg">{title}</Heading>
                <Text>{text}</Text>

            </Stack>

            { children }
        </Box>
    )
}