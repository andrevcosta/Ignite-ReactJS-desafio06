import Image from 'next/image';
import {
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import logoImg from '../../public/images/Logo.svg';
import airplaneImg from '../../public/images/Airplane.svg';

import { FaCocktail } from 'react-icons/fa';
import { GiSurfBoard } from 'react-icons/gi';
import { FaRegBuilding } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { GiEarthAmerica } from 'react-icons/gi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const LogoImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'layout'].includes(prop),
  });
  const AirplaneImage = chakra(Image, {
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
        backgroundImage="url('/images/Background.svg')"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        h={['163px', '368px']}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        px={['16px', '140px']}
      >
        <Box flex="1">
          <Stack spacing={['8px', '20px']}>
            <Heading
              color="brand.gray-100"
              maxW={['90%', '426px']}
              fontSize={['20px', '36px']}
              fontWeight={500}
            >
              5 Continentes, infinitas possibilidades.
            </Heading>
            <Text
              color="brand.gray-200"
              maxW={['90%', '524px']}
              fontSize={['14px', '20px']}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Stack>
        </Box>

        <Box display={['none', 'block']} mt="80px">
          <AirplaneImage
            src={airplaneImg}
            alt="Avião"
            width={417}
            height={270}
          />
        </Box>
      </Flex>

      <SimpleGrid
        maxW="1160px"
        mx="auto"
        mt={['36px', '80px']}
        px={['30px', 'unset']}
        minChildWidth={['110px', '158px']}
        gap={['2', '4']}
        alignItems="center"
      >
        <Flex
          flexDirection={['row', 'column']}
          alignItems="center"
          justifyContent="center"
          gap={['8px', '24px']}
        >
          <Icon
            as={FaCocktail}
            fontSize={['15px', '85px']}
            color="brand.highlight"
          />
          <Text
            color="brand.gray-400"
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
          >
            vida noturna
          </Text>
        </Flex>

        <Flex
          flexDirection={['row', 'column']}
          alignItems="center"
          justifyContent="center"
          gap={['8px', '24px']}
        >
          <Icon
            as={GiSurfBoard}
            fontSize={['15px', '85px']}
            color="brand.highlight"
          />
          <Text
            color="brand.gray-400"
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
          >
            praia
          </Text>
        </Flex>

        <Flex
          flexDirection={['row', 'column']}
          alignItems="center"
          justifyContent="center"
          gap={['8px', '24px']}
        >
          <Icon
            as={FaRegBuilding}
            fontSize={['15px', '85px']}
            color="brand.highlight"
          />
          <Text
            color="brand.gray-400"
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
          >
            moderno
          </Text>
        </Flex>

        <Flex
          flexDirection={['row', 'column']}
          alignItems="center"
          justifyContent="center"
          gap={['8px', '24px']}
        >
          <Icon
            as={GiGreekTemple}
            fontSize={['15px', '85px']}
            color="brand.highlight"
          />
          <Text
            color="brand.gray-400"
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
          >
            clássico
          </Text>
        </Flex>

        <Flex
          flexDirection={['row', 'column']}
          alignItems="center"
          justifyContent="center"
          gap={['8px', '24px']}
        >
          <Icon
            as={GiEarthAmerica}
            fontSize={['15px', '85px']}
            color="brand.highlight"
          />
          <Text
            color="brand.gray-400"
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
          >
            e mais...
          </Text>
        </Flex>
      </SimpleGrid>

      <Divider
        w={['60px', '90px']}
        h="2px"
        bg="brand.gray-400"
        mx="auto"
        mt={['36px', '80px']}
        mb="12px"
      />

      <Stack
        color="brand.gray-400"
        fontSize={['20px', '36px']}
        fontWeight="500"
        alignItems="center"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Stack>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              América do Norte
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              América do Sul
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              Ásia
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              África
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              Europa
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('/images/Europe/europe-image.png')"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            h={['250px', '450px']}
            w="100%"
            spacing="16px"
          >
            <Heading
              color="brand.white"
              fontWeight="700"
              fontSize={['24px', '48px']}
            >
              Oceania
            </Heading>
            <Text
              color="brand.white"
              fontWeight="700"
              fontSize={['14px', '24px']}
            >
              O continente mais antigo.
            </Text>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
