import { Divider, Stack, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { HomeBanner } from '../components/Banners/HomeBanner';
import { HomeInfo } from '../components/HomeInfoGrid/HomeInfo';
import { Slider } from '../components/Slider/Slider';

export default function Home() {
  return (
    <>
      <Header />

      <HomeBanner />

      <HomeInfo />

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

      <Slider />
    </>
  );
}
