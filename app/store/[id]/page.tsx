/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SellixEmbed from "@/components/ui/sellix-button";
import { Slash, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer JVWaSufjDGNwrawm9DUHAdsoMUmA6itv9HxqfcXymR84vGWDaGXyxopqzICyRuJY",
  },
};
export default async function Page({ params }: any) {
  const { id }  = await params
  const dataProduct = await fetch(
    `https://dev.sellix.io/v1/products/${id}`,
    options
  );
  const resultProduct = await dataProduct.json();
  const productData = resultProduct.data.product;

  return (
    <div className="mt-20 container mx-auto px-4 max-w-7xl">
      <div className="w-full  bg-[#1a1b21]  p-4 rounded-md mb-8">
        <Breadcrumb className="flex items-center space-x-1">
          <BreadcrumbList className="flex items-center space-x-1">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-zinc-300 text-lg  hover:text-white"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-600">
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/store"
                  className="text-zinc-300 text-lg  hover:text-white"
                >
                  Store
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-600">
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/store/${productData.uniqid}`}
                  className="text-zinc-300 text-lg  hover:text-white"
                >
                  {productData.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        <div className="relative h-96">
          <Image
            src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${productData.cloudflare_image_id}/shopItem`}
            alt={"image product"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold ">{productData.title}</h1>
          <p className="text-base font-normal text-gray-500 py-4">
            {productData.description}
          </p>
          <div className="flex gap-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Star key={index} size={22} fill="#FFD43B" color="#FFD43B" />
              ))}
          </div>
          <div className="text-2xl font-bold py-4">
            {new Intl.NumberFormat("fr-CA", {
              style: "currency",
              currency: productData.currency,
            }).format(productData.price)}
          </div>
          <SellixEmbed productId={productData.uniqid}>Buy</SellixEmbed>
        </div>
      </div>
    </div>
  );
}
