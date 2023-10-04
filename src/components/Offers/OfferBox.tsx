import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Box, Typography } from '@mui/material';

const BOX_VARIANT = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export interface IOfferBoxProps {
  title: string;
  description: string;
}

const OfferBox = (props: IOfferBoxProps) => {
  const ref = useRef(null);

  return (
    <Box className='offer-item-wrapper' sx={styles.offerItemWrapper}>
      <motion.div
        ref={ref}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={BOX_VARIANT}
        >
        <Box className='offer-item' sx={styles.offerItem}>
          <Typography className='offer-title' variant='h5' sx={styles.offerTitle}>{props.title}</Typography>
          <Typography className='offer-description' sx={styles.offerDescription}>{props.description}</Typography>
        </Box>
      </motion.div>
    </Box>
  )
}

const styles = {
  offerItemWrapper: {
    position: 'relative',
    '&:nth-of-type(2n)': {
      left: { xs: 0, sm: -20, sm750: -50, lg: -100 },
    },
    '&:nth-of-type(2n+1)': {
      left: { xs: 0, sm: 20, sm750: 50, lg: 100 },
    },
  },
  offerItem: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    width: { xs: 350, sm: 400, sm750: 450, md: 550, lg: 700 },
    minHeight: 200,
    padding: 4,
    boxShadow: '8px 8px 0px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  offerTitle: {
    fontFamily: 'Vollkorn, serif',
    fontWeight: 'bold',
  },
  offerDescription: {
    fontFamily: '"Source Sans 3", sans-serif',
  },
};

export default OfferBox;