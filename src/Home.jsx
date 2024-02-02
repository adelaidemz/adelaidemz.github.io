import cards from './data/page-info.json';
import ProjectCard from "./components/ProjectCard.jsx";
import Resume from "./components/resume.jsx";
import Markov from "./components/markov.jsx";
import Stellar from "./components/stellar.jsx";

import { useState } from 'react';
import { Button, Box, Container, Heading, IconButton, SimpleGrid, Stack,
Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Collapse, Slide, useDisclosure } from '@chakra-ui/react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';


const componentPages = {
    0: ProjectsResume,
    1: Stellar,
    2: Markov,
}

export default function Home() {    
    const [Page, setPage] = useState(() => ProjectsResume);
    const { isOpen, onToggle } = useDisclosure({defaultIsOpen: true});

    return (
        <Container maxW={{base: "95%", md: "80%", xl: "70%"}} 
            h="100%" 
            pt={isOpen ? 20 : 5} 
            centerContent
        >
            <Heading 
                size={isOpen ? "3xl" : "lg"}
                alignSelf={isOpen ? "" : "end"}
                mb={2}
                fontFamily={"Aquawax Pro Trial, sans-serif"}
                fontWeight="semiBold"
                letterSpacing="wide"
                sx={{ "transitionProperty": "all", "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "transitionDuration": "300ms"}}
            // >ADELAIDE ZHANG</Heading>
             >Adelaide Zhang</Heading> 

            <Collapse in={isOpen} startingHeight={10} animateOpacity >
                <Stack direction="row" spacing={4} py={6}>
                    <Button as="a" 
                        fontWeight='light'
                        borderRadius={50} 
                        href="https://github.com/adelaidemz/"
                    >
                        Github <ExternalLinkIcon ml={2}/>
                    </Button>
                    <Button as="a" 
                        fontWeight='light'
                        borderRadius={50} 
                        href="https://www.linkedin.com/in/adelaide-zhang"
                    >
                        LinkedIn <ExternalLinkIcon ml={2}/>
                    </Button>
                    <IconButton as="a" isRound icon={<EmailIcon/>} href="mailto:adelaidemzhang@gmail.com"/>
                </Stack>
            </Collapse>

            <Box overflowY="scroll" h="100%" w="100%" position="relative">
                <Slide in={isOpen} direction="left" style={{position: "absolute"}}>
                    <ProjectsResume 
                        changePage={(page) => { 
                            setPage(() => componentPages[page]);
                            onToggle();
                        }}
                    />
                </Slide>
                <Slide in={!isOpen} style={{position: "absolute"}}>
                    <Page 
                        changePage={onToggle}
                    />
                </Slide>
            </Box>

            {/* <Container centerContent>
                <Text as="a" fontSize="sm" role="contentinfo" color="gray.500" href="https://github.com/adelaidemz">© 2024 Adelaide Zhang</Text>
            </Container> */}
        </Container>
    );
}

function ProjectsResume({ changePage }) {
    return (
        <Tabs isFitted>
            <TabList mb={5} 
                zIndex="sticky" 
                bgColor={useColorModeValue("whiteAlpha.900", "gray.800")}
                sx={{ position: 'sticky', top: '0', }}
            >
                <Tab>Projects</Tab>
                <Tab>Resume</Tab>
            </TabList>

            <TabPanels>
                <TabPanel p={1} >
                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={5} justifyItems="center">
                        {cards.map((card) => (
                            <ProjectCard
                                key={card.id}
                                name={card.title}
                                category={card.category}
                                image={card.image}
                                desc={card.text}
                                link={card.link}
                                srclink={card.source_link}
                                handleNewPage={() => changePage(card.id)}
                            />
                        ))}
                    </SimpleGrid>
                </TabPanel>
                <TabPanel>
                    <Resume />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}