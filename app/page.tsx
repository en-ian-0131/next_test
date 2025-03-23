import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="page">
        <div>Hello world</div>
        <div className="button">
          <Link href="/blog">To blog</Link>
        </div>
        <div className="button">
          <Link href="/shopping">To shopping</Link>
        </div>
        <div className="button">
          <Link href="/login">To login</Link>
        </div>
      </div>
    </>
  );
}
