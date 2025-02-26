import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h2>
        To Do App
      </h2>
      <br />
      <Link href="/signin">Signin</Link>
      <br />
      <Link href="/signup">Singup</Link>
    </div>
  );
}
