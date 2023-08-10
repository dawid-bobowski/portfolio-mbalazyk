import { Button } from '@mui/material';
import { PRIMARY_COLOR } from '../../constants';

interface IButtonOutlinedProps {
  text: string;
}

const ButtonOutlined = (props: IButtonOutlinedProps) => {
  return (
    <Button
        variant='outlined'
        sx={{
          ...styles.styledButton,
          backgroundColor: '#fff',
          borderColor: PRIMARY_COLOR,
          color: PRIMARY_COLOR,
          '&:hover': {
            borderColor: '#b6152a',
            backgroundColor: '#fff7f9',
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

export default ButtonOutlined;