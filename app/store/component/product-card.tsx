import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  cloudflare_image_id: string;
  uniqid: string;
}

export function ProductCard({
  title,
  description,
  price,
  currency,
  cloudflare_image_id,
  uniqid,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden ">
      <div className="relative h-48 w-full ">
        <Image
          src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${cloudflare_image_id}/shopItem`}
          alt={"name"}
          fill
          className="border rounded-xl rounded-b-none border-cyan-500 border-b-0"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 border border-cyan-500 rounded-2xl bg-[#1a1b21b3] -translate-y-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <span className="flex gap-1">
            5<Star size={22} fill="#FFD43B" color="#FFD43B" />
          </span>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#838383] text-sm">Starting at</span>
            <span className="text-2xl font-bold ">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency,
              }).format(price)}
            </span>
            <span className="text-base font-bold ">Per Day</span>
          </div>
          <Link
            href={`/store/${uniqid}`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-[#1a1b21] hover:bg-[#0087bd] hover:border-[#00b7ff] border-[#25262e] px-6 py-6 rounded-2xl"
            )}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
