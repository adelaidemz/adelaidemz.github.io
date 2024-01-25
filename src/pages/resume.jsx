import { Heading, SimpleGrid, Text, Stack, UnorderedList, ListItem } from '@chakra-ui/react'

export default function Resume() {
    return (
        <Stack align="start">
            <Heading size="lg">Education</Heading>
            <SimpleGrid columns={2} columnGap={10} rowGap={2}>
                <Text as='b'>Master's in Computer Science</Text>
                <Text>New York University</Text>
            {/* </Stack>
            <Stack direction="row"> */}
                <Text as='b'>Bachelor of Fine Arts</Text>
                <Text>Carnegie Mellon University</Text>
            </SimpleGrid>
            

            <Heading size="lg" pt={4}>Experience</Heading>
            <Text as='b'>Research Assistant</Text>
            <Text as='i'>NYU Music & Audio Research Laboratory / New York, NY</Text>
            <Text>Led data collection for a pilot study regarding subway noise levels, covering 30 NYC subway stations</Text>
            <UnorderedList>
                <ListItem>Collected audio level data and real-time annotations, and incorporated metadata, resulting in a comprehensive dataset of 32K observations</ListItem>
                <ListItem>Utilized Python and R to perform statistical analyses and determine patterns of loudness</ListItem>
            </UnorderedList>

            <Text as='b' pt={4}>Software Engineer - Electronic Libretto System</Text>
            <Text as='i'>The Santa Fe Opera / Santa Fe, NM</Text>
            <Text>Developed and maintained software for Electronic Libretto System, enabling simultaneous display of 
                translated opera titles on ~2300 networked single-board computers</Text>
            <UnorderedList>
                <ListItem>Created Linux application using C++ and Qt for database editing and real-time performance control</ListItem>
                <ListItem>Created UI and UX for patron interaction, cross-compiled image for Raspberry Pi based hardware</ListItem>
                <ListItem>Wrote Bash scripts to query units, start remote processes, and perform functionality tests</ListItem>
                <ListItem>Documented progress during the development process and wrote user guide for future operators</ListItem>
            </UnorderedList>

            <Heading size="lg" pt={4}>Skills</Heading>
            <Text as='b'>Languages</Text>
            <Text>Python, JavaScript, TypeScript, Bash, C++, R, SQL</Text>
            <Text as='b'>Tools & Frameworks</Text>
            <Text>Git, Qt, Linux, React, Next.js, Vue, Firebase, Agile (Scrum)</Text>
        </Stack>
    )
}