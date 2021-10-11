import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {

  //console.log("The object is here:", form)

  const [state, setState] = useState(form);

  const onChange = <K extends Object>(value:K, field: keyof T) => {
    setState({
      ...state,
      [field]:value
    })
  }

  return {
    ...state,
    form: state,
    onChange
  }
}