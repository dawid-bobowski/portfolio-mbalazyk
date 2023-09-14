import { useState } from 'react';
import { Box } from '@mui/material';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Reviewer1 from '../../assets/reviews/01.jpg';
import Reviewer2 from '../../assets/reviews/02.jpg';
import Reviewer3 from '../../assets/reviews/03.jpg';
import Review from './Review';

export interface IReview {
  image: string;
  name: string;
  title: string;
  text: string;
  date: string;
}

const REVIEWS: IReview[] = [
  {
    image: Reviewer1,
    name: 'Helena Marciniak',
    title: 'Autorka książki „Wszystko i nic”',
    text: 'Morbi pellentesque accumsan tellus eu condimentum. Curabitur id urna imperdiet, sollicitudin ex aliquet, \
      vulputate orci. Nulla nec mauris eget quam tincidunt blandit sed a odio. Vestibulum condimentum elit \
      ipsum, sit amet egestas ex condimentum ac. Sed leo odio, vulputate dictum sapien vitae ligula.',
    date: '27 lipca 2023',
  },
  {
    image: Reviewer2,
    name: 'Michał Piekarz',
    title: 'Redaktor naczelny portalu zrobtosam.pl',
    text: 'Phasellus et turpis varius, bibendum diam non, consectetur purus. Nullam nisi sem, luctus ut luctus id, \
      efficitur sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare magna ut ante \
      volutpat, in maximus lectus cursus. Nam facilisis erat sed convallis blandit. Ut ut lorem et.',
    date: '30 lipca 2023',
  },
  {
    image: Reviewer3,
    name: 'Karolina Kaczmarek',
    title: 'Autorka książki „Co ma być to będzie”',
    text: 'Quisque condimentum libero purus, ut imperdiet tortor porta sed. Quisque eget viverra lectus. Vivamus \
      faucibus ornare enim, condimentum suscipit erat. Ut purus odio, vestibulum ac tincidunt vitae, fermentum \
      viverra sem. Sed posuere luctus lacinia. Integer vitae tortor posuere mauris fringilla dolor.',
    date: '2 sierpnia 2023',
  },
];

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const [reviewNextIndex, setReviewNextIndex] = useState<number>(1);

  return (
    <Box id='customer-reviews' sx={{
      width: '100%',
      display: 'flex',
      justifyContent:' center',
      alignItems: 'center',
      gap: 2,
      zIndex: 2,
    }}>
      <Box sx={styles.reviewNavBox} onClick={() => {
        setReviewIndex(reviewIndex - 1 === -1 ? REVIEWS.length - 1 : reviewIndex - 1);
        setReviewNextIndex(reviewNextIndex - 1 === -1 ? REVIEWS.length - 1 : reviewNextIndex - 1);
      }}>
        <ArrowLeftIcon sx={styles.reviewNavIcon} />
      </Box>
      <Box sx={{
        gap: 1,
        display: 'flex',
        position: 'relative',
      }}>
        <Review review={REVIEWS[reviewIndex]} />
        <Review review={REVIEWS[reviewNextIndex]} hide />
      </Box>
      <Box sx={styles.reviewNavBox} onClick={() => {
        setReviewIndex(reviewIndex + 1 === REVIEWS.length ? 0 : reviewIndex + 1);
        setReviewNextIndex(reviewNextIndex + 1 === REVIEWS.length ? 0 : reviewNextIndex + 1);
      }}>
        <ArrowRightIcon sx={styles.reviewNavIcon} />
      </Box>
    </Box>
  )
}

const styles = {
  reviewNavBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#f3f3f3',
      transition: '0.2s ease-in-out',
    }
  },
  reviewNavIcon: {
    fontSize: 40,
  },
};

export default Reviews;