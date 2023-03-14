export default function Me() {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              className="h-24 w-24 rounded-full"
              src="/profile.webp"
              alt="Profile picture of jehrhardt"
            />
            <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
          <p className="text-sm font-medium text-gray-600">Hi, I am</p>
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">jehrhardt</p>
          <p className="text-sm font-medium text-gray-600">Software Developer from <a className="text-blue-900 hover:underline" href="https://en.wikipedia.org/wiki/Berlin">Berlin</a>.</p>
        </div>
      </div>
    </div>
  );
}
