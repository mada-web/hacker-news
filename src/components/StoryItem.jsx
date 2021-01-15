import React from 'react'
import {
  Item as ItemSemantic,
  Container as SemanticContainer,
} from 'semantic-ui-react'
import * as timeago from 'timeago.js'

const Item = (props) => {
  const { by, score, time, title, url, descendants, id } = props.news
  const timeAgo = timeago.format(time)

  return (
    <SemanticContainer>
      <ItemSemantic.Group>
        <ItemSemantic>
          <ItemSemantic.Content>
            <ItemSemantic.Header>
              <a href={url || `https://news.ycombinator.com/item?id=${id}`}>
                {title}
              </a>
            </ItemSemantic.Header>
            <ItemSemantic.Meta>
              <span className="price">
                {score} points by{' '}
                <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>{' '}
                | {timeAgo} |{' '}
                {descendants ? <span>{descendants} comments</span> : ''}
              </span>
            </ItemSemantic.Meta>
          </ItemSemantic.Content>
        </ItemSemantic>
      </ItemSemantic.Group>
    </SemanticContainer>
  )
}

export default Item
