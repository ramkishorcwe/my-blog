import * as React from 'react';
import Button from '@mui/material/Button';

const NewButton = (props) => {
  const { children, style, onClick, data, label, name } = props
  const tempProps = { ...props }
  delete tempProps.onClick
  console.log(name)
  return (
    <>
      <Button
        className={"bg-red p-5 rounded-md"}
        style={style ? style : { width: 70, height: 35 }}
        onClick={() => { data ? onClick(data) : onClick() }}
        {...tempProps}>{children ?? label ?? "Button"}
      </Button>
    </>
  );
};
export default NewButton;