import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '../Items';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <NavigationItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
