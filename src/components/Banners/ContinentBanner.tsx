import { Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  backgroundImage: string;
  text: string;
}

export function ContinentBanner({
  backgroundImage,
  text,
}: ContinentBannerProps) {
  return (
    <Flex
      backgroundImage={backgroundImage}
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
        {text}
      </Text>
    </Flex>
  );
}
