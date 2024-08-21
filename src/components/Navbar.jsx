import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/Road_Runner.webp'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-fuchsia-700 border-b border-fuchsia-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-3xl font-bold ml-2"
                >Jobs Runner
                </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex items-center gap-x-2">
                <Link
                  to="/"
                  className="text-white text-center bg-indigo-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home
                  </Link>
                <Link
                  to="/jobs"
                  className="text-white text-center hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs
                  </Link>
                <Link
                  to="/add-job"
                  className="text-white text-center hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
