
export default function Home() {
  const appName = process.env.APP_NAME;
  const apiUrl = process.env.API_URL;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
        <h1>{process.env.NEXT_PUBLIC_APP_TITLE}</h1>
        <p>College: {process.env.COLLEGE_NAME}</p>
    </div>
  );
}
