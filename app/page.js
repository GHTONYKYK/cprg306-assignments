// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" legacyBehavior>
        <a>Week 2 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-3" legacyBehavior>
        <a>Week 3 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-4" legacyBehavior>
        <a>Week 4 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-5" legacyBehavior>
        <a>Week 5 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-6" legacyBehavior>
        <a>Week 6 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-7" legacyBehavior>
        <a>Week 7 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-8" legacyBehavior>
        <a>Week 8 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-9" legacyBehavior>
        <a>Week 9 Assignment</a>
      </Link>
      <br></br>
      <Link href="/week-10" legacyBehavior>
        <a>Week 10 Assignment</a>
      </Link>
    </div>
  );
}
