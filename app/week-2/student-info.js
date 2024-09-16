// week-2/student-info.js
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Tony Kim</p>
      <Link href="https://github.com/GHTONYKYK" legacyBehavior>
        <a>GitHub Repository</a>
      </Link>
    </div>
  );
}
