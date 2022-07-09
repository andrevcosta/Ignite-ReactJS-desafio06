import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { Header } from '../../components/Header';

import sydneyImg from '../../../public/images/Oceania/sydney-image.jpg';
import melbourneImg from '../../../public/images/Oceania/melbourne-image.jpg';
import aucklandImg from '../../../public/images/Oceania/auckland-image.jpg';

export default function Oceania() {
  const continentDescription = `
  A Oceania é um continente localizado a sudeste da Ásia, compreendendo um
  conjunto de ilhas somado à Austrália, essa última considerada como uma
  massa continental chamada de “Australásia”. Possui uma área total de
  8.480.355 km², onde habitam aproximadamente 38 milhões de pessoas. Por
  ter sido o último continente a ser colonizado pelos europeus, a Oceania
  é alcunhada de “novíssimo continente”.
  `;

  const SydneyImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const MelbourneImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const AucklandImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/Oceania/oceania-banner.jpg')"
        text="Oceania"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="14"
          languageCount="60"
          cityCount="3"
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
              <SydneyImage src={sydneyImg} alt="Sydney" h="173px" w="256px" />

              <CityInfo
                cityName="Sydney"
                countryName="Austrália"
                countryCode="AU"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <MelbourneImage
                src={melbourneImg}
                alt="Melbourne"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Melbourne"
                countryName="Austrália"
                countryCode="AU"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <AucklandImage
                src={aucklandImg}
                alt="Auckland"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Auckland"
                countryName="Nova Zelândia"
                countryCode="NZ"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
