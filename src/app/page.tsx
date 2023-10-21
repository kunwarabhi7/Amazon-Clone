import CarouselComponents from "./components/Carousel";
import Products from "./components/Header/Products";

export default function Home() {
  return (
    <div className="mx-auto">
      <CarouselComponents />
      <div className="relative md:-mt-36 lgl:-mt-32 xl:-mt-80 z-30 mb-10">
        <Products />
      </div>
    </div>
  );
}
