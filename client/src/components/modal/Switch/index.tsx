import { BlockInfo } from 'components/about-us/BlockInfo';

export const renderComponent = (component: string) => {
  switch (component) {
    case 'BLOCK_INFO':
      return <BlockInfo />;
    default:
      return null;
  }
};
