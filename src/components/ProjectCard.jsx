'use client';

import { Card, CardBody, CardFooter, Divider, Link, Button, Heading, Image, Text, Stack } from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ProjectCard({ name, category, image, desc, link, srclink, handleNewPage }) {
    return (
        <Card maxW="md">
            <CardBody p={4} pb={3}>
                <Stack direction="row" gap={4}>
                    <Image 
                        src={image} 
                        alt="sorting"
                        boxSize='120px'/>
                    <Stack>
                        <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="sm"
                            letterSpacing="wide"
                            color="teal.600"
                            >
                            {category}
                        </Text>
                        <Heading size='md'>{name}</Heading>
                        <Text>{desc}</Text>
                    </Stack>
                    
                </Stack>
            </CardBody>
            
            <Divider />
            <CardFooter px={4} py={3} justify="end">
                <Stack direction="row" spacing='4' align="center">
                    {/* {srclink && <Link href={srclink} color="blue.200">
                        Source <ExternalLinkIcon mx='2px' />
                    </Link>} */}

                    {link === "component" 
                        ? <Button variant='solid' colorScheme='blue' onClick={handleNewPage}> 
                            View
                        </Button>
                        : <Button as='a' variant='solid' colorScheme='blue' href={link}>
                            View <ExternalLinkIcon ml='6px' />
                        </Button>
                    }
                        

                </Stack>
            </CardFooter>
        </Card>
    )
}