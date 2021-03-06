// @flow
import React from "react";
import { connect } from "react-redux";

export let e: Array<any> = []

function sameStateIsOK() {
  type Props = {...};
  class Com extends React.Component<Props> {}

  type State = {|
    a: number
  |};
  const mapStateToProps = (state: State) => {
    return {}
  };

  const Connected = connect<Props, {||}, _,_,State,empty>(mapStateToProps)(Com);
  e.push(Connected);
  <Connected />;
}

function differentStatesAreNotOK() {
  type Props = {...};
  class Com extends React.Component<Props> {}

  type State = {|
    a: number
  |};
  const mapStateToProps = (state: State) => {
    return {}
  };
  type OtherState = {|
    b: number
  |};

  //$FlowExpectedError[incompatible-call] property `b` is missing in `State` but exists in `OtherState`
  const Connected = connect<Props, {||}, _,_,OtherState,empty>(mapStateToProps)(Com);
  e.push(Connected);
  <Connected />;
}
