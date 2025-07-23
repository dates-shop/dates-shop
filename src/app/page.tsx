
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DateWorldMap from "@/components/DateWorldMap";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[90vh] px-6 z-10 py-40">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--reddish-black)] mb-4 text-center">
          Explore Our Date Varieties
        </h2>
        <p className="text-xl text-[var(--reddish-black)] mb-4 text-center">
          Tour the world and find out what we think is so special about dates.
        </p>
        <DateWorldMap />
      </section>

      <section
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8 pt-40 pb-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dates.jpg')" }}
      >
      </section>

      <section className="text-center px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Farm‐Fresh Dates, Delivered
        </h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          DatesShop is a vibrant online marketplace empowering farmers across
          the Middle East to sell their delicious, all‐natural dates
          directly to customers in the U.S. Taste the difference of true
          farm-to-door freshness.
        </p>
      </section>


      <Footer />
    </>
  );
}

