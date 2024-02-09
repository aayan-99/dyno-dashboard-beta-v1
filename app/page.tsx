import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <span className="flex justify-center items-center gap-10">
        <Link href={`/ecom-dashboard`}>
          <button className="px-6 py-2 bg-[color:var(--primary-color)] text-white rounded-full">Ecomm</button>
        </Link>
        <Link href={`/hrm-dashboard`}>
          <button className="px-6 py-2 bg-[color:var(--primary-color)] text-white rounded-full">HRMS</button>
        </Link>
      </span>
    </main>
  );
}
