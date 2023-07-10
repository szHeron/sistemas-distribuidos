import Weather from "@/components/weather";

export default function Home() {
  const data = {
    wind: 23,
    humidity: 96,
    temp: 22
  }

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center bg-zinc-800">
      <Weather wind={data.wind} humidity={data.humidity} temp={data.temp}/>
    </main>
  )
}
