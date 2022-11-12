import React, { ChangeEvent } from "react";

export const useForm = (initialState: any) => {
  const [values, setState] = React.useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...values, [event.target.name]: event.target.value });
  };

  return {
    onChange,
    values,
  };
};
