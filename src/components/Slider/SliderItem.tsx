import { Heading, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SliderItemProps {
  backgroundImage: string;
  heading: string;
  text: string;
  href: string;
}

export function SliderItem({
  backgroundImage,
  heading,
  text,
  href,
}: SliderItemProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink as="a" _hover={{ textDecoration: 'none' }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          backgroundImage={backgroundImage}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          h={['250px', '450px']}
          w="100%"
          spacing="16px"
        >
          <Heading
            color="brand.white"
            fontWeight="700"
            fontSize={['24px', '48px']}
          >
            {heading}
          </Heading>
          <Text
            color="brand.white"
            fontWeight="700"
            fontSize={['14px', '24px']}
          >
            {text}
          </Text>
        </Stack>
      </ChakraLink>
    </Link>
  );
}
