import React from 'react'
import { Header as SemanticHeader, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => (
  <SemanticHeader as="h6" block size="small">
    <Link to="/">
      <Icon name="hacker news" />
    </Link>
    <SemanticHeader.Content>
      <Link to="/top">Hacker News</Link> &#8195;
      <Link to="/new">new</Link> | <Link to="/best">past</Link> |{' '}
      <Link to="/ask">ask</Link> | <Link to="/show">show</Link> | <Link to="/jobs">jobs</Link>
    </SemanticHeader.Content>
  </SemanticHeader>
)

export default Header
