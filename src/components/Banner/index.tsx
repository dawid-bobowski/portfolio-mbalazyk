import { Box } from '@mui/material';

import SocialLinks from './SocialLinks';
import MenuItem from './MenuItem';
import Logo from './Logo';
import { MENU_OPTIONS, PRIMARY_COLOR } from '../../constants';

interface IBannerProps {
  sticky: boolean;
  stickyRef: React.RefObject<HTMLElement>;
}

const Banner = (props: IBannerProps) => {
  const { sticky, stickyRef } = props;
  return (
    <Box
      id='main-menu'
      className={sticky ? 'sticky' : ''}
      ref={stickyRef}
      sx={{
        height: 100,
        maxWidth: sticky ? 'none' : 1920,
        zIndex: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4rem',
        backgroundColor: '#fff',
        borderBottom: `4px ${PRIMARY_COLOR} solid`,
        margin: sticky ? 'none' : '0 auto',
      }}
    >
      <Logo />
      <Box
        sx={{
          height: '100%',
        }}
      >
        <nav
          aria-label='main-menu'
          style={{ height: '100%' }}
        >
          <Box
            component='ul'
            sx={{
              margin: 0,
              padding: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {MENU_OPTIONS.map((item) => (
              <MenuItem
                key={item.text}
                text={item.text}
                destination={item.destination}
              />
            ))}
          </Box>
        </nav>
      </Box>
      <SocialLinks />
    </Box>
  );
};

export default Banner;
