'use client';

import { Card, CardBody, CardFooter, Divider, Link, Button, Heading, Image, Text, Stack } from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ProjectCard({ name, image, desc, link, srclink }) {
    return (
        <Card maxW="sm">
            <CardBody p={3} pb={2}>
                <Stack direction="row" gap={4}>
                    <Image 
                        src={image} 
                        alt="sorting"
                        boxSize='100px'/>
                    <Stack >
                        <Heading size='md'>{name}</Heading>
                        <Text>{desc}</Text>
                    </Stack>
                    
                </Stack>
            </CardBody>
            
            <Divider />
            <CardFooter p={3} justify="end">
                <Stack direction="row" spacing='4' align="center">
                    {srclink && <Link href={srclink} color="blue.200">
                        View Source <ExternalLinkIcon mx='2px' />
                    </Link>}
                    <Link href={link}>
                        <Button variant='solid' colorScheme='blue'>
                            Visit
                        </Button>
                    </Link>
                </Stack>
            </CardFooter>
        </Card>
    )
}