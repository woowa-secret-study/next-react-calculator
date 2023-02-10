interface IProps {
  screen: string;
}

function ResultScreen({ screen }: IProps) {
  return <h1 id="total">{screen || 0}</h1>;
}

export default ResultScreen;
