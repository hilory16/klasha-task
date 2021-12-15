import { bool, string } from 'prop-types';
import { ButtonWrapper } from './button.style';
export default function Button({ title, secondary }) {
  return (
    <ButtonWrapper secondary={secondary}>
      <p>{title}</p>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  title: string.required,
  secondary: bool.required
};
