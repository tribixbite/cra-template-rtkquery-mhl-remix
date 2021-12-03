/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/common/genericComponents/Agree/Agree.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Agree from './Agree'

describe('<Agree />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Agree />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
