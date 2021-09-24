import s from './button.module.scss';
import cn from 'classnames';

const Button = ({
  onClick,
  type,
  styleType = 'text',
  size = 'standard',
  color = 'primary',
  disabled = false,
  text,
  className,
  styleObj,
  style,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        `${s.button} ${s[`button__${styleType}`]} ${s[`button__${size}`]} ${
          s[`button__${color}`]
        } ${s[`button__${disabled ? 'disabled' : ''}`]} ${className}`,
        styleObj,
      )}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
