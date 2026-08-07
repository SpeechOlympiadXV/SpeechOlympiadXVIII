export function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-gray-400 py-6 text-center border-t border-[#EDC00155]">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Speech Olympiad XIX. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
