import { Box } from '@mui/material';
import LogoPlaceholder from '../../assets/200x100.png';
import SocialLinks from './SocialLinks';
import MenuItem from './MenuItem';

const MENU_OPTIONS: string[] = [
  'Strona główna',
  'O mnie',
  'Oferta',
  'Kontakt',
]

const Banner = () => {
  return (
    <Box
      id='main-menu'
      sx={{
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
      }}
    >
      <Box sx={{
        width: 200,
        height: 100,
        backgroundImage: `url(${LogoPlaceholder})`,
      }}></Box>
      <Box sx={{
        height: '100%',
        }}>
        <nav aria-label='main-menu' style={{ height: '100%' }}>
          <Box component='ul' sx={{
            margin: 0,
            padding: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {MENU_OPTIONS.map(item => (
              <MenuItem key={item} text={item} />
            ))}
          </Box>
        </nav>
      </Box>
      <SocialLinks />
    </Box>
  )
}

export default Banner;