import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="data:image/jpeg;base64,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"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hello, Miranda! This is your soon to be portfolio built with Next.js 14 and Tailwind CSS!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I will be adding more content here soon.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
