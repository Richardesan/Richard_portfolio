import React from 'react'

const Footer = () => {
  return (
    <div className="bg-neutral-950 text-gray-400 font-semibold py-3 mt-4 max-sm:text-xs ">
  <div className="text-center">
    <p>&copy; {new Date().getFullYear()} Bolu. All rights reserved.</p>
  </div>
</div>

  )
}

export default Footer