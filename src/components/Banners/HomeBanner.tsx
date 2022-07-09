import Image from 'next/image';
import { Box, chakra, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import airplaneImg from '../../../public/images/Airplane.svg';

export function HomeBanner() {
  const AirplaneImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['src', 'alt', 'width', 'height'].includes(prop),
  });

  return (
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
        <AirplaneImage src={airplaneImg} alt="Avião" width={417} height={270} />
      </Box>
    </Flex>
  );
}
