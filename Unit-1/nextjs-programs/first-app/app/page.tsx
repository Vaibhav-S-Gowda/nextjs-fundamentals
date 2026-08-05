export default function Home() {
  const number = 25;
  return (
    <div>
      <h2>Even or Odd</h2>
      {
        number%2 === 0
        ? <p>{ number } is Even</p>
        : <p>{ number } is Odd</p>
      }
    </div>
  );

}