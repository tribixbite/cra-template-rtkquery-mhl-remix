/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BoxLayout/BoxLayout.tsx

Created with;
$ npx generate-react-cli component BoxLayout

*/

import React from 'react'
import './BoxLayout.scss'

export default class BoxLayout extends React.PureComponent<IBoxLayoutProps, IBoxLayoutState> {

  constructor(props: IBoxLayoutProps) {
    super(props);
    this.state = {
      // TODO
    }
  }

  // If you need 'shouldComponentUpdate' -> Refactor to React.Component
  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  /*
  public shouldComponentUpdate(nextProps: IMyPageProps, nextState: IMyPageState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  } */

  static getDerivedStateFromProps:
   // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    React.GetDerivedStateFromProps<IBoxLayoutProps, IBoxLayoutState> = (props:IBoxLayoutProps, state: IBoxLayoutState) => null

  public getSnapshotBeforeUpdate(prevProps: IBoxLayoutProps, prevState: IBoxLayoutState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IBoxLayoutProps, prevState: IBoxLayoutState, snapshot: IBoxLayoutSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    return (
      <div className="BoxLayout">
        BoxLayout
      </div>)
  }
}

interface IBoxLayoutProps {
  // TODO
}

interface IBoxLayoutState {
  // TODO
}

interface IBoxLayoutSnapshot {
  // TODO
}