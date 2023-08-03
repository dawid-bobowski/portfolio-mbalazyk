import { Button } from '@mui/material';

interface IButtonContainedProps {
  text: string;
  href: string;
}

const ButtonContained = (props: IButtonContainedProps) => {
  return (
    <Button
      variant='contained'
      href={props.href}
      sx={{
        ...styles.styledButton,
        backgroundColor: '#c7263b',
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