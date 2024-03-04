import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href={"/fetch"}>1. Fetch example</Link>
      </li>
      <li>
        <Link href={"/memoization"}>2. Memoization example</Link>
      </li>
      <li>
        <Link href={"/ssg"}>2. SSG example</Link>
      </li>
      <li>
        <Link href={"/dynamic"}>2. Dynamic example</Link>
      </li>
      <li>
        <Link href={"/ppr"}>2. PPR (experimental) example</Link>
      </li>
      <li>
        <Link href={"/isr/1"}>3. ISR example (id = 1)</Link>
      </li>
      <li>
        <Link href={"/isr/2"}>3. ISR example (id = 2)</Link>
      </li>
      <li>
        <Link href={"/isr/999"}>3. ISR example (id = 999)</Link>
      </li>
    </ul>
  );
}
