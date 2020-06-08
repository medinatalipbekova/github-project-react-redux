import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsername } from '../redux/reducers/repositories'
import { history } from '../redux'

const Main = () => {
  const userName = useSelector((s) => s.repositories.userName)
  const dispatch = useDispatch()
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/${userName}`)
    }
  }
  return (
    <div className="flex mainS items-center mx-auto justify-center bg-gray-700 h-screen">
      <div className="bgCol text-black font-bold rounded-lg border shadow-lg p-10">
        <img
          className="mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <input
          className="bg-gray-300appearance-none mr-2 border-4 border-black rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
          type="text"
          value={userName}
          onChange={(e) => dispatch(updateUsername(e.target.value))}
          onKeyDown={handleKeyPress}
          placeholder="Username"
        />
        <button
          className=" bg-gray-300appearance-none mr-2 mt-5 border-4 border-black rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
          type="button"
          onClick={() => history.push(`/${userName}`)}
        >
          Search
        </button>
      </div>
    </div>
  )
}
export default Main
