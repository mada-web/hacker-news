import React from 'react'
import {
  Item as ItemSemantic,
  Container as SemanticContainer,
} from 'semantic-ui-react'
import * as timeago from 'timeago.js'

const Item = (props) => {
  const { by, score, time, title, url, descendants } = props.news
  const timeAgo = timeago.format(time)

  return (
    <SemanticContainer>
      <ItemSemantic.Group>
        <ItemSemantic>
          <ItemSemantic.Content>
            <ItemSemantic.Header>
              <a href={url}>{title}</a>
            </ItemSemantic.Header>
            <ItemSemantic.Meta>
              <span className="price">
                {score} points by{' '}
                <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>{' '}
                | {timeAgo} | {descendants} comments
              </span>
            </ItemSemantic.Meta>
          </ItemSemantic.Content>
        </ItemSemantic>
      </ItemSemantic.Group>
    </SemanticContainer>
  )
}

export default Item
