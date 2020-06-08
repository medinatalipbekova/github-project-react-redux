import Markdown from 'markdown-to-jsx'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateReadme } from '../redux/reducers/repositories'
import './readme.scss'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const readmeFile = useSelector((s) => s.repositories.readmeFile)
  useEffect(() => {
    dispatch(updateReadme(userName, repositoryName))
  }, [userName, repositoryName, dispatch])

  return (
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />
      <article className="markdown-body entry-content pt-4 my-5 mx-auto article-w px-8 border-4">
        <Markdown>{readmeFile}</Markdown>
      </article>
    </div>
  )
}
export default Readme
