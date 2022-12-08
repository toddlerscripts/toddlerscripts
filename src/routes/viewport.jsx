import { useEffect, useState } from 'react';
import {
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export default function Viewport() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Center>
      <TableContainer width='100%'>
        <Table variant='simple' size='sm'>
          <Thead>
            <Tr>
              <Th>Area</Th>
              <Th>Width</Th>
              <Th>Height</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Screen</Td>
              <Td>{screen.width}</Td>
              <Td>{screen.height}</Td>
            </Tr>
            <Tr>
              <Td>Screen (available)</Td>
              <Td>{screen.availWidth}</Td>
              <Td>{screen.availHeight}</Td>
            </Tr>
            <Tr>
              <Td>Window</Td>
              <Td>{window.innerWidth}</Td>
              <Td>{window.innerHeight}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}
