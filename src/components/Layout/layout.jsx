import s from './layout.module.scss';

export const Layout = (props) => {
  const { children } = props;

  return (
    <div className={s.page}>
      <div className={s.main}>{children}</div>
    </div>
  );
};
