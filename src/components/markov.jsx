import { useState } from 'react';

import { Button, Heading, Select, Stack, Flex } from "@chakra-ui/react"
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

import data from '../data/markov-names.json';
import { generateNames } from '../js/markov.js';

const ORDER = 2;
const NUM_NAMES = 100;

let input_names = [];

for (let i = 0; i < data.first_names.length; i++) {
    let name = { 
        "first" : data.first_names[i], 
        "last" : data.last_names[i] 
    };
    input_names.push(name);

    // console.log(name)
}

const blacklist_names = data.blacklist;

export default function Markov({changePage}) {
    // let input_names = [];
    const [outputNames, setOutputNames] = useState(() => generateNames( NUM_NAMES, ORDER));
    // useEffect(() => {
        
    // }, []);

    return (
        <>
            <Stack spacing={3} my={8} alignItems="start" >
                <Button
                    variant="link"
                    onClick={() => changePage(0)}
                ><ChevronLeftIcon mr="5px"/>Back
                </Button>

                <Heading size="lg">Markov chain name generation</Heading>
                <p>Uses a markov chain to generate stylized names using Javascript.</p>

                <Stack direction="row" spacing={4} alignSelf="center" >
                    <Select placeholder='Select name theme'>
                        <option value='option1'>Fantasy</option>
                        <option value='option2'>(Coming soon)</option>
                    </Select>

                    <Button 
                        w="100%"
                        colorScheme='blue'
                        onClick={() => setOutputNames(generateNames(NUM_NAMES, ORDER))}
                    >
                        Regenerate names
                    </Button>
                </Stack>
            </Stack>

            <Flex 
                direction="row"
            >
                {/* Input Names */}
                <TableContainer >
                    <Table mr="50px">
                        <Thead>
                            <Tr>
                                <Th>First names</Th>
                                <Th>Last names</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {input_names.map((name) => (
                                <Tr>
                                    <Td>{name.first}</Td>
                                    <Td>{name.last}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>

                {/* Blacklisted names */}
                <TableContainer>
                    <Table mr="100px">
                        <Thead>
                            <Tr>
                                <Th>Blacklist</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {blacklist_names.map((name) => (
                                <Tr>
                                    <Td>{name}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>

                {/* Output names */}
                <TableContainer bgColor="gray.100" flex="1">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Output names</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {outputNames.map((name) => (
                                <Tr>
                                    <Td>{name}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </>
    )
}