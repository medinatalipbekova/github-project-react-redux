import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchRepository, updateUserData } from '../redux/reducers/repositories'

const Header = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const avatar = useSelector((s) => s.repositories.userData.avatar_url)
  useEffect(() => {
    dispatch(updateUserData(userName))
  }, [userName, dispatch])
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black">
      <div className="flex items-center">
        {userName && (
          <img
            className="w-20 h-20 rounded border-white ml-6 hover:border-transparent border-solid border-white"
            src={avatar}
            alt="Mad"
          />
        )}
        <span className="font-semibold  mr-2 pl-10 flex-shrink-0 text-white text-3xl tracking-tight">
          {userName}
        </span>
      </div>
      <div className="max-w-xl pt-16 mx-auto mb-10 border-b border-b-2 border-black py-2">
        <input
          onChange={(e) => dispatch(searchRepository(e.target.value))}
          type="text"
          placeholder="Search..."
          className="appearance-none bg-transparent  opacity-50 text-gray-700 bg-grey-50 w-full text-black mr-6 ry-1"
        />
      </div>
      <div>
        {userName && (
          <Link
            className="text-sm px-4 py-2 leading-none mr-4 border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to="/"
          >
            Main
          </Link>
        )}{' '}
        &nbsp;
        {repositoryName && (
          <Link
            className=" text-sm px-4 py-2 leading-none mr-4 border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to={`/${userName}`}
          >
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Header
