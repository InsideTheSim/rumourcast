'use client'

export function Logo() {
  const handleClick = () => {
    window.location.href = '/'
  }

  return (
    <div
      className="text-lg font-bold flex flex-row items-center font-geist cursor-pointer"
      onClick={handleClick}
    >
      <img src="/rumour.webp" alt="RUMOUR" className="w-8 h-8 mr-3 rounded-full" />
      <span className="hidden sm:block">rumourcast</span>
    </div>
  )
}
