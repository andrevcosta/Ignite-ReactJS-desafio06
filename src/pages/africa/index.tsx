import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { Header } from '../../components/Header';

import cairoImg from '../../../public/images/Africa/cairo-image.jpg';
import johannesburgImg from '../../../public/images/Africa/johannesburg-image.jpg';
import hurghadaImg from '../../../public/images/Africa/hurghada-image.jpg';

export default function Africa() {
  const continentDescription = `
  A África é o terceiro continente mais extenso (depois da Ásia e das
  Américas) com cerca de 30 milhões de quilômetros quadrados, cobrindo
  20,3% da área total da terra firme do planeta. É o segundo continente
  mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de
  pessoas, representando cerca de um sétimo da população mundial, e 54
  países independentes.
  `;

  const CairoImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const JohannesburgImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const HurghadaImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/Africa/africa-banner.jpg')"
        text="África"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="54"
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
              <CairoImage src={cairoImg} alt="Cairo" h="173px" w="256px" />

              <CityInfo cityName="Cairo" countryName="Egito" countryCode="EG" />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <JohannesburgImage
                src={johannesburgImg}
                alt="Joanesburgo"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Joanesburgo"
                countryName="África do Sul"
                countryCode="ZA"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <HurghadaImage
                src={hurghadaImg}
                alt="Hurghada"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Hurghada"
                countryName="Egito"
                countryCode="EG"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
