import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import ReactCountryFlag from 'react-country-flag';

import logoImg from '../../../public/images/Logo.svg';
import londonImg from '../../../public/images/Europe/london-image.png';
import franceImg from '../../../public/images/Europe/paris-image.png';
import romeImg from '../../../public/images/Europe/rome-image.png';
import pragueImg from '../../../public/images/Europe/prague-image.png';
import amsterdamImg from '../../../public/images/Europe/amsterdam-image.png';

export default function Europe() {
  const LogoImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'layout'].includes(prop),
  });

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
      <Flex
        as="header"
        w="100%"
        h={['50px', '100px']}
        alignItems="center"
        justifyContent="center"
        py={['15px', '27px']}
      >
        <Flex
          width={['81px', '184px']}
          height={['20px', '46px']}
          alignItems="center"
          justifyContent="center"
        >
          <LogoImage src={logoImg} alt="worldtrip" layout="fixed" />
        </Flex>
      </Flex>

      <Flex
        backgroundImage="url('/images/Europe/europe-banner.png')"
        backgroundPosition={['center', 'top']}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={['150px', '500px']}
        w="100%"
        alignItems={['center', 'end']}
        justifyContent={['center', 'start']}
      >
        <Text
          fontWeight="600"
          fontSize={['28px', '48px']}
          color="brand.white"
          mb={['none', '60px']}
          ml={['none', '140px']}
        >
          Europa
        </Text>
      </Flex>

      <Box mx={['16px', '140px']} mt={['24px', '80px']} mb={['16px', '35px']}>
        <Flex
          flexDir={['column', 'row']}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            maxW={['100%', '50%']}
            textAlign="justify"
            color="brand.gray-400"
            fontSize={['14px', '24px']}
            mb={['16px', '0']}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex
            w={['100%', '50%']}
            ml={['0', '109px']}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack alignItems={['start', 'center']}>
              <Text
                color="brand.highlight"
                fontWeight="600"
                fontSize={['24px', '48px']}
              >
                50
              </Text>
              <Text
                color="brand.gray-400"
                fontWeight="600"
                fontSize={['18px', '24px']}
              >
                países
              </Text>
            </Stack>

            <Stack alignItems={['start', 'center']}>
              <Text
                color="brand.highlight"
                fontWeight="600"
                fontSize={['24px', '48px']}
              >
                60
              </Text>
              <Text
                color="brand.gray-400"
                fontWeight="600"
                fontSize={['18px', '24px']}
              >
                línguas
              </Text>
            </Stack>

            <Stack alignItems={['start', 'center']}>
              <Text
                color="brand.highlight"
                fontWeight="600"
                fontSize={['24px', '48px']}
              >
                27
              </Text>
              <Text
                color="brand.gray-400"
                fontWeight="600"
                fontSize={['18px', '24px']}
              >
                cidades +100
              </Text>
            </Stack>
          </Flex>
        </Flex>

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
              <LondonImage src={londonImg} alt="London" h="173px" w="256px" />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="18px"
                px="24px"
                border="1px"
                borderColor="brand.highlight"
                borderTop="none"
              >
                <Box>
                  <Text
                    color="brand.gray-400"
                    fontSize="20px"
                    fontWeight="600"
                    mb="12px"
                  >
                    Londres
                  </Text>
                  <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
                    Reino Unido
                  </Text>
                </Box>

                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            </Flex>

            <Flex flexDirection="column" w="256px">
              <ParisImage src={franceImg} alt="London" h="173px" w="256px" />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="18px"
                px="24px"
                border="1px"
                borderColor="brand.highlight"
                borderTop="none"
              >
                <Box>
                  <Text
                    color="brand.gray-400"
                    fontSize="20px"
                    fontWeight="600"
                    mb="12px"
                  >
                    Paris
                  </Text>
                  <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
                    França
                  </Text>
                </Box>

                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            </Flex>

            <Flex flexDirection="column" w="256px">
              <RomeImage src={romeImg} alt="London" h="173px" w="256px" />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="18px"
                px="24px"
                border="1px"
                borderColor="brand.highlight"
                borderTop="none"
              >
                <Box>
                  <Text
                    color="brand.gray-400"
                    fontSize="20px"
                    fontWeight="600"
                    mb="12px"
                  >
                    Rome
                  </Text>
                  <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
                    Itália
                  </Text>
                </Box>

                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            </Flex>

            <Flex flexDirection="column" w="256px">
              <PragueImage src={pragueImg} alt="London" h="173px" w="256px" />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="18px"
                px="24px"
                border="1px"
                borderColor="brand.highlight"
                borderTop="none"
              >
                <Box>
                  <Text
                    color="brand.gray-400"
                    fontSize="20px"
                    fontWeight="600"
                    mb="12px"
                  >
                    Praga
                  </Text>
                  <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
                    República Techeca
                  </Text>
                </Box>

                <ReactCountryFlag
                  countryCode="CZ"
                  svg
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            </Flex>

            <Flex flexDirection="column" w="256px">
              <AmsterdamImage
                src={amsterdamImg}
                alt="London"
                h="173px"
                w="256px"
              />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py="18px"
                px="24px"
                border="1px"
                borderColor="brand.highlight"
                borderTop="none"
              >
                <Box>
                  <Text
                    color="brand.gray-400"
                    fontSize="20px"
                    fontWeight="600"
                    mb="12px"
                  >
                    Amsterdã
                  </Text>
                  <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
                    Holanda
                  </Text>
                </Box>

                <ReactCountryFlag
                  countryCode="NL"
                  svg
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
