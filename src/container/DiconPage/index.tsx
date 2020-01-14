import * as React from "react";
import { connect } from "react-redux";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Icon } from "./style";

// https://styled-icons.js.org/
//import { Lock } from "styled-icons/material";

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

  componentDidMount() {
    cornerstoneWADOImageLoader.wadouri.loadFileRequest(
      "https://efilm-cro.obs.cn-north-1.myhuaweicloud.com/410028/upload/b07ce1068dc649f2969489efe0bc476f/1.2.840.113619.2.203.4.2147483647.1503418397.288740/1.3.12.2.1107.5.8.2.100063.201802281756062921761.4.dcm"
    );
  }

  render() {
    return (
      <Background>
        <Layout>
          <Head>
            {/* <Lock size="24"></Lock> */}
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
