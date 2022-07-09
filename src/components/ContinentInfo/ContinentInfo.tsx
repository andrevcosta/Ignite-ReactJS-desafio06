import { Flex, Stack, Text } from '@chakra-ui/react';

interface ContinentInfoProps {
  description: string;
  countryCount: string;
  languageCount: string;
  cityCount: string;
}

export function ContinentInfo({
  description,
  countryCount,
  languageCount,
  cityCount,
}: ContinentInfoProps) {
  return (
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
        {description}
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
            {countryCount}
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
            {languageCount}
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
            {cityCount}
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
  );
}
