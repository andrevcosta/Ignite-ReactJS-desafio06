import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { Header } from '../../components/Header';

import newYorkImg from '../../../public/images/NorthAmerica/newyork-image.jpg';
import miamiImg from '../../../public/images/NorthAmerica/miami-image.jpg';
import losAngelesImg from '../../../public/images/NorthAmerica/losangeles-image.jpg';
import lasVegasImg from '../../../public/images/NorthAmerica/lasvegas-image.jpg';
import cancunImg from '../../../public/images/NorthAmerica/cancun-image.jpg';

export default function NorthAmerica() {
  const continentDescription = `
  A América do Norte é um subcontinente que compreende a porção
  setentrional do continente americano. O subcontinente é limitado a norte
  pelo Oceano Glacial Ártico, a leste pelo Oceano Atlântico, a sul pela
  América do Sul e a oeste pelo oceano Pacífico
  `;

  const NewYorkImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const MiamiImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const LosAngelesImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const LasVegasImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const CancunImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/NorthAmerica/northamerica-banner.jpg')"
        text="América do Norte"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="23"
          languageCount="60"
          cityCount="10"
        />

        <Box mt="80px">
          <Heading
            color="brand.gray-400"
            fontWeight="500"
            fontSize={['24px', '36px']}
            mb={['20px', '40px']}
          >
            Cidades +100
          </Heading>

          <SimpleGrid minChildWidth="256px" gap="4" alignItems="center">
            <Flex flexDirection="column" w="256px">
              <NewYorkImage
                src={newYorkImg}
                alt="Nova Iorque"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Nova Iorque"
                countryName="Estados Unidos"
                countryCode="US"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <MiamiImage src={miamiImg} alt="Miami" h="173px" w="256px" />

              <CityInfo
                cityName="Miami"
                countryName="Estados Unidos"
                countryCode="US"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <LosAngelesImage
                src={losAngelesImg}
                alt="Los Angeles"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Los Angeles"
                countryName="Estados Unidos"
                countryCode="US"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <LasVegasImage
                src={lasVegasImg}
                alt="Las Vegas"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Las Vegas"
                countryName="Estados Unidos"
                countryCode="US"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <CancunImage src={cancunImg} alt="Cancun" h="173px" w="256px" />

              <CityInfo
                cityName="Cancun"
                countryName="México"
                countryCode="MX"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
