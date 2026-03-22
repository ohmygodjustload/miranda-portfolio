export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-zinc-400 text-sm">/{slug}</p>
    </main>
  );
}
