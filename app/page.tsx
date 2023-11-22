import Link from "next/link";
import LoginForm from "@/app/ui/login";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm />
    </main>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link
      href="/pages"
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      {children}
    </Link>
  </main>
);
