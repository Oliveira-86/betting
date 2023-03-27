import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

import { If } from './'

describe('If', () => {
  it('Renders element correctly', () => {
    const tree = renderer.create(
      <div>
        <If
          condition={true}
          render={() => <p>Show</p>}
          renderElse={() => <p>Hide</p>}
        />
      </div>
    )
    expect(tree.toJSON()).toMatchSnapshot()
    const instance = tree.root
    const p = instance.findByType('p')
    expect(p.props.children).toBe('Show')

    render(<div>
        <If
          condition={true}
          render={() => <p>Is True 1</p>}
          renderElse={() => <p>Is False 1</p>}
        />
        <If
          condition={false}
          render={() => <p>Is True 2</p>}
          renderElse={() => <p>Is False 2</p>}
        />
      </div>)

    expect(screen.getByText("Is True 1"))
    expect(screen.getByText("Is False 2"))
  })
})
