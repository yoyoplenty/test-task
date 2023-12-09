import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Select, VStack } from "@chakra-ui/react";

const sectorsData = [
  {
    id: 1,
    name: "Sector 1",
    parent: null,
    children: [2, 3],
  },
  {
    id: 2,
    name: "Child Sector 1.1",
    parent: 1,
    children: [],
  },
  {
    id: 3,
    name: "Child Sector 1.2",
    parent: 1,
    children: [4],
  },
  {
    id: 4,
    name: "Child Sector 1.2.1",
    parent: 3,
    children: [],
  },
];

const AddUserSector = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedParentSector, setSelectedParentSector] = useState<any>(null);
  const [selectedChildSector, setSelectedChildSector] = useState(null);

  // Filter sectors based on selected parent sector
  const childSectors = selectedParentSector
    ? sectorsData.filter((sector) => sector.parent === selectedParentSector.id)
    : [];

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <VStack spacing={4} align="start">
        <Heading mb={4}>Add User Sector</Heading>

        <Box>
          <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} mb={4} />
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} mb={4} />
        </Box>

        <Box>
          <Select
            placeholder="Select Parent Sector"
            onChange={(e) => setSelectedParentSector(JSON.parse(e.target.value))}
            mb={4}
          >
            {sectorsData.map((sector) => (
              <option key={sector.id} value={JSON.stringify(sector)}>
                {sector.name}
              </option>
            ))}
          </Select>

          {selectedParentSector && (
            <Select
              placeholder="Select Child Sector"
              onChange={(e) => setSelectedChildSector(JSON.parse(e.target.value))}
              mb={4}
            >
              {childSectors.map((childSector) => (
                <option key={childSector.id} value={JSON.stringify(childSector)}>
                  {childSector.name}
                </option>
              ))}
            </Select>
          )}
        </Box>

        <Button colorScheme="teal" onClick={() => console.log("Add user sector")}>
          Add User Sector
        </Button>
      </VStack>
    </Flex>
  );
};

export default AddUserSector;
