interface NotFoundPageProps {}

export function NotFoundPage({}: NotFoundPageProps) {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
          Sorry, This Page Is Unavailable 🙃
        </h1>
        <p className="text-lg lg:text-xl text-slate-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}
