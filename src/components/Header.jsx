import React from 'react'
import { Header as SemanticHeader, Icon } from 'semantic-ui-react'

const Header = () => (
  <SemanticHeader as="h6" block size="medium">
    <Icon name="hacker news" />
    <SemanticHeader.Content>
      Hacker News &#8195; new | past | comments | ask | show | jobs | submit
    </SemanticHeader.Content>
  </SemanticHeader>
)

export default Header
