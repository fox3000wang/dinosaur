import * as React from "react";
import { connect } from "react-redux";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneTools from "cornerstone-tools";
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Button } from "./style";

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

  componentDidMount() {
    this.loadDicomFiles(62);
  }

  element = () => {
    return document.getElementById("dicomImage");
  };

  loadDicomFiles = i => {
    //const url = `https://efilm-cro.obs.cn-north-1.myhuaweicloud.com/410028/upload/b07ce1068dc649f2969489efe0bc476f/1.2.840.113619.2.203.4.2147483647.1503418397.288740/1.3.12.2.1107.5.8.2.100063.201802281756062921761.4.dcm`;
    const url = `https://efilm-cro.obs.cn-north-1.myhuaweicloud.com/410028/upload/ed4ca7042b8e4b1985a6bf45791e04c1/1.2.840.113619.2.340.3.2831204097.547.1545453872.623/1.2.840.113619.2.340.3.2831204097.547.1545453872.625.2.dcm`;
    this.loadAndViewImage(url, i);
  };

  loadAndViewImage = (url, i) => {
    var element = this.element();
    cornerstone.enable(element);

    cornerstoneWADOImageLoader.wadouri.dataSetCacheManager
      .load(url, cornerstoneWADOImageLoader.internal.xhrRequest)
      .then(dataSet => {
        // ???
        // dataset is now loaded, get the # of frames so we can build the array of imageIds
        //var numFrames = dataSet.intString("x00280008");
        var numFrames = dataSet.intString("x00280008")
          ? dataSet.intString("x00280008")
          : 1;
        // if (!numFrames) {
        //   alert("Missing element NumberOfFrames (0028,0008)");
        //   return;
        // }

        const imageIds = [];
        const imageIdRoot = "wadouri:" + url;

        for (let i = 0; i < numFrames; i++) {
          const imageId = imageIdRoot + "?frame=" + i;
          imageIds.push(imageId);
        }

        const stack = {
          currentImageIdIndex: 0,
          imageIds: imageIds
        };

        cornerstone.loadAndCacheImage(imageIds[0]).then(
          image => {
            // console.log(image);

            // now that we have an image frame in the cornerstone cache, we can decrement
            // the reference count added by load() above when we loaded the metadata.  This way
            // cornerstone will free all memory once all imageId's are removed from the cache
            cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.unload(url);
            cornerstone.displayImage(element, image);

            // if (this.loaded === false) {
            //   // ???
            //   // cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button

            //   // Set the stack as tool state
            //   cornerstoneTools.addStackStateManager(element, [
            //     "stack",
            //     "playClip"
            //   ]);
            //   cornerstoneTools.addToolState(element, "stack", stack);
            //   // Start playing the clip
            //   // TODO: extract the frame rate from the dataset
            //   var frameRate = 10;
            //   cornerstoneTools.playClip(element, frameRate);
            //   this.loaded = true;
            // }
          },
          err => {
            alert(err);
          }
        );
      });
  };

  horizontalFlip = () => {
    const viewport = cornerstone.getViewport(this.element());
    viewport.hflip = !viewport.hflip;
    cornerstone.setViewport(this.element(), viewport);
  };

  verticalFlip = () => {
    const viewport = cornerstone.getViewport(this.element());
    viewport.vflip = !viewport.vflip;
    cornerstone.setViewport(this.element(), viewport);
  };

  render() {
    return (
      <Background>
        <Layout>
          <Head>
            {/* <Lock size="24"></Lock> */}
            <Button onClick={this.horizontalFlip}>左右旋转</Button>
            <Button onClick={this.verticalFlip}>上下旋转</Button>
          </Head>
          <Body>
            <Left></Left>
            <Center id="dicomImage"></Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DiconPage);

/*
  <div>
    <form id="form">
      <input
        type="file"
        id="selectFile"
        onChange={this.fileChange}
      />
    </form>
  </div>

  fileChange = e => {
    const file = e.target.files[0];
    const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
    this.loadAndViewImage(imageId);
  };
  
  loadAndViewImage = imageId => {
    const element = document.getElementById("dicomImage");
    cornerstone.enable(element);
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
          // cornerstoneTools.imageStats.enable(element);
          this.loaded = true;
        }
      },
      err => {
        alert(err);
      }
    );
  };
  */
