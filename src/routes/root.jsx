import { useRef } from 'react';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  SimpleGrid,
  VStack,
  Wrap,
  WrapItem,
  UnorderedList,
} from '@chakra-ui/react';
import useFetchToddlers from '.././hooks/useFetchToddlers';

export default function Root() {
  const isComponentMounted = useRef(true);
  const { loading, error, data } = useFetchToddlers(isComponentMounted);
  if (loading) return <p>Loading data . . .</p>;

  let allNames = [];
  function getToddlerList() {
    data.forEach(pushNames);
    allNames.shift();
  }

  function pushNames(item) {
    allNames.push(item[1]);
  }
  getToddlerList();

  const TODDLERS = [...new Set(allNames)];

  return (
    <Center>
      <VStack>
        <Heading fontSize='2rem'>Toddler Scripts</Heading> <br />
        <SimpleGrid fontSize='2rem' columns={3} spacing={4}>
          {TODDLERS.map((toddler) => (
            <Box fontSize='2rem' key={toddler}>
              <Link href={`${toddler}`}>{toddler}</Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
}
