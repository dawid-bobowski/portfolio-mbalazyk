import { Button } from '@mui/material';
import { PRIMARY_COLOR } from '../../constants';

interface IButtonContainedProps {
  text: string;
}

const ButtonContained = (props: IButtonContainedProps) => {
  return (
    <Button
      variant='contained'
      sx={{
        ...styles.styledButton,
        backgroundColor: PRIMARY_COLOR,
        '&:hover': {
          backgroundColor: '#b6152a',
          color: '#fff',
        },
      }}
    >
      {props.text}
    </Button>
  )
}

const styles = {
  styledButton: {
    zIndex: 2,
    width: 200,
    fontFamily: '"Source Sans 3", sans-serif',
    textTransform: 'initial',
  },
};

export default ButtonContained;