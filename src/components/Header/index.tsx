import { Box, chakra, Flex, Icon, Link as ChakraLink } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../../public/images/Logo.svg';

import { MdArrowBack } from 'react-icons/md';

interface HeaderProps {
  hasNavigation?: boolean;
}

export function Header({ hasNavigation = false }: HeaderProps) {
  const LogoImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'layout'].includes(prop),
  });

  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      alignItems="center"
      justifyContent="space-around"
      py={['15px', '27px']}
    >
      {hasNavigation && (
        <Link href="/" passHref>
          <ChakraLink as="a">
            <Flex alignItems="center">
              <Icon as={MdArrowBack} fontSize={['15', '30']} />
            </Flex>
          </ChakraLink>
        </Link>
      )}

      <Flex
        width={['81px', '184px']}
        height={['20px', '46px']}
        alignItems="center"
        justifyContent="center"
      >
        <LogoImage src={logoImg} alt="worldtrip" layout="fixed" />
      </Flex>

      {hasNavigation && <Box />}
    </Flex>
  );
}
