// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" legacyBehavior>
        <a>Week 2 Assignment</a>
      </Link>
    </div>
  );
}
