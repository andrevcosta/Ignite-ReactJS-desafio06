import { Box, chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

import { ContinentBanner } from '../../components/Banners/ContinentBanner';
import { CityInfo } from '../../components/ContinentInfo/CityInfo';
import { ContinentInfo } from '../../components/ContinentInfo/ContinentInfo';
import { Header } from '../../components/Header';

import buenosAiresImg from '../../../public/images/SouthAmerica/buenosaires-image.jpg';
import limaImg from '../../../public/images/SouthAmerica/lima-image.jpg';
import rioDeJaneiroImg from '../../../public/images/SouthAmerica/riodejaneiro-image.jpg';

export default function SouthAmerica() {
  const continentDescription = `
  A América do Sul é um continente que compreende a porção
  meridional da América. Também é considerada um subcontinente do
  continente americano. A sua extensão é de 17 819 100 km²,
  abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se
  à América Central a norte pelo istmo do Panamá e se separa da Antártida
  ao sul pelo estreito de Drake.
  `;

  const BuenosAiresImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const LimaImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  const RioDeJaneiroImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
    <>
      <Header hasNavigation />

      <ContinentBanner
        backgroundImage="url('/images/SouthAmerica/southamerica-banner.jpg')"
        text="América do Sul"
      />

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <ContinentInfo
          description={continentDescription}
          countryCount="12"
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
              <BuenosAiresImage
                src={buenosAiresImg}
                alt="Buenos Aires"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Buenos Aires"
                countryName="Argentina"
                countryCode="AR"
              />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <LimaImage src={limaImg} alt="Lima" h="173px" w="256px" />

              <CityInfo cityName="Lima" countryName="Peru" countryCode="PE" />
            </Flex>

            <Flex flexDirection="column" w="256px">
              <RioDeJaneiroImage
                src={rioDeJaneiroImg}
                alt="Rio de Janeiro"
                h="173px"
                w="256px"
              />

              <CityInfo
                cityName="Rio de Janeiro"
                countryName="Brasil"
                countryCode="BR"
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
