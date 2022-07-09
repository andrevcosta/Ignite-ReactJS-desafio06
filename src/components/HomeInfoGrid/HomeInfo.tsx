import { SimpleGrid } from '@chakra-ui/react';

import { FaCocktail } from 'react-icons/fa';
import { GiSurfBoard } from 'react-icons/gi';
import { FaRegBuilding } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { GiEarthAmerica } from 'react-icons/gi';
import { HomeInfoItem } from './HomeInfoItem';

export function HomeInfo() {
  return (
    <SimpleGrid
      maxW="1160px"
      mx="auto"
      mt={['36px', '80px']}
      px={['30px', 'unset']}
      minChildWidth={['110px', '158px']}
      gap={['2', '4']}
      alignItems="center"
    >
      <HomeInfoItem icon={FaCocktail} text="vida noturna" />

      <HomeInfoItem icon={GiSurfBoard} text="praia" />

      <HomeInfoItem icon={FaRegBuilding} text="moderno" />

      <HomeInfoItem icon={GiGreekTemple} text="clássico" />

      <HomeInfoItem icon={GiEarthAmerica} text="e mais..." />
    </SimpleGrid>
  );
}
