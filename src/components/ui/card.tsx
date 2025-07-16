export default function CardDemo() {
  return (
    <div className="w-full max-w-sm rounded-xl border p-6 shadow-sm bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Login to your account</h2>
        <p className="text-sm text-gray-500">
          Enter your email below to login to your account
        </p>
        <div className="mt-2">
          <a
            href="#"
            className="text-sm text-blue-600 underline-offset-4 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline underline-offset-4"
            >
              Forgot your password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            required
            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Login
        </button>
        <button
          type="button"
          className="w-full rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
