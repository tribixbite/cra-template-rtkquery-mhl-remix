/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BoxLayout/BoxLayout.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BoxLayout from './BoxLayout'

describe('<BoxLayout />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BoxLayout />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
