import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="p-5 h-[100dvh] w-full flex justify-center items-center flex-col space-y-7">
      <h1 className="text-2xl font-bold">
        Sowlutions Search
      </h1>
      <div className="lg:w-[50%] w-full">
        <SearchBar />
      </div>
    </main>
  );
}
