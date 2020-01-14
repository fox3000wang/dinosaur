import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center } from "./style";

import { TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";



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
            <TiArrowBackOutline></TiArrowBackOutline>
            <TiArrowForwardOutline></TiArrowForwardOutline>
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
