import Products from "./component/products";

export default function StorePage() {
  return (
    <div className=" min-h-dvh">
      <h1 className="p-20 font-semibold  text-5xl [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_44%,rgba(0,0,0,0)_100%)] bg-[url('/image/top-background.webp')]  bg-no-repeat bg-center bg-cover">
        Undetected Cheats <br />{" "}
        <span className="bg-gradient-to-l from-[#008cff] to-[#00ffea] inline-block text-transparent bg-clip-text">
          with 24/7 Support
        </span>
      </h1>
      <Products />
    </div>
  );
}
