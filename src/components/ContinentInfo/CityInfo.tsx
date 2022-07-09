import { Box, Flex, Text } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';

interface CityInfoProps {
  cityName: string;
  countryName: string;
  countryCode: string;
}

export function CityInfo({
  cityName,
  countryName,
  countryCode,
}: CityInfoProps) {
  return (
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
        <Text color="brand.gray-400" fontSize="20px" fontWeight="600" mb="12px">
          {cityName}
        </Text>
        <Text color="brand.gray-300" fontSize="16px" fontWeight="500">
          {countryName}
        </Text>
      </Box>

      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
        }}
      />
    </Flex>
  );
}
