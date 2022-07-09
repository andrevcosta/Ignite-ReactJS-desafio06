import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { Header } from '../../components/Header';

import hongKongImg from '../../../public/images/Asia/hongkong-image.jpg';
import bangkokImg from '../../../public/images/Asia/bangkok-image.jpg';
import macauImg from '../../../public/images/Asia/macau-image.jpg';
import singaporeImg from '../../../public/images/Asia/singapore-image.jpg';
import dubaiImg from '../../../public/images/Asia/dubai-image.jpg';

export default function Asia() {
  const continentDescription = `
  A Ásia é o maior dos continentes, tanto em área como em população.
  Abrange um terço das partes sólidas da superfície da Terra e é
  responsável por abrigar quase três quintos da população mundial. A Ásia
  faz fronteira no lado ocidental com a África e com a Europa, e no lado
  oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a
  América do Norte, pelo Estreito de Bering.
  `;

  const HongKongImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const BangkokImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const MacauImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const SingaporeImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const DubaiImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/Asia/asia-banner.jpg')"
        text="Ásia"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="50"
          languageCount="60"
          cityCount="54"
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
              <HongKongImage
                src={hongKongImg}
                alt="Hong Kong"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Hong Kong"
                countryName="China"
                countryCode="CN"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <BangkokImage
                src={bangkokImg}
                alt="Bangkok"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Bangkok"
                countryName="Tailândia"
                countryCode="TH"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <MacauImage src={macauImg} alt="Macau" h="173px" w="256px" />

              <CityInfo cityName="Macau" countryName="Macau" countryCode="MO" />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <SingaporeImage
                src={singaporeImg}
                alt="Singapura"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Singapura"
                countryName="Singapura"
                countryCode="SG"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <DubaiImage src={dubaiImg} alt="Dubai" h="173px" w="256px" />

              <CityInfo
                cityName="Dubai"
                countryName="Emirados Árabes"
                countryCode="AE"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
