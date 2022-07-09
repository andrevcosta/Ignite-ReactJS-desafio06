import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface HomeInfoItemProps {
  icon: IconType;
  text: string;
}

export function HomeInfoItem({ icon, text }: HomeInfoItemProps) {
  return (
    <Flex
      flexDirection={['row', 'column']}
      alignItems="center"
      justifyContent={['start', 'center']}
      gap={['8px', '24px']}
    >
      <Icon as={icon} fontSize={['15px', '85px']} color="brand.highlight" />
      <Text
        color="brand.gray-400"
        fontSize={['18px', '24px']}
        fontWeight={['500', '600']}
      >
        {text}
      </Text>
    </Flex>
  );
}
