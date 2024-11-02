import Form from "@/components/ui/form";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-xl">My GitHub Résumé</h1>
      <hr className="my-8" />
      <Form />
      <hr className="my-8" />
      <h2 className="font-semibold text-l mb-4">Popular profiles</h2>
      <div className="flex flex-wrap gap-4">
        <Link className="text-cyan-500" href="/WakeFl">
          WakeFl
        </Link>
        <Link className="text-cyan-500" href="/defunkt">
          defunkt
        </Link>
        <Link className="text-cyan-500" href="/mxcl">
          mxcl
        </Link>
      </div>
    </section>
  );
}
