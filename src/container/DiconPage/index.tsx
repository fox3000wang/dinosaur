import * as React from "react";
import { connect } from "react-redux";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneTools from "cornerstone-tools";
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Icon } from "./style";

// https://styled-icons.js.org/
//import { Lock } from "styled-icons/material";

function mapStateToProps() {
  return {};
}

class DiconPage extends React.Component<IAppActionProps, any> {
  loaded = false;

  constructor(props: IAppActionProps) {
    super(props);
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
  }

  // componentDidMount() {
  //   cornerstoneWADOImageLoader.wadouri.loadFileRequest(
  //     // "http://106.13.103.146/demo.dicom"
  //     "file:///Users/fox/Downloads/demo.dcm"
  //   );
  // }

  fileChange = e => {
    const file = e.target.files[0];
    const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);

    console.log(file);
    console.log(imageId);
    this.loadAndViewImage(imageId);
  };

  loadAndViewImage = imageId => {
    const element = document.getElementById("dicomImage");

    cornerstone.enable(element);

    const start = new Date().getTime();

    cornerstone.loadImage(imageId).then(
      image => {
        console.log(image);
        const viewport = cornerstone.getDefaultViewportForImage(element, image);

        cornerstone.displayImage(element, image, viewport);
        if (this.loaded === false) {
          cornerstoneTools.mouseInput.enable(element);
          cornerstoneTools.mouseWheelInput.enable(element);
          cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
          cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
          cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
          cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
          cornerstoneTools.imageStats.enable(element);
          this.loaded = true;
        }
      },
      err => {
        alert(err);
      }
    );
  };

  render() {
    return (
      <Background>
        <Layout>
          <Head>{/* <Lock size="24"></Lock> */}</Head>
          <Body>
            <Left>
              <div>
                <form id="form">
                  <input
                    type="file"
                    id="selectFile"
                    onChange={this.fileChange}
                  />
                </form>
              </div>
            </Left>
            <Center id="dicomImage"></Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DiconPage);
