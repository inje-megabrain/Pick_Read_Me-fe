import { useRef } from 'react';

export default function FileInput({ label, onChange }: any) {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current?.click();
  };
  return (
    <button onClick={onClick}>
      {label}
      <input
        hidden
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="image-input"
        onChange={onChange}
        ref={ref}
      />
    </button>
  );
}
