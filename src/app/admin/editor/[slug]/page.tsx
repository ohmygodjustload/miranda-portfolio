export default async function EditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-zinc-400 text-sm">Editor: {slug}</p>
    </main>
  );
}
