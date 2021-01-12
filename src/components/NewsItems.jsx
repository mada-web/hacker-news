import React from 'react'
import { Image, Item as ItemSemantic } from 'semantic-ui-react'

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />

const Item = () => (
  <ItemSemantic.Group>
    <ItemSemantic>
      <ItemSemantic.Image size="tiny" src="/images/wireframe/image.png" />

      <ItemSemantic.Content>
        <ItemSemantic.Header>Arrowhead Valley Camp</ItemSemantic.Header>
        <ItemSemantic.Meta>
          <span className="price">$1200</span>
          <span className="stay">1 Month</span>
        </ItemSemantic.Meta>
        <ItemSemantic.Description>{paragraph}</ItemSemantic.Description>
      </ItemSemantic.Content>
    </ItemSemantic>

    <ItemSemantic>
      <ItemSemantic.Image size="tiny" src="/images/wireframe/image.png" />

      <ItemSemantic.Content>
        <ItemSemantic.Header>Buck's Homebrew Stayaway</ItemSemantic.Header>
        <ItemSemantic.Meta content="$1000 2 Weeks" />
        <ItemSemantic.Description>{paragraph}</ItemSemantic.Description>
      </ItemSemantic.Content>
    </ItemSemantic>

    <ItemSemantic>
      <ItemSemantic.Image size="tiny" src="/images/wireframe/image.png" />
      <ItemSemantic.Content
        header="Arrowhead Valley Camp"
        meta="$1200 1 Month"
      />
    </ItemSemantic>
  </ItemSemantic.Group>
)

export default Item
