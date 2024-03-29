import { useState } from 'react';

import { Button, Select, Stack, Flex, useColorModeValue, 
    Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import PageFrame from './PageFrame.jsx';

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
    const [outputNames, setOutputNames] = useState(() => generateNames( NUM_NAMES, ORDER));

    return (
        <PageFrame
            title="Markov chain name generation"
            text="Uses a markov chain to generate stylized names using Javascript."
            changePage={changePage}
        >
            <Stack direction="row" spacing={4} pb={4} alignSelf="center" >
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
                <TableContainer  bgColor={useColorModeValue("gray.100", "gray.900")} flex="1">
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
        </PageFrame>
    )
}