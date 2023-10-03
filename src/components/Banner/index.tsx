import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppSelector } from '../../app/hooks';
import useSticky from '../../hooks/useSticky';
import SocialLinks from './SocialLinks';
import MenuItem from './MenuItem';
import Logo from './Logo';
import { MENU_OPTIONS, PRIMARY_COLOR } from '../../constants';

import './Banner.css';

const Banner = () => {
  const sticky: boolean = useAppSelector(state => state.app.sticky);
  const { stickyRef } = useSticky();

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
      <Box id='main-menu-wrapper' sx={{
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        height: { xs: 'auto', md: '100%' },
        width: { xs: '100%', md: 'auto' },
        position: { xs: 'absolute', md: 'static' },
        backgroundColor: {xs: '#fff', md: 'none' },
        zIndex: { xs: 10, md: 1 },
        transform: { xs: 'translateY(-100%)', md: 'none' },
      }}>
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
              flexDirection: { xs: 'column', md: 'row' },
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
      <MenuIcon
        id='main-menu-button'
        onClick={() => {
          document.getElementById('main-menu-wrapper')?.classList.toggle('menu-open');
        }}
        sx={{
          position: 'absolute',
          right: '4rem',
          fontSize: '2rem',
          display: { xs: 'inline-block', md: 'none' },
        }} />
    </Box>
  );
};

export default Banner;
