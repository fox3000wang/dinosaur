import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Icon } from "./style";

// https://styled-icons.js.org/
import { Lock } from 'styled-icons/material'

function mapStateToProps() {
  return {};
}

class DiconPage extends React.Component<IAppActionProps, any> {
  constructor(props: IAppActionProps) {
    super(props);
    this.state = {
      isConfirmModalShow: false
    };
  }

  render() {
    return (
      <Background>
        <Layout>
          <Head>
            <Lock size="24" ></Lock>
          </Head>
          <Body>
            <Left></Left>
            <Center></Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DiconPage);
