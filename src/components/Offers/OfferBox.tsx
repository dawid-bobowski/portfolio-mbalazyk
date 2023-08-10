import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Box, Typography } from '@mui/material';

import './OfferBox.css';

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
    <motion.div
      ref={ref}
      className='offer-item-wrapper-motion'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={BOX_VARIANT}
    >
      <Box className='offer-item' sx={styles.offerItem}>
        <Typography className='offer-title' variant='h5' sx={styles.offerTitle}>{props.title}</Typography>
        <Typography className='offer-description'>{props.description}</Typography>
      </Box>
    </motion.div>
  )
}

const styles = {
  offerItem: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    width: 700,
    height: 200,
    padding: 4,
    boxShadow: '8px 8px 0px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  offerTitle: {
    fontFamily: 'Vollkorn, serif',
    fontWeight: 'bold',
  },
};

export default OfferBox;