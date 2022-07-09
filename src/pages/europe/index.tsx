import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';

import londonImg from '../../../public/images/Europe/london-image.png';
import parisImg from '../../../public/images/Europe/paris-image.png';
import romeImg from '../../../public/images/Europe/rome-image.png';
import pragueImg from '../../../public/images/Europe/prague-image.png';
import amsterdamImg from '../../../public/images/Europe/amsterdam-image.png';

export default function Europe() {
  const continentDescription = `
  A Europa é, por convenção, um dos seis continentes do mundo.
  Compreendendo a península ocidental da Eurásia, a Europa geralmente
  divide-se da Ásia a leste pela divisória de águas dos montes Urais,
  o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
  `;

  const LondonImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const ParisImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const RomeImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const PragueImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const AmsterdamImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/Europe/europe-banner.png')"
        text="Europa"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="50"
          languageCount="60"
          cityCount="27"
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
              <LondonImage src={londonImg} alt="Londres" h="173px" w="256px" />

              <CityInfo
                cityName="Londres"
                countryName="Reino Unido"
                countryCode="GB"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <ParisImage src={parisImg} alt="Paris" h="173px" w="256px" />

              <CityInfo
                cityName="Paris"
                countryName="França"
                countryCode="FR"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <RomeImage src={romeImg} alt="Roma" h="173px" w="256px" />

              <CityInfo cityName="Roma" countryName="Itália" countryCode="IT" />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <PragueImage src={pragueImg} alt="Praga" h="173px" w="256px" />

              <CityInfo
                cityName="Praga"
                countryName="República Techeca"
                countryCode="CZ"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <AmsterdamImage
                src={amsterdamImg}
                alt="Amsterdã"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Amsterdã"
                countryName="Holanda"
                countryCode="NL"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
