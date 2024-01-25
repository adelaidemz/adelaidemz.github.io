import ProjectCard from "./ProjectCard.jsx"
import { Heading, SimpleGrid, Text, VStack,
Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const cards = [
    { title: 'Sorting hues', 
      image: '/sorting-card-img.png',
      text: 'A colorful visualizer of some iterative sorting algorithms. React, Typescript, and Vite', 
      link: 'https://adelaidemz.github.io/sorting', 
      source_link: 'https://github.com/adelaidemz/sorting',
      },
    { title: 'Stellar classification', 
      image: '/rpart-dt.png',
      text: `Machine learning project to classify visible night sky bodies 
       (KNN, random forest, AdaBoost)`, 
      link: 'pages/stellar',
      },
    { title: 'Markov chain name generation', 
        image: '/markov.png',
        text: 'Using a markov chain to generate new stylized names using Javascript.', 
        link: 'pages/markov', 
      },
    { title: 'API Microservices (FreeCodeCamp)', 
        image: '/fcc.png',
        text: 'Projects for FreeCodeCamp\'s Backend Development and APIs course. Node and Express, hosted on Render.', 
        link: 'https://microservices-fcc-ejkz.onrender.com', 
      },
    { title: 'Artist collabs (WIP)', 
      image: '/collab-card-img.png',
      text: 'Network view of musical artist collaborations. React and D3.', 
      link: 'https://adelaidemz.github.io/artist-collab', 
      source_link: 'https://github.com/adelaidemz/artist-collab',
      },
  ]

export default function Home() {    
    return (
        <VStack pt={20} >
            <Heading>Adelaide Zhang</Heading>
            <Text >This page is a work in progress</Text>

            <Tabs isFitted>
                <TabList m={5}>
                    <Tab>Projects</Tab>
                    <Tab>Resume</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel w="3xl">
                        <SimpleGrid columns={2} spacing={5}>
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
                    <TabPanel w="3xl">
                        <p>Resume here</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </VStack>
    );
}