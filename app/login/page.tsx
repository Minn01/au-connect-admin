import Image from "next/image";
import Link from "next/link";

import { MICROSOFT_LOGIN_API_PATH } from "@/constants";

const errorMessages: Record<string, string> = {
  invalid_state: "Your sign-in request expired. Please try again.",
  not_authorized: "This Microsoft account has not been invited as an administrator.",
  disabled: "This administrator account is disabled.",
  authentication_failed: "Microsoft sign-in could not be completed. Please try again.",
  configuration: "Microsoft sign-in is not configured yet.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] ?? errorMessages.authentication_failed : null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#120608] text-white">
      <Image
        src="/au-login-bg.jpg"
        alt="Assumption University campus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,3,5,.94)_0%,rgba(27,5,8,.75)_45%,rgba(18,2,5,.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,2,3,.82)_0%,transparent_55%,rgba(8,2,3,.32)_100%)]" />
      <div className="absolute -left-24 top-1/2 h-96 w-96 rounded-full bg-red-700/25 blur-3xl" />

      <main className="relative z-10 flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-16 lg:py-10">
        <header className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-xl shadow-black/20">
            <Image src="/au-connect-logo.png" alt="AU Connect" width={34} height={30} className="h-auto object-contain" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-[0.18em]">AU CONNECT</p>
            <p className="text-xs text-white/55">Administration Portal</p>
          </div>
        </header>

        <section className="my-auto grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
              <span className="h-px w-10 bg-red-400" /> Assumption University
            </p>
            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Lead the community.<br />
              <span className="text-red-400">Keep it connected.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              A focused workspace for the people keeping AU Connect safe, useful, and moving forward.
            </p>
          </div>

          <div className="w-full max-w-md justify-self-end rounded-[2rem] bg-white p-2 text-gray-900 shadow-2xl shadow-black/35">
            <div className="rounded-[1.6rem] border border-gray-100 bg-white px-7 py-9 sm:px-9 sm:py-10">
              <div className="mb-8">
                <span className="mb-6 inline-flex rounded-full border border-red-600 bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm shadow-red-200">
                  Authorized access
                </span>
                <h2 className="text-3xl font-semibold tracking-tight">Welcome back</h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Sign in with your Assumption University Microsoft account to continue.
                </p>
              </div>

              {message && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-5 text-red-700"
                >
                  {message}
                </div>
              )}

              <Link
                href={MICROSOFT_LOGIN_API_PATH}
                className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 active:translate-y-0 active:border-red-400 active:bg-red-100"
              >
                <Image src="/microsoft-icon.png" alt="" width={22} height={22} />
                Continue with Microsoft
                <span className="ml-auto text-lg text-gray-400 transition group-hover:translate-x-1 group-hover:text-red-600 group-active:text-red-700">→</span>
              </Link>

              <div className="mt-7 flex items-start gap-3 border-t border-gray-200 pt-6 text-xs leading-5 text-gray-500">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.35)]" />
                Access is restricted to invited AU Connect administrators. Your identity is verified securely by Microsoft.
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/35">
          <span>© {new Date().getFullYear()} AU Connect</span>
          <span>Assumption University · Suvarnabhumi Campus</span>
        </footer>
      </main>
    </div>
  );
}
