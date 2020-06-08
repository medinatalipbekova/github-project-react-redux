import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black pt-1 border-b-2 border-white">
      <div className="container mx-auto px-2">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">© 2020 by Madina Talip</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
Footer.propTypes = {}

export default Footer
