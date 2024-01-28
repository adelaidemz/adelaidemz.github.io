import cards from './data/page-info.json';

export default function Home() {    
    return (
        <Stack w={{base: "95%", md: "80%", lg: "65%"}} m="auto" pt={20} align="center">
            <Heading>Adelaide Zhang</Heading>
            <Text >This page is a work in progress</Text>

            <Stack direction="row" spacing={4} pt={6}>
                <Button as="a" borderRadius={50} href="https://github.com/adelaidemz/">
                    Github <ExternalLinkIcon ml={2}/>
                </Button>
                <Button as="a" borderRadius={50} href="https://www.linkedin.com/in/adelaide-zhang">
                    LinkedIn <ExternalLinkIcon ml={2}/>
                </Button>
                <IconButton as="a" isRound icon={<EmailIcon/>} href="mailto:adelaidemzhang@gmail.com"/>
            </Stack>

            <Tabs isFitted>
                <TabList m={4}>
                    <Tab>Projects</Tab>
                    <Tab>Resume</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={4}>
                        <SimpleGrid columns={{base: 1, lg: 2}} spacing={5}>
                            {cards.map((card) => (
                                <ProjectCard
                                    key={card.title}
                                    name={card.title}
                                    image={card.image}
                                    desc={card.text}
                                    link={card.link}
                                    srclink={card.source_link} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Resume />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Stack>
    );
}