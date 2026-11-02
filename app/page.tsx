import Counter from "@/components/Counter";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1>Home</h1>
      <h1 className="text-3xl font-bold">שלום, Next.js!</h1>
      <p className="mt-2 text-gray-600">זה הפרויקט הראשון שלי.</p>
      <Counter/>
    </main>
  );
}
