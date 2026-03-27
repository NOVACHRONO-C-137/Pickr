import Link from "next/link";

// TODO: Add Spline 3D Hero here

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Turkify</h1>
      <p className="text-lg text-gray-600 mb-12">The decentralized data labeling platform on Solana</p>
      <div className="flex gap-6">
        <Link
          href="/user"
          className="rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Hire Workers
        </Link>
        <Link
          href="/worker"
          className="rounded-full border border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-100 transition-colors"
        >
          Earn Crypto
        </Link>
      </div>
    </div>
  );
}
