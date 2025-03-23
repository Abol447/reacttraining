function Option({ id, children, click, style }) {
  return (
    <div onClick={(e) => click(e)} id={id} className={style}>
      {children}
    </div>
  );
}

export default Option;
