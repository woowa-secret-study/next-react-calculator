interface IProps {
  onClick: (v: number) => () => void;
}

function Digits({ onClick }: IProps) {
  const numbers = Array.from({ length: 10 }, (_, i) => i).reverse();

  return (
    <div className="digits flex">
      {numbers.map((v) => (
        <button key={v} type="button" className="digit" onClick={onClick(v)}>
          {v}
        </button>
      ))}
    </div>
  );
}

export default Digits;
