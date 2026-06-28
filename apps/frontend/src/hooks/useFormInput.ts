import { useState } from "react";

export interface FormInputHook {
  value: string;
  messages: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  validate: (callback: (value: string) => string[]) => string[];
  reset: (newValue?: string) => void;
}

export function useFormInput(initialValue: string = ""): FormInputHook {
  const [value, setValue] = useState(initialValue);
  const [messages, setMessages] = useState<string[]>([]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValue(e.target.value);
  }

  function validate(callback: (value: string) => string[]): string[] {
    const errors = callback(value);
    setMessages(errors);
    return errors;
  }

  function reset(newValue: string = initialValue) {
    setValue(newValue);
    setMessages([]);
  }

  return { value, messages, onChange, validate, reset };
}