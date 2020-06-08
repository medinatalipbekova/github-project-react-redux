import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateRepositories } from '../redux/reducers/repositories'

const RepoList = () => {
  const { userName } = useParams()
  const dispatch = useDispatch()
  const list = useSelector((s) => s.repositories.list)
  const search = useSelector((s) => s.repositories.search)
  const filterList = list.filter((el) => el.name.includes(search))
  useEffect(() => {
    dispatch(updateRepositories(userName))
  }, [userName, dispatch])
  return (
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />
      <table className="min-w-full pt-3 black bg-gray-50 my-8 mx-auto border-gray-200 px-8 border-4 ">
        <thead>
          <tr>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Deployment
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Last Commit
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Readme
            </th>
          </tr>
        </thead>
        <tbody>
          {filterList.map((el) => (
            <tr className="bg-gray-100">
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-gray-500' : 'text-gray-900'} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${userName}/${el.name}`}>View Readme</Link>
              </td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RepoList
