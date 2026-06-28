"use client";
import { useState } from "react";
import Image from "next/image";
import nike from "../../public/nike.png";
import tshirt from "../../public/polo.png";
import kitkat from "../../public/kitkat.png";

interface Product {
  name: string;
  from: string;
  delivery: string;
  image: typeof tshirt;
}

const categories: string[] = ["Electronics", "Fashion", "Sneakers", "Beauty", "Gaming", "Luxury items"];

const products: Product[] = [
  { name: "Ralph Lauren T-shirt", from: "Requested from USA", delivery: "Delivery in 3 days", image: tshirt },
  { name: "Nike Air Jordan", from: "Requested from Japan", delivery: "Delivery in 5 days", image: nike },
  { name: "KitKat Choclate", from: "Requested from UK", delivery: "Delivery in 4 days", image: kitkat },
];

export default function RequestProduct() {
  const [active, setActive] = useState<string>("Electronics");

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-wider text-brand">BUY & REQUEST</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Need Something Not Available Locally?</h2>
        <p className="mt-3 text-neutral-600">
          Request any product from anywhere. We match it to travelers buying and bringing it to you.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${active === c
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-neutral-200 text-neutral-600 hover:border-neutral-900"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-neutral-100 relative">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-xs text-neutral-500 mt-1">{p.from}</p>
              <p className="text-xs text-brand font-medium mt-1">{p.delivery}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}