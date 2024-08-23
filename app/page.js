import List from "@/components/List";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container py-10 text-primary">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-semibold">Black f*ing Garlic</h1>
        <div className="flex gap-4 text-lg">
          <h3>Product</h3>
          <h3>About</h3>
          <h3>Contant</h3>
        </div>
      </nav>
      <hr className="border-none h-1 bg-secondary" />

      <div className="grid grid-cols-2 items-center pt-4">
        <Image
          src="/images/garlic-image-step-1.png"
          width={300}
          height={300}
          alt="garlic image"
        />

        <List />
      </div>
    </div>
  );
}
