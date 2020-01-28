(window.webpackJsonp=window.webpackJsonp||[]).push([["hyif-viewerbase"], {
  "/NTW":function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      i("0l/t");
      var m=i("hZHs");
      function n(t, e) {
          e||(e=m.b.getViewport(t));
          var i=m.b.getEnabledElement(t), n=m.b.metaData.get("imagePlaneModule", i.image.imageId);
          if(n&&n.rowCosines&&n.columnCosines) {
              var a=m.d.orientation.getOrientationString(n.rowCosines), r=m.d.orientation.getOrientationString(n.columnCosines), o=m.d.orientation.invertOrientationString(a), s= {
                  top: m.d.orientation.invertOrientationString(r), left: o
              }
              ;
              e.vflip&&(s.top=m.d.orientation.invertOrientationString(s.top)), e.hflip&&(s.left=m.d.orientation.invertOrientationString(s.left));
              var c=Array.prototype.filter.call(t.parentNode.children, function(e) {
                  return e!==t&&e.classList.contains("viewport-orientation-markers")
              }
              ), l=c[0].querySelector(".top-mid"), u=c[0].querySelector(".bottom-mid"), d=c[0].querySelector(".left-mid"), x=c[0].querySelector(".right-mid");
              90===e.rotation||-270===e.rotation?(l.textContent=s.left, d.textContent=m.d.orientation.invertOrientationString(s.top)):-90===e.rotation||270===e.rotation?(l.textContent=m.d.orientation.invertOrientationString(s.left), d.textContent=s.top):180===e.rotation||-180===e.rotation?(l.textContent=m.d.orientation.invertOrientationString(s.top), d.textContent=m.d.orientation.invertOrientationString(s.left)):(l.textContent=s.top, d.textContent=s.left), u.textContent=m.d.orientation.invertOrientationString(l.textContent), x.textContent=m.d.orientation.invertOrientationString(d.textContent)
          }
      }
  }
  , "/tkO":function(e, t, i) {}
  , "0FfL":function(e, t, i) {
      "use strict";
      var n=i("S03K");
      i.n(n).a
  }
  , "0xgo":function(e, t, i) {
      "use strict";
      var n=i("TWd2");
      i.n(n).a
  }
  , "1+8e":function(e, t, i) {
      "use strict";
      var n=i("y0Jn");
      i.n(n).a
  }
  , "2Noi":function(e, t, i) {
      "use strict";
      var n= {
          name:"svg-icon", props: {
              iconClass: {
                  type: String
              }
              , className: {
                  type: String
              }
          }
          , computed: {
              iconName:function() {
                  return"#icon-".concat(this.iconClass)
              }
              , svgClass:function() {
                  return this.className?"svg-icon "+this.className: "svg-icon"
              }
          }
      }
      , a=i("ZpG+"), r=Object(a.a)(n, function() {
          var e=this, t=e.$createElement, i=e._self._c||t;
          return i("svg", {
              class:e.svgClass, attrs: {
                  "aria-hidden": "true"
              }
          }
          , [i("use", {
              attrs: {
                  "xlink:href": e.iconName
              }
          }
          )])
      }
      , [], !1, null, null, null);
      t.a=r.exports
  }
  , "36pA":function(e, t, i) {
      "use strict";
      var n=i("PE7q");
      i.n(n).a
  }
  , "4kxo":function(e, t, i) {
      "use strict";
      var n=i("Rsbj");
      t.a=function() {
          Object(n.b)(function() {
              return Promise.all([i.e("async-vendor"), i.e("customWlDialog")]).then(i.bind(null, "by4j"))
          }
          )
      }
  }
  , "63NB":function(e, t, i) {
      "use strict";
      var n=i("Rsbj");
      t.a=function() {
          Object(n.b)(function() {
              return Promise.all([i.e("async-vendor"), i.e(0), i.e("dicomDialog")]).then(i.bind(null, "yKIr"))
          }
          )
      }
  }
  , "80ml":function(e, t, i) {}
  , "8Z7u":function(e, t, i) {}
  , BecY:function(e, t, i) {
      "use strict";
      var n=i("Rsbj");
      t.a=function() {
          Object(n.b)(function() {
              return Promise.all([i.e(8), i.e("linkQrCodeDialog")]).then(i.bind(null, "x2q9"))
          }
          )
      }
  }
  , Brr8:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return d
      }
      );
      i("Vd3H");
      var n=i("cDf5"), a=i.n(n), r=(i("HAE/"), i("LK8F"), i("lwsE")), o=i.n(r), s=i("W8MJ"), c=i.n(s), l=i("f9UM"), u=i("7tW8"), d=function() {
          function t(e) {
              if(o()(this, t), !0!==Array.isArray(e))throw new u.a("ImageSet expects an array of images");
              Object.defineProperty(this, "images", {
                  enumerable: !1, configurable: !1, writable: !1, value: e
              }
              ), Object.defineProperty(this, "uid", {
                  enumerable: !1, configurable: !1, writable: !1, value: l.a.random.id()
              }
              )
          }
          return c()(t, [ {
              key:"getUID", value:function() {
                  return this.uid
              }
          }
          , {
              key:"setAttribute", value:function(e, t) {
                  this[e]=t
              }
          }
          , {
              key:"getAttribute", value:function(e) {
                  return this[e]
              }
          }
          , {
              key:"setAttributes", value:function(e) {
                  if("object"===a()(e)&&null!==e) {
                      var t=Object.prototype.hasOwnProperty;
                      for(var i in e)t.call(e, i)&&(this[i]=e[i])
                  }
              }
          }
          , {
              key:"getImage", value:function(e) {
                  return this.images[e]
              }
          }
          , {
              key:"sortBy", value:function(e) {
                  return this.images.sort(e)
              }
          }
          ]), t
      }
      ()
  }
  , Dvti:function(e, t, i) {}
  , HBs0:function(e, t, i) {
      "use strict";
      var n=i("srCo");
      i.n(n).a
  }
  , K27S:function(e, t, i) {
      "use strict";
      var n=i("NE/5");
      i.n(n).a
  }
  , "NE/5":function(e, t, i) {}
  , O693:function(e, t, i) {
      "use strict";
      var n=i("tgvk");
      i.n(n).a
  }
  , OB9c:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      var a=i("hZHs");
      function n(e) {
          var t;
          try {
              t=a.b.getEnabledElement(e)
          }
          catch(e) {
              return
          }
          if(t&&t.image) {
              var i=t.image.imageId, n=a.b.metaData.get("imagePlaneModule", i);
              if(n&&n.frameOfReferenceUID)return n.frameOfReferenceUID
          }
      }
  }
  , P0NO:function(e, t, i) {
      "use strict";
      function n() {
          return"ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints
      }
      i.d(t, "a", function() {
          return n
      }
      )
  }
  , PE7q:function(e, t, i) {}
  , PKl8:function(e, t, i) {
      "use strict";
      var n=i("Dvti");
      i.n(n).a
  }
  , "Q/NG":function(e, t, i) {
      "use strict";
      t.a= {
          synchronizers: {}
      }
  }
  , S03K:function(e, t, i) {}
  , SW4N:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return p
      }
      );
      i("0l/t"), i("V+eJ"), i("rGqo"), i("8+KV");
      var n=i("lwsE"), a=i.n(n), r=i("W8MJ"), o=i.n(r), s=i("J2m7"), c=i.n(s), l=i("JpaV"), u=i.n(l), d=i("f9UM"), x=i("hZHs"), m=i("jVBd"), g=i("tT9+"), p=function() {
          function i(e) {
              a()(this, i), d.a.settings.prefetchEnabled?(this.studies=e||[], this.prefetchDisplaySetsTimeout=3e3, this.lastActiveViewportElement=null, this.cacheFullHandlerBound=u()(this.cacheFullHandler, this), x.b.events.addEventListener("cornerstoneimagecachefull.StudyPrefetcher", this.cacheFullHandlerBound), x.b.imageCache.setMaximumSizeBytes(d.a.settings.imageCache.maximumSizeBytes), x.d.stackPrefetch.setConfiguration(d.a.settings.stackPrefetch)): x.b.imageCache.setMaximumSizeBytes(0)
          }
          return o()(i, [ {
              key:"destroy", value:function() {
                  this.stopPrefetching(), x.b.events.removeEventListener("cornerstoneimagecachefull.StudyPrefetcher", this.cacheFullHandlerBound)
              }
          }
          , {
              key:"setStudies", value:function(e) {
                  this.stopPrefetching(), this.studies=e
              }
          }
          , {
              key:"prefetch", value:function() {
                  this.studies&&this.studies.length&&d.a.settings.prefetchEnabled&&(this.stopPrefetching(), this.prefetchActiveViewport(), this.prefetchDisplaySets())
              }
          }
          , {
              key:"stopPrefetching", value:function() {
                  this.disableViewportPrefetch(), x.d.requestPoolManager.clearRequestStack("prefetch")
              }
          }
          , {
              key:"prefetchActiveViewport", value:function() {
                  var e=d.a.viewerbase.viewportUtils.getActiveViewportElement();
                  e&&this.enablePrefetchOnElement(e)
              }
          }
          , {
              key:"prefetchViewport", value:function(e) {
                  this.enablePrefetchOnElement(e)
              }
          }
          , {
              key:"disableViewportPrefetch", value:function() {
                  Object(g.c)(function(e) {
                      x.d.stackPrefetch.disable(e)
                  }
                  )
              }
          }
          , {
              key:"hasStack", value:function(e) {
                  var t=x.d.getToolState(e, "stack");
                  return t&&t.data.length&&1<t.data[0].imageIds.length
              }
          }
          , {
              key:"enablePrefetchOnElement", value:function(e) {
                  this.hasStack(e)&&x.d.stackPrefetch.enable(e)
              }
          }
          , {
              key:"attachActiveViewportListeners", value:function(e) {
                  function t() {
                      i.prefetchDisplaySetsAsync()
                  }
                  this.lastActiveViewportElement&&this.lastActiveViewportElement.removeEventListener("cornerstonenewimage.StudyPrefetcher", t), e.removeEventListener("cornerstonenewimage.StudyPrefetcher", t), this.hasStack(e)&&e.addEventListener("cornerstonenewimage.StudyPrefetcher", t), this.lastActiveViewportElement=e
              }
          }
          , {
              key:"prefetchDisplaySetsAsync", value:function(e) {
                  var t=this;
                  e=e||this.prefetchDisplaySetsTimeout, clearTimeout(this.prefetchDisplaySetsHandler), this.prefetchDisplaySetsHandler=setTimeout(function() {
                      t.prefetchDisplaySets()
                  }
                  , e)
              }
          }
          , {
              key:"prefetchDisplaySets", value:function(e) {
                  if(!e) {
                      var t;
                      if(!d.a.settings.prefetch)return;
                      t=d.a.settings.prefetch, e=this.getDisplaySetsToPrefetch(t)
                  }
                  var i=this.getImageIdsFromDisplaySets(e);
                  this.prefetchImageIds(i)
              }
          }
          , {
              key:"prefetchImageIds", value:function(e) {
                  if(e&&0!==e.length) {
                      var t=this.filterCachedImageIds(e), i=x.d.requestPoolManager, n=function() {}
                      ;
                      t&&t.forEach(function(e) {
                          i.addRequest( {}
                          , e, "prefetch", !1, n, n)
                      }
                      ), i.startGrabbing()
                  }
              }
          }
          , {
              key:"getActiveViewportImage", value:function() {
                  var e=d.a.viewerbase.viewportUtils.getActiveViewportElement();
                  if(e)return x.b.getEnabledElement(e).image
              }
          }
          , {
              key:"getStudy", value:function(e) {
                  return d.a.viewer.data.study
              }
          }
          , {
              key:"getSeries", value:function(e, t) {
                  var i=x.b.metaData.get("series", t.imageId);
                  if(i)return d.a.viewerbase.getStudyMetadata(e).getSeriesByUID(i.seriesInstanceUid)
              }
          }
          , {
              key:"getInstance", value:function(e, t) {
                  var i=x.b.metaData.get("instance", t.imageId);
                  return e.getInstanceByUID(i.sopInstanceUid)
              }
          }
          , {
              key:"getActiveDisplaySet", value:function(e, t) {
                  return c()(e, function(e) {
                      return e.seriesInstanceUid===t.seriesInstanceUID
                  }
                  )
              }
          }
          , {
              key:"getDisplaySetsToPrefetch", value:function(e) {
                  var t=this.getActiveViewportImage();
                  if(!t||!e||!e.displaySetCount)return[];
                  var i=this.getStudy(t), n=this.getSeries(i, t);
                  if(n) {
                      var a=i.displaySets, r=this.getActiveDisplaySet(a, n), o=e.order, s=this[ {
                          topdown: "getFirstDisplaySets", downward: "getNextDisplaySets", closest: "getClosestDisplaySets"
                      }
                      [o]];
                      return s?s.call(this, a, r, e.displaySetCount):(o&&d.a.log.warn("Invalid prefetch order configuration (".concat(o, ")")), [])
                  }
              }
          }
          , {
              key:"getFirstDisplaySets", value:function(e, t, i) {
                  for(var n=e.length, a=[], r=0;
                  r<n&&i;
                  r++) {
                      var o=e[r];
                      o!==t&&(a.push(o), i--)
                  }
                  return a
              }
          }
          , {
              key:"getNextDisplaySets", value:function(e, t, i) {
                  var n=e.indexOf(t)+1, a=Math.min(n+i, e.length);
                  return e.slice(n, a)
              }
          }
          , {
              key:"getClosestDisplaySets", value:function(e, t, i) {
                  for(var n=e.indexOf(t), a=e.length, r=[], o=n-1, s=n+1;
                  (0<=o||s<a)&&i;
                  )0<=o&&(r.push(e[o]), i--, o--), s<a&&i&&(r.push(e[s]), i--, s++);
                  return r
              }
          }
          , {
              key:"getImageIdsFromDisplaySets", value:function(e) {
                  var t=this;
                  if(e) {
                      var i=[];
                      return e.forEach(function(e) {
                          i=i.concat(t.getImageIdsFromDisplaySet(e))
                      }
                      ), i
                  }
              }
          }
          , {
              key:"getImageIdsFromDisplaySet", value:function(e) {
                  var r=[];
                  return e.images.forEach(function(e) {
                      var t=e.numFrames;
                      if(1<t)for(var i=0;
                      i<t;
                      i++) {
                          var n=Object(m.a)(e, i);
                          r.push(n)
                      }
                      else {
                          var a=Object(m.a)(e);
                          r.push(a)
                      }
                  }
                  ), r
              }
          }
          , {
              key:"filterCachedImageIds", value:function(e) {
                  var t=this;
                  if(!e)return e.filter(function(e) {
                      return!t.isImageCached(e)
                  }
                  )
              }
          }
          , {
              key:"isImageCached", value:function(e) {
                  var t=x.b.imageCache.imageCache[e];
                  return t&&t.sizeInBytes
              }
          }
          , {
              key:"cacheFullHandler", value:function() {
                  d.a.log.warn("Cache full"), this.stopPrefetching()
              }
          }
          ], [ {
              key:"getInstance", value:function() {
                  return i.instance||(i.instance=new i), i.instance
              }
          }
          ]), i
      }
      ()
  }
  , TBH0:function(e, t, i) {}
  , TWd2:function(e, t, i) {}
  , U0G1:function(e, t, i) {
      "use strict";
      i.d(t, "b", function() {
          return a
      }
      ), i.d(t, "d", function() {
          return r
      }
      ), i.d(t, "e", function() {
          return o
      }
      ), i.d(t, "a", function() {
          return s
      }
      ), i.d(t, "c", function() {
          return u
      }
      );
      i("hHhE"), i("f3/d"), i("rGqo"), i("yt8O"), i("RW0V"), i("dRSK");
      var n=i("E+oP"), c=i.n(n), x=i("hZHs"), l=i("zYFM"), m="WLPreset_custom", g="WLPreset_default", a=function(e, t) {
          var i=x.a.viewer.wlPresets;
          if(e?x.a.viewer.wwwcPreset=e: e=x.a.viewer.wwwcPreset, t||(t=l.a.getActiveViewportElement()), t) {
              var n, a=x.b.getEnabledElement(t);
              if(x.b.metaData.get("series", a.image.imageId)) {
                  var r=x.b.metaData.get("series", a.image.imageId).modality;
                  i[r]&&(n=i[r][e])
              }
              var o=x.b.getElementData(t, "wlPreset"), s=x.b.getViewport(t);
              s&&(e===m&&o.custom?(s.voi.windowWidth=o.custom.ww, s.voi.windowCenter=o.custom.wc):n&&!c()(n)?(s.voi.windowWidth=n.ww, s.voi.windowCenter=n.wc):(s.voi.windowWidth=a.image.windowWidth, s.voi.windowCenter=a.image.windowCenter, e=g), o.name=e, o.ww=s.voi.windowWidth, o.wc=s.voi.windowCenter, x.b.setViewport(t, s), x.a.viewer.notifyActiveCommandChanged(), x.a.session.set("wlPresetApplied", e))
          }
      }
      , r=function() {
          var e=l.a.getEnabledElementForActiveElement();
          e&&(x.b.getElementData(e.element, "wlPreset").name=g, x.a.viewer.wwwcPreset=g)
      }
      , o=function(e) {
          var t, i=x.b.getElementData(e, "wlPreset"), n=x.b.getEnabledElement(e), a=n.viewport, r=n.image, o=a.voi, s=o.windowCenter, c=o.windowWidth;
          if(c===r.windowWidth&&s===r.windowCenter)t=g;
          else {
              var l=x.a.viewer.wlPresets, u=Object.keys(l).find(function(e) {
                  return s===l[e].wc&&c===l[e].ww
              }
              );
              t=u||m
          }
          if(i.name=t, i.ww=c, i.wc=s, i.name===m) {
              var d=i.custom||(i.custom=Object.create(null));
              d.ww=c, d.wc=s
          }
      }
      , s=function(e, t) {
          var i=l.a.getActiveViewportElement();
          if(i) {
              var n=x.b.getElementData(i, "wlPreset");
              x.a.viewer.wwwcPreset="WLPreset_custom";
              var a=n.custom||(n.custom=Object.create(null));
              a.ww=e, a.wc=t;
              var r=x.b.getViewport(i);
              r.voi.windowWidth=n.custom.ww, r.voi.windowCenter=n.custom.wc, x.b.setViewport(i, r), x.a.viewer.notifyActiveCommandChanged(), x.a.session.set("wlPresetApplied", x.a.viewer.wwwcPreset)
          }
      }
      , u=function() {
          var e=l.a.getActiveViewportElement();
          if(e) {
              var t=x.b.getElementData(e, "wlPreset");
              return t.custom||(t.custom=Object.create(null))
          }
      }
  }
  , WhtW:function(e, t, i) {
      "use strict";
      var n=i("TBH0");
      i.n(n).a
  }
  , YDI3:function(e, t, i) {
      "use strict";
      var n=i("trZD");
      i.n(n).a
  }
  , YE5B:function(e, t, i) {
      "use strict";
      i.r(t);
      var n=i("MVZn"), a=i.n(n), r=i("WIBD"), o=(i("rGqo"), i("yt8O"), i("RW0V"), i("dZ+Y"), i("xfY5"), i("f9UM")), s=i("zYFM"), c=i("cR7Z"), l=(i("VRzm"), i("hZHs"));
      var u= {
          props: {
              imageId: {
                  type: String
              }
          }
          , data:function() {
              return {
                  isLoading: !1, hasLoadingError: !1
              }
          }
          , computed: {
              percentComplete:function() {
                  var e=l.a.string.encodeId(this.imageId), t=l.a.session.get("cornerstoneThumbnailLoadProgress:"+e, 2);
                  if(t&&100!==t)return t+"%"
              }
          }
          , watch: {
              imageId:function(e) {
                  e&&this.refreshImage()
              }
          }
          , mounted:function() {
              this.refreshImage()
          }
          , methods: {
              refreshImage:function() {
                  var a=this, r=this.$refs.imageElement;
                  this.isLoading=!0, this.hasLoadingError=!1, r.removeAttribute("src");
                  l.b.loadAndCacheImage(this.imageId).then(function(e) {
                      var i, n, t=document.createElement("canvas");
                      t.width=90, t.height=90, (i=t, n=e, new Promise(function(e, t) {
                          try {
                              l.b.renderToCanvas(i, n), e()
                          }
                          catch(e) {
                              t(e)
                          }
                      }
                      )).then(function() {
                          a.isLoading=!1, r.src=t.toDataURL("image/jpeg", 1)
                      }
                      )
                  }
                  , function() {
                      a.isLoading=!1, a.hasLoadingError=!0
                  }
                  )
              }
          }
      }
      ,
      d=(i("oQx6"), i("ZpG+")),
      x=Object(d.a)(u, function() {
          var e=this, t=e.$createElement, i=e._self._c||t;
          return i("div", {
              staticClass: "image-thumbnail"
          }
          , [i("div", {
              staticClass: "image-thumbnail-canvas"
          }
          , [i("img", {
              ref: "imageElement", staticClass: "static-image"
          }
          )]), e._v(" "), i("div", {
              directives:[ {
                  name: "show", rawName: "v-show", value: e.isLoading, expression: "isLoading"
              }
              ], staticClass:"image-thumbnail-loading-indicator thumbnail-loading-indicator"
          }
          , [i("p", [e._v(e._s(e.$t("loading"))+" "+e._s(e.percentComplete))])]), e._v(" "), i("div", {
              directives:[ {
                  name: "show", rawName: "v-show", value: e.hasLoadingError, expression: "hasLoadingError"
              }
              ], staticClass:"imageThumbnail-error-loading-indicator\n                  thumbnail-loading-indicator"
          }
          , [i("p", [e._v(e._s(e.$t("error")))])])])
      }
      , [], !1, null, null, null).exports,
      m=i("U0G1"),
      g= {
          components: {
              ImageThumbnail: x
          }
          ,
          props: {
              selectable: {
                  type: Boolean
              }
              ,
              index: {
                  type: Number
              }
              ,
              displaySet: {
                  type: Object
              }
              ,
              active: {
                  type: Boolean
              }
          }
          ,
          computed: {
              stackPercentComplete:function() {
                  var e=o.a.session.getObject("stackProgress:".concat(this.displaySet.displaySetInstanceUid));
                  return this.isMobile&&"fast"===o.a.session.get("browseMode")?0: e&&e.percentComplete||0
              }
              ,
              thumbnailImageId:function() {
                  return c.a.findStack(this.displaySet.displaySetInstanceUid).imageIds[0]
              }
              ,
              hasVoi:function() {
                  var t=this,
                  i=o.a.session.getObject("voi:aiServiceStatus");
                  return!(!i||!i[this.displaySet.displaySetInstanceUid])&&Object.keys(i[this.displaySet.displaySetInstanceUid]).some(function(e) {
                      return 3===i[t.displaySet.displaySetInstanceUid][e]
                  }
                  )
              }
              ,
              isMobile:function() {
                  return o.a.device.mobile()
              }
          }
          ,
          methods: {
              handleClick:function() {
                  var e=this;
                  if(o.a.viewer.fusionEnabled)this.$alert(this.$t("petCtFusion.fusioning"), this.$t("tip"), {
                      confirmButtonText: this.$t("confirm")
                  }
                  );
                  else if(o.a.viewer.mprState.enable)this.$alert(this.$t("mprFunction.mpring"), this.$t("tip"), {
                      confirmButtonText: this.$t("confirm")
                  }
                  );
                  else {
                      Object(m.d)(),
                      s.a.stopActiveClip(),
                      s.a.hideCineControls(),
                      this.$store.dispatch("setSelectedDisplaySetIndex", e.index);
                      var t=Number(o.a.session.getObject("activeGridCardIndex")),
                      i= {
                          viewportIndex: t, title: e.displaySet.seriesDescription, seriesIndex: e.index, studyInstanceUid: e.displaySet.studyInstanceUid, seriesInstanceUid: e.displaySet.seriesInstanceUid
                      }
                      ;
                      this.$store.dispatch("setViewportDataByIndex", {
                          index: t, viewportData: i
                      }
                      ),
                      this.$store.dispatch("setSelectedViewportData", {
                          index: t, viewportData: i
                      }
                      )
                  }
              }
              ,
              getSeriesNumber:function(e) {
                  return o.a.viewer.data.study.series[e].seriesNumber
              }
          }
      }
      ,
      p=(i("0xgo"), {
          components: {
              ThumbnailEntry:Object(d.a)(g, function() {
                  var t=this, e=t.$createElement, i=t._self._c||e;
                  return i("li", {
                      key:t.displaySet.displaySetInstanceUid, class: {
                          active: t.active, "has-voi": t.hasVoi
                      }
                      , on: {
                          click:function(e) {
                              return t.handleClick()
                          }
                      }
                  }
                  , [i("p", {
                      staticClass:"series-desc", attrs: {
                          title: t.displaySet.seriesDescription
                      }
                  }
                  , [t._v(t._s(t.displaySet.seriesDescription))]), t._v(" "), t.displaySet.thumbImgUrl?i("img", {
                      staticClass:"static-image", attrs: {
                          src: t.displaySet.thumbImgUrl
                      }
                  }
                  ):i("image-thumbnail", {
                      attrs: {
                          imageId: t.thumbnailImageId
                      }
                  }
                  ), t._v(" "), t.selectable&&t.$ui.breakpoint.mdAndUp&&t.$ui.breakpoint.landscape?i("el-checkbox", {
                      staticClass: "series-checkbox"
                  }
                  ):t._e(), t._v(" "), i("p", {
                      staticClass: "series-num series-index"
                  }
                  , [t._v(t._s(t.getSeriesNumber(t.index)))]), t._v(" "), i("p", {
                      staticClass: "series-num series-num-xs"
                  }
                  , [t._v(t._s(t.displaySet.numImageFrames))]), t._v(" "), t.stackPercentComplete?i("el-progress", {
                      staticClass:"thumb-progress", attrs: {
                          "text-inside": !0, "stroke-width": 2, "show-text": !1, percentage: t.stackPercentComplete
                      }
                  }
                  ):t._e()], 1)
              }
              , [], !1, null, null, null).exports
          }
          , props: {
              selectable: {
                  type: Boolean
              }
              , isPortrait: {
                  type: Boolean, default: !1
              }
              , isMobile: {
                  type: Boolean, default: !1
              }
          }
          , computed:a()( {}
          , Object(r.mapGetters)(["studyData", "selectedViewportData"]), {
              selectedSeriesInstanceUid:function() {
                  return this.selectedViewportData?this.selectedViewportData.seriesInstanceUid: ""
              }
              , ulWidth:function() {
                  return this.isMobile?9*(this.studyData.displaySets?this.studyData.displaySets.length: 0)+"vh": 110*(this.studyData.displaySets?this.studyData.displaySets.length: 0)+"px"
              }
              , classes:function() {
                  return {
                      portrait: this.isPortrait, "portrait-xs": this.isMobile, "portrait-md": this.isPortrait&&!this.isMobile
                  }
              }
              , ulStyles:function() {
                  return this.isPortrait&&!this.isMobile? {
                      width: this.ulWidth
                  }
                  :""
              }
          }
          )
      }
      ),
      f=(i("WhtW"), Object(d.a)(p, function() {
          var i=this, e=i.$createElement, n=i._self._c||e;
          return n("el-scrollbar", {
              staticClass: "study-browser", class: i.classes
          }
          , [n("ul", {
              staticClass: "scrollable-study-thumbnails-list", style: i.ulStyles
          }
          , i._l(i.studyData.displaySets, function(e, t) {
              return n("thumbnail-entry", {
                  key:t, attrs: {
                      selectable: i.selectable, active: i.selectedSeriesInstanceUid===e.seriesInstanceUid, displaySet: e, index: t
                  }
              }
              )
          }
          ), 1)])
      }
      , [], !1, null, null, null));
      t.default=f.exports
  }
  ,
  Zzk7:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      var a=i("hZHs"),
      r=i("tT9+"),
      o=i("zYFM");
      function n() {
          var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]: null;
          if(a.a.viewer.updateImageSynchronizer) {
              var e;
              i||(i=o.a.getActiveViewportElement());
              try {
                  if(!(e=a.b.getEnabledElement(i))||!e.image)return void a.a.log.info("displayReferenceLines enabled element is undefined or it's image is not rendered")
              }
              catch(e) {
                  return
              }
              var t=e.image.imageId,
              n=a.b.metaData.get("imagePlaneModule", t);
              a.d.setToolDisabledForElement(i, "referenceLines"),
              r.a.forEachNotEmptyElements(function(e) {
                  a.a.viewer.updateImageSynchronizer.remove(e)
              }
              ),
              a.a.viewer.refLinesEnabled&&n&&n.frameOfReferenceUID?(a.a.viewer.updateImageSynchronizer.addSource(i), a.b.updateImage(i), r.a.forEachNotEmptyElements(function(e) {
                  if(e!==i) {
                      var t;
                      try {
                          t=a.b.getEnabledElement(e).image.imageId
                      }
                      catch(e) {
                          return
                      }
                      if(!t)return;
                      a.d.setToolEnabledForElement(e, "referenceLines", {
                          synchronizationContext: a.a.viewer.updateImageSynchronizer
                      }
                      ), a.a.viewer.updateImageSynchronizer.addTarget(e), a.b.updateImage(e)
                  }
              }
              )):a.a.log.info("displayReferenceLines refLinesEnabled is not enabled, no imagePlane or no frameOfReferenceUID")
          }
      }
  }
  ,
  aelj:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return o
      }
      );
      i("xfY5");
      var n=i("f9UM"),
      a=i("hZHs"),
      r=i("pmNF"),
      o= {
          INSTITUTION_NAME: "institutionName", PATIENT_NAME: "name", PATIENT_ID: "id", PATIENT_SEX: "sex", PATIENT_AGE: "age", PATIENT_BIRTH_DATE: "birthDate", PATIENT_BIRTH_DATE_SEX: "birthDateSex", PATIENT_AGE_SEX: "ageSex", STUDY_DESCRIPTION: "studyDescription", STUDY_TIME: "studyTime", ACCESSION_NUMBER: "accessionNumber", SERIES_DESCRIPTION: "seriesDescription", SERIES_NUMBER: "seriesNumber", ZOOM: "zoom", COMPRESSION: "compression", WWWC: "wwwc", IMAGE_INDEX: "imageIndex", FRAME_RATE: "frameRate", IMAGE_DIMENSIONS: "imageDimensions", LOC_THICK_SPACING: "locThickSpacing"
      }
      ,
      s=function(e) {
          if(!n.a.store.getters.patientInfoDisplay)return"";
          if(!this.imageId||!a.b.metaData)return"";
          var t=a.b.metaData.get("patient", this.imageId);
          return t&&t[e]||""
      }
      ,
      c=function(e) {
          if(!this.imageId||!a.b.metaData)return"";
          var t=a.b.metaData.get("study", this.imageId);
          return t?t[e]: ""
      }
      ,
      l=function(e) {
          if(!this.imageId||!a.b.metaData)return"";
          var t=a.b.metaData.get("series", this.imageId);
          return t?t[e]: ""
      }
      ,
      u=function(e) {
          if(!this.imageId||!a.b.metaData)return"";
          var t=a.b.metaData.get("instance", this.imageId);
          return t?t[e]||t.getDataProperty(e): ""
      }
      ,
      d=function() {
          var e=Object(r.a)(this.cardIndex, this.subGridIndex);
          return!e||void 0===e.currentImageIdIndex||e.currentImageIdIndex<0?1: e.currentImageIdIndex+1
      }
      ,
      x= {
          name:function() {
              return n.a.store.getters.anonymous?"***": s.call(this, "name")
          }
          ,
          id:function() {
              return n.a.store.getters.anonymous?"***": s.call(this, "id")
          }
          ,
          sex:function() {
              return s.call(this, "sex")
          }
          ,
          birthDate:function() {
              return s.call(this, "birthDate")
          }
          ,
          birthDateSex:function() {
              return"".concat(s.call(this, "birthDate"), " ").concat(s.call(this, "sex"))
          }
          ,
          ageSex:function() {
              return"".concat(s.call(this, "age"), " ").concat(s.call(this, "sex"))
          }
          ,
          institutionName:function() {
              return c.call(this, "institutionName")
          }
          ,
          studyDescription:function() {
              return c.call(this, "studyDescription")
          }
          ,
          studyTime:function() {
              return c.call(this, "studyTime")
          }
          ,
          accessionNumber:function() {
              return c.call(this, "accessionNumber")
          }
          ,
          seriesDescription:function() {
              return l.call(this, "seriesDescription")
          }
          ,
          seriesNumber:function() {
              return l.call(this, "seriesNumber")
          }
          ,
          zoom:function() {
              if(this.viewport)return this.viewport.scale.toFixed(2)
          }
          ,
          compression:function() {
              if(!this.imageId)return"";
              var e=a.b.metaData.get("instance", this.imageId);
              return e?"01"===e.lossyImageCompression&&""!==e.lossyImageCompressionRatio?(e.lossyImageCompressionMethod||"Lossy: ")+parseFloat(e.lossyImageCompressionRatio).toFixed(2)+" : 1": "Lossless / Uncompressed": ""
          }
          ,
          wwwc:function() {
              if(this.viewport)return"W "+this.viewport.voi.windowWidth.toFixed(0)+" L "+this.viewport.voi.windowCenter.toFixed(0)
          }
          ,
          imageIndex:function() {
              if(!n.a.viewer.ctaState.enable&&!n.a.viewer.mprState.enable)return d.call(this)+"/"+function() {
                  return l.call(this, "numImages")
              }
              .call(this);
              var e=Object(r.a)(this.cardIndex, this.subGridIndex);
              return e?d.call(this)+"/"+e.imageIds.length:void 0
          }
          ,
          frameRate:function() {
              var e=u.call(this, "frameTime");
              if(e) {
                  var t=1e3/e;
                  return t.toFixed(1)
              }
          }
          ,
          imageDimensions:function() {
              if(this.image)return this.image.width+" x "+this.image.height
          }
          ,
          locThickSpacing:function() {
              var e,
              t="";
              return(e=function() {
                  var e=u.call(this, "sliceLocation");
                  if(""!==e)return e;
                  var t=u.call(this, "tablePosition");
                  return""!==t?t: u.call(this, "imagePositionPatient")
              }
              .call(this))&&Number(e)&&!n.a.device.mobile()&&(t+="L: "+Number(e).toFixed(2)+" mm"),
              (e=u.call(this, "sliceThickness"))&&(t+=" T: "+Number(e).toFixed(2)+" mm"),
              (e=u.call(this, "spacingBetweenSlices"))&&(t+=" S: "+Number(e).toFixed(2)+" mm"),
              t
          }
      }
      ;
      t.b= {
          getPatient:s,
          getStudy:c,
          getSeries:l,
          getInstance:u,
          getTagDisplay:function(e) {
              if(!this.imageId||!a.b.metaData)return"";
              var t=a.b.metaData.get("tagDisplay", this.imageId);
              return t?t[e]: ""
          }
          ,
          getImage:function(e) {
              if(!e)return"";
              var t;
              try {
                  t=a.b.getEnabledElement(e)
              }
              catch(e) {
                  return""
              }
              return t&&t.image?t.image:""
          }
          ,
          formatDateTime:function(e, t) {
              return"".concat(e, " ").concat(t)
          }
          ,
          TAG_FUNCTIONS:x
      }
  }
  ,
  "bN/b":function(e, t, i) {
      "use strict";
      var n=i("/tkO");
      i.n(n).a
  }
  ,
  c3He:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      i("rGqo"),
      i("8+KV");
      var a=i("hZHs"),
      r=i("OB9c"),
      o=i("Q/NG");
      function n(i) {
          var n=o.a.synchronizers[i];
          n?n.destroy(): (o.a.synchronizers[i]=new a.d.Synchronizer("cornerstonenewimage", a.d.updateImageSynchronizer), n=o.a.synchronizers[i]);
          var e=document.getElementsByClassName("image-viewer-viewport");
          Array.prototype.forEach.call(e, function(e) {
              var t=Object(r.a)(e);
              i===t&&n.add(e)
          }
          )
      }
  }
  ,
  cR7Z:function(e, t, i) {
      "use strict";
      i("rGqo"),
      i("8+KV");
      var d=i("f9UM"),
      x=i("jVBd"),
      n=i("7tW8"),
      a= {}
      ,
      r= {}
      ,
      o=[];
      r= {
          createAndAddStack:function(e, r, o) {
              var s,
              c=d.a.viewer.metadataProvider,
              l=o.images.length,
              u=[];
              o.images.forEach(function(e, t) {
                  var i= {
                      instance: e, series: o, study: r, numImages: l, imageIndex: t+1
                  }
                  , n=e.numberOfFrames;
                  if(1<n) {
                      d.a.log.info("Multiframe image detected");
                      for(var a=0;
                      a<n;
                      a++)i.frame=a, s=Object(x.a)(e, a), u.push(s), c.addMetadata(s, i)
                  }
                  else s=Object(x.a)(e), u.push(s), c.addMetadata(s, i)
              }
              );
              var t= {
                  displaySetInstanceUid: o.displaySetInstanceUid, imageIds: u, frameRate: o.frameRate, isClip: o.isClip
              }
              ;
              return e[o.displaySetInstanceUid]=t
          }
      }
      ;
      var s= {
          clearStacks:function() {
              a= {}
          }
          ,
          makeAndAddStack:function(e, t) {
              return r.createAndAddStack(a, e, t, o)
          }
          ,
          findStack:function(e) {
              return a[e]
          }
          ,
          findOrCreateStack:function(e, t) {
              var i=this.findStack(t.displaySetInstanceUid);
              return i&&i.imageIds||(i=this.makeAndAddStack(e, t)),
              i
          }
          ,
          getAllStacks:function() {
              return a
          }
          ,
          addStackUpdatedCallback:function(e) {
              if("function"!=typeof e)throw new n.a("callback must be provided as a function");
              o.push(e)
          }
          ,
          getConfiguration:function() {
              return r
          }
          ,
          setConfiguration:function(e) {
              r=e
          }
      }
      ;
      t.a=s
  }
  ,
  ftGT:function(e, t, i) {
      "use strict";
      i("DW2E"),
      i("f3/d"),
      i("a1Th"),
      i("h7Nl"),
      i("hHhE");
      var n=/^x[0-9a-fx] {
          8
      }
      $/,
      a=Object.create(Object.prototype, {
          _descriptions: {
              configurable: !1, enumerable: !1, writable: !1, value: Object.create(null)
          }
          , tagNumberToString: {
              configurable:!1, enumerable:!0, writable:!1, value:function(e) {
                  var t;
                  return this.isValidTagNumber(e)&&(t="x"+("00000000"+e.toString(16)).substr(-8)), t
              }
          }
          , isValidTagNumber: {
              configurable:!1, enumerable:!0, writable:!1, value:function(e) {
                  return"number"==typeof e&&0<=e&&e<=4294967295
              }
          }
          , isValidTag: {
              configurable:!1, enumerable:!0, writable:!1, value:function(e) {
                  return"string"==typeof e?n.test(e): this.isValidTagNumber(e)
              }
          }
          , find: {
              configurable:!1, enumerable:!0, writable:!1, value:function(e) {
                  var t;
                  return"string"!=typeof e&&(e=this.tagNumberToString(e)), "string"==typeof e&&(t=this._descriptions[e]), t
              }
          }
          , init: {
              configurable:!1, enumerable:!0, writable:!1, value:function(e) {
                  var t=Object.prototype.hasOwnProperty, i=this._descriptions;
                  for(var n in e)if(t.call(e, n)) {
                      if(!this.isValidTag(n)) {
                          console.info('DICOMTagDescriptions: Invalid tag "'.concat(n, '"...'));
                          continue
                      }
                      if(n in i) {
                          console.info('DICOMTagDescriptions: Duplicated tag "'.concat(n, '"...'));
                          continue
                      }
                      var a=e[n], r=Object.create(null);
                      if(r.tag=n, r.keyword=a, Object.freeze(r), i[n]=r, a in i) {
                          var o=i[a];
                          console.info("DICOMTagDescriptions: Using <".concat(o.tag, ",").concat(o.keyword, "> instead of <").concat(r.tag, ",").concat(r.keyword, '> for keyword "').concat(a, '"...'))
                      }
                      else i[a]=r
                  }
                  Object.freeze(i), Object.freeze(this)
              }
          }
      }
      ),
      r= {
          x00020000: "FileMetaInfoGroupLength", x00020001: "FileMetaInfoVersion", x00020002: "MediaStorageSOPClassUID", x00020003: "MediaStorageSOPInstanceUID", x00020010: "TransferSyntaxUID", x00020012: "ImplementationClassUID", x00020013: "ImplementationVersionName", x00020016: "SourceApplicationEntityTitle", x00020100: "PrivateInformationCreatorUID", x00020102: "PrivateInformation", x00041130: "FileSetID", x00041141: "FileSetDescriptorFileID", x00041142: "SpecificCharacterSetOfFile", x00041200: "FirstDirectoryRecordOffset", x00041202: "LastDirectoryRecordOffset", x00041212: "FileSetConsistencyFlag", x00041220: "DirectoryRecordSequence", x00041400: "OffsetOfNextDirectoryRecord", x00041410: "RecordInUseFlag", x00041420: "LowerLevelDirectoryEntityOffset", x00041430: "DirectoryRecordType", x00041432: "PrivateRecordUID", x00041500: "ReferencedFileID", x00041504: "MRDRDirectoryRecordOffset", x00041510: "ReferencedSOPClassUIDInFile", x00041511: "ReferencedSOPInstanceUIDInFile", x00041512: "ReferencedTransferSyntaxUIDInFile", x0004151a: "ReferencedRelatedSOPClassUIDInFile", x00041600: "NumberOfReferences", x00080000: "IdentifyingGroupLength", x00080001: "LengthToEnd", x00080005: "SpecificCharacterSet", x00080006: "LanguageCodeSequence", x00080008: "ImageType", x00080010: "RecognitionCode", x00080012: "InstanceCreationDate", x00080013: "InstanceCreationTime", x00080014: "InstanceCreatorUID", x00080016: "SOPClassUID", x00080018: "SOPInstanceUID", x0008001a: "RelatedGeneralSOPClassUID", x0008001b: "OriginalSpecializedSOPClassUID", x00080020: "StudyDate", x00080021: "SeriesDate", x00080022: "AcquisitionDate", x00080023: "ContentDate", x00080024: "OverlayDate", x00080025: "CurveDate", x0008002a: "AcquisitionDateTime", x00080030: "StudyTime", x00080031: "SeriesTime", x00080032: "AcquisitionTime", x00080033: "ContentTime", x00080034: "OverlayTime", x00080035: "CurveTime", x00080040: "DataSetType", x00080041: "DataSetSubtype", x00080042: "NuclearMedicineSeriesType", x00080050: "AccessionNumber", x00080052: "QueryRetrieveLevel", x00080054: "RetrieveAETitle", x00080056: "InstanceAvailability", x00080058: "FailedSOPInstanceUIDList", x00080060: "Modality", x00080061: "ModalitiesInStudy", x00080062: "SOPClassesInStudy", x00080064: "ConversionType", x00080068: "PresentationIntentType", x00080070: "Manufacturer", x00080080: "InstitutionName", x00080081: "InstitutionAddress", x00080082: "InstitutionCodeSequence", x00080090: "ReferringPhysicianName", x00080092: "ReferringPhysicianAddress", x00080094: "ReferringPhysicianTelephoneNumber", x00080096: "ReferringPhysicianIDSequence", x00080100: "CodeValue", x00080102: "CodingSchemeDesignator", x00080103: "CodingSchemeVersion", x00080104: "CodeMeaning", x00080105: "MappingResource", x00080106: "ContextGroupVersion", x00080107: "ContextGroupLocalVersion", x0008010b: "ContextGroupExtensionFlag", x0008010c: "CodingSchemeUID", x0008010d: "ContextGroupExtensionCreatorUID", x0008010f: "ContextIdentifier", x00080110: "CodingSchemeIDSequence", x00080112: "CodingSchemeRegistry", x00080114: "CodingSchemeExternalID", x00080115: "CodingSchemeName", x00080116: "CodingSchemeResponsibleOrganization", x00080117: "ContextUID", x00080201: "TimezoneOffsetFromUTC", x00081000: "NetworkID", x00081010: "StationName", x00081030: "StudyDescription", x00081032: "ProcedureCodeSequence", x0008103e: "SeriesDescription", x00081040: "InstitutionalDepartmentName", x00081048: "PhysiciansOfRecord", x00081049: "PhysiciansOfRecordIDSequence", x00081050: "PerformingPhysicianName", x00081052: "PerformingPhysicianIDSequence", x00081060: "NameOfPhysicianReadingStudy", x00081062: "PhysicianReadingStudyIDSequence", x00081070: "OperatorsName", x00081072: "OperatorIDSequence", x00081080: "AdmittingDiagnosesDescription", x00081084: "AdmittingDiagnosesCodeSequence", x00081090: "ManufacturersModelName", x00081100: "ReferencedResultsSequence", x00081110: "ReferencedStudySequence", x00081111: "ReferencedPerformedProcedureStepSequence", x00081115: "ReferencedSeriesSequence", x00081120: "ReferencedPatientSequence", x00081125: "ReferencedVisitSequence", x00081130: "ReferencedOverlaySequence", x0008113a: "ReferencedWaveformSequence", x00081140: "ReferencedImageSequence", x00081145: "ReferencedCurveSequence", x0008114a: "ReferencedInstanceSequence", x00081150: "ReferencedSOPClassUID", x00081155: "ReferencedSOPInstanceUID", x0008115a: "SOPClassesSupported", x00081160: "ReferencedFrameNumber", x00081161: "SimpleFrameList", x00081162: "CalculatedFrameList", x00081163: "TimeRange", x00081164: "FrameExtractionSequence", x00081195: "TransactionUID", x00081197: "FailureReason", x00081198: "FailedSOPSequence", x00081199: "ReferencedSOPSequence", x00081200: "OtherReferencedStudiesSequence", x00081250: "RelatedSeriesSequence", x00082110: "LossyImageCompressionRetired", x00082111: "DerivationDescription", x00082112: "SourceImageSequence", x00082120: "StageName", x00082122: "StageNumber", x00082124: "NumberOfStages", x00082127: "ViewName", x00082128: "ViewNumber", x00082129: "NumberOfEventTimers", x0008212a: "NumberOfViewsInStage", x00082130: "EventElapsedTimes", x00082132: "EventTimerNames", x00082133: "EventTimerSequence", x00082134: "EventTimeOffset", x00082135: "EventCodeSequence", x00082142: "StartTrim", x00082143: "StopTrim", x00082144: "RecommendedDisplayFrameRate", x00082200: "TransducerPosition", x00082204: "TransducerOrientation", x00082208: "AnatomicStructure", x00082218: "AnatomicRegionSequence", x00082220: "AnatomicRegionModifierSequence", x00082228: "PrimaryAnatomicStructureSequence", x00082229: "AnatomicStructureOrRegionSequence", x00082230: "AnatomicStructureModifierSequence", x00082240: "TransducerPositionSequence", x00082242: "TransducerPositionModifierSequence", x00082244: "TransducerOrientationSequence", x00082246: "TransducerOrientationModifierSeq", x00082253: "AnatomicEntrancePortalCodeSeqTrial", x00082255: "AnatomicApproachDirCodeSeqTrial", x00082256: "AnatomicPerspectiveDescrTrial", x00082257: "AnatomicPerspectiveCodeSeqTrial", x00083001: "AlternateRepresentationSequence", x00083010: "IrradiationEventUID", x00084000: "IdentifyingComments", x00089007: "FrameType", x00089092: "ReferencedImageEvidenceSequence", x00089121: "ReferencedRawDataSequence", x00089123: "CreatorVersionUID", x00089124: "DerivationImageSequence", x00089154: "SourceImageEvidenceSequence", x00089205: "PixelPresentation", x00089206: "VolumetricProperties", x00089207: "VolumeBasedCalculationTechnique", x00089208: "ComplexImageComponent", x00089209: "AcquisitionContrast", x00089215: "DerivationCodeSequence", x00089237: "GrayscalePresentationStateSequence", x00089410: "ReferencedOtherPlaneSequence", x00089458: "FrameDisplaySequence", x00089459: "RecommendedDisplayFrameRateInFloat", x00089460: "SkipFrameRangeFlag", x00100000: "PatientGroupLength", x00100010: "PatientName", x00100020: "PatientID", x00100021: "IssuerOfPatientID", x00100022: "TypeOfPatientID", x00100030: "PatientBirthDate", x00100032: "PatientBirthTime", x00100040: "PatientSex", x00100050: "PatientInsurancePlanCodeSequence", x00100101: "PatientPrimaryLanguageCodeSeq", x00100102: "PatientPrimaryLanguageCodeModSeq", x00101000: "OtherPatientIDs", x00101001: "OtherPatientNames", x00101002: "OtherPatientIDsSequence", x00101005: "PatientBirthName", x00101010: "PatientAge", x00101020: "PatientSize", x00101030: "PatientWeight", x00101040: "PatientAddress", x00101050: "InsurancePlanIdentification", x00101060: "PatientMotherBirthName", x00101080: "MilitaryRank", x00101081: "BranchOfService", x00101090: "MedicalRecordLocator", x00102000: "MedicalAlerts", x00102110: "Allergies", x00102150: "CountryOfResidence", x00102152: "RegionOfResidence", x00102154: "PatientTelephoneNumbers", x00102160: "EthnicGroup", x00102180: "Occupation", x001021a0: "SmokingStatus", x001021b0: "AdditionalPatientHistory", x001021c0: "PregnancyStatus", x001021d0: "LastMenstrualDate", x001021f0: "PatientReligiousPreference", x00102201: "PatientSpeciesDescription", x00102202: "PatientSpeciesCodeSequence", x00102203: "PatientSexNeutered", x00102210: "AnatomicalOrientationType", x00102292: "PatientBreedDescription", x00102293: "PatientBreedCodeSequence", x00102294: "BreedRegistrationSequence", x00102295: "BreedRegistrationNumber", x00102296: "BreedRegistryCodeSequence", x00102297: "ResponsiblePerson", x00102298: "ResponsiblePersonRole", x00102299: "ResponsibleOrganization", x00104000: "PatientComments", x00109431: "ExaminedBodyThickness", x00111010: "PatientStatus", x00120010: "ClinicalTrialSponsorName", x00120020: "ClinicalTrialProtocolID", x00120021: "ClinicalTrialProtocolName", x00120030: "ClinicalTrialSiteID", x00120031: "ClinicalTrialSiteName", x00120040: "ClinicalTrialSubjectID", x00120042: "ClinicalTrialSubjectReadingID", x00120050: "ClinicalTrialTimePointID", x00120051: "ClinicalTrialTimePointDescription", x00120060: "ClinicalTrialCoordinatingCenter", x00120062: "PatientIdentityRemoved", x00120063: "DeidentificationMethod", x00120064: "DeidentificationMethodCodeSequence", x00120071: "ClinicalTrialSeriesID", x00120072: "ClinicalTrialSeriesDescription", x00120084: "DistributionType", x00120085: "ConsentForDistributionFlag", x00180000: "AcquisitionGroupLength", x00180010: "ContrastBolusAgent", x00180012: "ContrastBolusAgentSequence", x00180014: "ContrastBolusAdministrationRoute", x00180015: "BodyPartExamined", x00180020: "ScanningSequence", x00180021: "SequenceVariant", x00180022: "ScanOptions", x00180023: "MRAcquisitionType", x00180024: "SequenceName", x00180025: "AngioFlag", x00180026: "InterventionDrugInformationSeq", x00180027: "InterventionDrugStopTime", x00180028: "InterventionDrugDose", x00180029: "InterventionDrugSequence", x0018002a: "AdditionalDrugSequence", x00180030: "Radionuclide", x00180031: "Radiopharmaceutical", x00180032: "EnergyWindowCenterline", x00180033: "EnergyWindowTotalWidth", x00180034: "InterventionDrugName", x00180035: "InterventionDrugStartTime", x00180036: "InterventionSequence", x00180037: "TherapyType", x00180038: "InterventionStatus", x00180039: "TherapyDescription", x0018003a: "InterventionDescription", x00180040: "CineRate", x00180042: "InitialCineRunState", x00180050: "SliceThickness", x00180060: "KVP", x00180070: "CountsAccumulated", x00180071: "AcquisitionTerminationCondition", x00180072: "EffectiveDuration", x00180073: "AcquisitionStartCondition", x00180074: "AcquisitionStartConditionData", x00180075: "AcquisitionEndConditionData", x00180080: "RepetitionTime", x00180081: "EchoTime", x00180082: "InversionTime", x00180083: "NumberOfAverages", x00180084: "ImagingFrequency", x00180085: "ImagedNucleus", x00180086: "EchoNumber", x00180087: "MagneticFieldStrength", x00180088: "SpacingBetweenSlices", x00180089: "NumberOfPhaseEncodingSteps", x00180090: "DataCollectionDiameter", x00180091: "EchoTrainLength", x00180093: "PercentSampling", x00180094: "PercentPhaseFieldOfView", x00180095: "PixelBandwidth", x00181000: "DeviceSerialNumber", x00181002: "DeviceUID", x00181003: "DeviceID", x00181004: "PlateID", x00181005: "GeneratorID", x00181006: "GridID", x00181007: "CassetteID", x00181008: "GantryID", x00181010: "SecondaryCaptureDeviceID", x00181011: "HardcopyCreationDeviceID", x00181012: "DateOfSecondaryCapture", x00181014: "TimeOfSecondaryCapture", x00181016: "SecondaryCaptureDeviceManufacturer", x00181017: "HardcopyDeviceManufacturer", x00181018: "SecondaryCaptureDeviceModelName", x00181019: "SecondaryCaptureDeviceSoftwareVers", x0018101a: "HardcopyDeviceSoftwareVersion", x0018101b: "HardcopyDeviceModelName", x00181020: "SoftwareVersion", x00181022: "VideoImageFormatAcquired", x00181023: "DigitalImageFormatAcquired", x00181030: "ProtocolName", x00181040: "ContrastBolusRoute", x00181041: "ContrastBolusVolume", x00181042: "ContrastBolusStartTime", x00181043: "ContrastBolusStopTime", x00181044: "ContrastBolusTotalDose", x00181045: "SyringeCounts", x00181046: "ContrastFlowRate", x00181047: "ContrastFlowDuration", x00181048: "ContrastBolusIngredient", x00181049: "ContrastBolusConcentration", x00181050: "SpatialResolution", x00181060: "TriggerTime", x00181061: "TriggerSourceOrType", x00181062: "NominalInterval", x00181063: "FrameTime", x00181064: "CardiacFramingType", x00181065: "FrameTimeVector", x00181066: "FrameDelay", x00181067: "ImageTriggerDelay", x00181068: "MultiplexGroupTimeOffset", x00181069: "TriggerTimeOffset", x0018106a: "SynchronizationTrigger", x0018106c: "SynchronizationChannel", x0018106e: "TriggerSamplePosition", x00181070: "RadiopharmaceuticalRoute", x00181071: "RadiopharmaceuticalVolume", x00181072: "RadiopharmaceuticalStartTime", x00181073: "RadiopharmaceuticalStopTime", x00181074: "RadionuclideTotalDose", x00181075: "RadionuclideHalfLife", x00181076: "RadionuclidePositronFraction", x00181077: "RadiopharmaceuticalSpecActivity", x00181078: "RadiopharmaceuticalStartDateTime", x00181079: "RadiopharmaceuticalStopDateTime", x00181080: "BeatRejectionFlag", x00181081: "LowRRValue", x00181082: "HighRRValue", x00181083: "IntervalsAcquired", x00181084: "IntervalsRejected", x00181085: "PVCRejection", x00181086: "SkipBeats", x00181088: "HeartRate", x00181090: "CardiacNumberOfImages", x00181094: "TriggerWindow", x00181100: "ReconstructionDiameter", x00181110: "DistanceSourceToDetector", x00181111: "DistanceSourceToPatient", x00181114: "EstimatedRadiographicMagnification", x00181120: "GantryDetectorTilt", x00181121: "GantryDetectorSlew", x00181130: "TableHeight", x00181131: "TableTraverse", x00181134: "TableMotion", x00181135: "TableVerticalIncrement", x00181136: "TableLateralIncrement", x00181137: "TableLongitudinalIncrement", x00181138: "TableAngle", x0018113a: "TableType", x00181140: "RotationDirection", x00181141: "AngularPosition", x00181142: "RadialPosition", x00181143: "ScanArc", x00181144: "AngularStep", x00181145: "CenterOfRotationOffset", x00181146: "RotationOffset", x00181147: "FieldOfViewShape", x00181149: "FieldOfViewDimensions", x00181150: "ExposureTime", x00181151: "XRayTubeCurrent", x00181152: "Exposure", x00181153: "ExposureInMicroAmpSec", x00181154: "AveragePulseWidth", x00181155: "RadiationSetting", x00181156: "RectificationType", x0018115a: "RadiationMode", x0018115e: "ImageAreaDoseProduct", x00181160: "FilterType", x00181161: "TypeOfFilters", x00181162: "IntensifierSize", x00181164: "ImagerPixelSpacing", x00181166: "Grid", x00181170: "GeneratorPower", x00181180: "CollimatorGridName", x00181181: "CollimatorType", x00181182: "FocalDistance", x00181183: "XFocusCenter", x00181184: "YFocusCenter", x00181190: "FocalSpots", x00181191: "AnodeTargetMaterial", x001811a0: "BodyPartThickness", x001811a2: "CompressionForce", x00181200: "DateOfLastCalibration", x00181201: "TimeOfLastCalibration", x00181210: "ConvolutionKernel", x00181240: "UpperLowerPixelValues", x00181242: "ActualFrameDuration", x00181243: "CountRate", x00181244: "PreferredPlaybackSequencing", x00181250: "ReceiveCoilName", x00181251: "TransmitCoilName", x00181260: "PlateType", x00181261: "PhosphorType", x00181300: "ScanVelocity", x00181301: "WholeBodyTechnique", x00181302: "ScanLength", x00181310: "AcquisitionMatrix", x00181312: "InPlanePhaseEncodingDirection", x00181314: "FlipAngle", x00181315: "VariableFlipAngleFlag", x00181316: "SAR", x00181318: "DB-Dt", x00181400: "AcquisitionDeviceProcessingDescr", x00181401: "AcquisitionDeviceProcessingCode", x00181402: "CassetteOrientation", x00181403: "CassetteSize", x00181404: "ExposuresOnPlate", x00181405: "RelativeXRayExposure", x00181450: "ColumnAngulation", x00181460: "TomoLayerHeight", x00181470: "TomoAngle", x00181480: "TomoTime", x00181490: "TomoType", x00181491: "TomoClass", x00181495: "NumberOfTomosynthesisSourceImages", x00181500: "PositionerMotion", x00181508: "PositionerType", x00181510: "PositionerPrimaryAngle", x00181511: "PositionerSecondaryAngle", x00181520: "PositionerPrimaryAngleIncrement", x00181521: "PositionerSecondaryAngleIncrement", x00181530: "DetectorPrimaryAngle", x00181531: "DetectorSecondaryAngle", x00181600: "ShutterShape", x00181602: "ShutterLeftVerticalEdge", x00181604: "ShutterRightVerticalEdge", x00181606: "ShutterUpperHorizontalEdge", x00181608: "ShutterLowerHorizontalEdge", x00181610: "CenterOfCircularShutter", x00181612: "RadiusOfCircularShutter", x00181620: "VerticesOfPolygonalShutter", x00181622: "ShutterPresentationValue", x00181623: "ShutterOverlayGroup", x00181624: "ShutterPresentationColorCIELabVal", x00181700: "CollimatorShape", x00181702: "CollimatorLeftVerticalEdge", x00181704: "CollimatorRightVerticalEdge", x00181706: "CollimatorUpperHorizontalEdge", x00181708: "CollimatorLowerHorizontalEdge", x00181710: "CenterOfCircularCollimator", x00181712: "RadiusOfCircularCollimator", x00181720: "VerticesOfPolygonalCollimator", x00181800: "AcquisitionTimeSynchronized", x00181801: "TimeSource", x00181802: "TimeDistributionProtocol", x00181803: "NTPSourceAddress", x00182001: "PageNumberVector", x00182002: "FrameLabelVector", x00182003: "FramePrimaryAngleVector", x00182004: "FrameSecondaryAngleVector", x00182005: "SliceLocationVector", x00182006: "DisplayWindowLabelVector", x00182010: "NominalScannedPixelSpacing", x00182020: "DigitizingDeviceTransportDirection", x00182030: "RotationOfScannedFilm", x00183100: "IVUSAcquisition", x00183101: "IVUSPullbackRate", x00183102: "IVUSGatedRate", x00183103: "IVUSPullbackStartFrameNumber", x00183104: "IVUSPullbackStopFrameNumber", x00183105: "LesionNumber", x00184000: "AcquisitionComments", x00185000: "OutputPower", x00185010: "TransducerData", x00185012: "FocusDepth", x00185020: "ProcessingFunction", x00185021: "PostprocessingFunction", x00185022: "MechanicalIndex", x00185024: "BoneThermalIndex", x00185026: "CranialThermalIndex", x00185027: "SoftTissueThermalIndex", x00185028: "SoftTissueFocusThermalIndex", x00185029: "SoftTissueSurfaceThermalIndex", x00185030: "DynamicRange", x00185040: "TotalGain", x00185050: "DepthOfScanField", x00185100: "PatientPosition", x00185101: "ViewPosition", x00185104: "ProjectionEponymousNameCodeSeq", x00185210: "ImageTransformationMatrix", x00185212: "ImageTranslationVector", x00186000: "Sensitivity", x00186011: "SequenceOfUltrasoundRegions", x00186012: "RegionSpatialFormat", x00186014: "RegionDataType", x00186016: "RegionFlags", x00186018: "RegionLocationMinX0", x0018601a: "RegionLocationMinY0", x0018601c: "RegionLocationMaxX1", x0018601e: "RegionLocationMaxY1", x00186020: "ReferencePixelX0", x00186022: "ReferencePixelY0", x00186024: "PhysicalUnitsXDirection", x00186026: "PhysicalUnitsYDirection", x00186028: "ReferencePixelPhysicalValueX", x0018602a: "ReferencePixelPhysicalValueY", x0018602c: "PhysicalDeltaX", x0018602e: "PhysicalDeltaY", x00186030: "TransducerFrequency", x00186031: "TransducerType", x00186032: "PulseRepetitionFrequency", x00186034: "DopplerCorrectionAngle", x00186036: "SteeringAngle", x00186038: "DopplerSampleVolumeXPosRetired", x00186039: "DopplerSampleVolumeXPosition", x0018603a: "DopplerSampleVolumeYPosRetired", x0018603b: "DopplerSampleVolumeYPosition", x0018603c: "TMLinePositionX0Retired", x0018603d: "TMLinePositionX0", x0018603e: "TMLinePositionY0Retired", x0018603f: "TMLinePositionY0", x00186040: "TMLinePositionX1Retired", x00186041: "TMLinePositionX1", x00186042: "TMLinePositionY1Retired", x00186043: "TMLinePositionY1", x00186044: "PixelComponentOrganization", x00186046: "PixelComponentMask", x00186048: "PixelComponentRangeStart", x0018604a: "PixelComponentRangeStop", x0018604c: "PixelComponentPhysicalUnits", x0018604e: "PixelComponentDataType", x00186050: "NumberOfTableBreakPoints", x00186052: "TableOfXBreakPoints", x00186054: "TableOfYBreakPoints", x00186056: "NumberOfTableEntries", x00186058: "TableOfPixelValues", x0018605a: "TableOfParameterValues", x00186060: "RWaveTimeVector", x00187000: "DetectorConditionsNominalFlag", x00187001: "DetectorTemperature", x00187004: "DetectorType", x00187005: "DetectorConfiguration", x00187006: "DetectorDescription", x00187008: "DetectorMode", x0018700a: "DetectorID", x0018700c: "DateOfLastDetectorCalibration", x0018700e: "TimeOfLastDetectorCalibration", x00187010: "DetectorExposuresSinceCalibration", x00187011: "DetectorExposuresSinceManufactured", x00187012: "DetectorTimeSinceLastExposure", x00187014: "DetectorActiveTime", x00187016: "DetectorActiveOffsetFromExposure", x0018701a: "DetectorBinning", x00187020: "DetectorElementPhysicalSize", x00187022: "DetectorElementSpacing", x00187024: "DetectorActiveShape", x00187026: "DetectorActiveDimensions", x00187028: "DetectorActiveOrigin", x0018702a: "DetectorManufacturerName", x0018702b: "DetectorManufacturersModelName", x00187030: "FieldOfViewOrigin", x00187032: "FieldOfViewRotation", x00187034: "FieldOfViewHorizontalFlip", x00187040: "GridAbsorbingMaterial", x00187041: "GridSpacingMaterial", x00187042: "GridThickness", x00187044: "GridPitch", x00187046: "GridAspectRatio", x00187048: "GridPeriod", x0018704c: "GridFocalDistance", x00187050: "FilterMaterial", x00187052: "FilterThicknessMinimum", x00187054: "FilterThicknessMaximum", x00187060: "ExposureControlMode", x00187062: "ExposureControlModeDescription", x00187064: "ExposureStatus", x00187065: "PhototimerSetting", x00188150: "ExposureTimeInMicroSec", x00188151: "XRayTubeCurrentInMicroAmps", x00189004: "ContentQualification", x00189005: "PulseSequenceName", x00189006: "MRImagingModifierSequence", x00189008: "EchoPulseSequence", x00189009: "InversionRecovery", x00189010: "FlowCompensation", x00189011: "MultipleSpinEcho", x00189012: "MultiPlanarExcitation", x00189014: "PhaseContrast", x00189015: "TimeOfFlightContrast", x00189016: "Spoiling", x00189017: "SteadyStatePulseSequence", x00189018: "EchoPlanarPulseSequence", x00189019: "TagAngleFirstAxis", x00189020: "MagnetizationTransfer", x00189021: "T2Preparation", x00189022: "BloodSignalNulling", x00189024: "SaturationRecovery", x00189025: "SpectrallySelectedSuppression", x00189026: "SpectrallySelectedExcitation", x00189027: "SpatialPresaturation", x00189028: "Tagging", x00189029: "OversamplingPhase", x00189030: "TagSpacingFirstDimension", x00189032: "GeometryOfKSpaceTraversal", x00189033: "SegmentedKSpaceTraversal", x00189034: "RectilinearPhaseEncodeReordering", x00189035: "TagThickness", x00189036: "PartialFourierDirection", x00189037: "CardiacSynchronizationTechnique", x00189041: "ReceiveCoilManufacturerName", x00189042: "MRReceiveCoilSequence", x00189043: "ReceiveCoilType", x00189044: "QuadratureReceiveCoil", x00189045: "MultiCoilDefinitionSequence", x00189046: "MultiCoilConfiguration", x00189047: "MultiCoilElementName", x00189048: "MultiCoilElementUsed", x00189049: "MRTransmitCoilSequence", x00189050: "TransmitCoilManufacturerName", x00189051: "TransmitCoilType", x00189052: "SpectralWidth", x00189053: "ChemicalShiftReference", x00189054: "VolumeLocalizationTechnique", x00189058: "MRAcquisitionFrequencyEncodeSteps", x00189059: "Decoupling", x00189060: "DecoupledNucleus", x00189061: "DecouplingFrequency", x00189062: "DecouplingMethod", x00189063: "DecouplingChemicalShiftReference", x00189064: "KSpaceFiltering", x00189065: "TimeDomainFiltering", x00189066: "NumberOfZeroFills", x00189067: "BaselineCorrection", x00189069: "ParallelReductionFactorInPlane", x00189070: "CardiacRRIntervalSpecified", x00189073: "AcquisitionDuration", x00189074: "FrameAcquisitionDateTime", x00189075: "DiffusionDirectionality", x00189076: "DiffusionGradientDirectionSequence", x00189077: "ParallelAcquisition", x00189078: "ParallelAcquisitionTechnique", x00189079: "InversionTimes", x00189080: "MetaboliteMapDescription", x00189081: "PartialFourier", x00189082: "EffectiveEchoTime", x00189083: "MetaboliteMapCodeSequence", x00189084: "ChemicalShiftSequence", x00189085: "CardiacSignalSource", x00189087: "DiffusionBValue", x00189089: "DiffusionGradientOrientation", x00189090: "VelocityEncodingDirection", x00189091: "VelocityEncodingMinimumValue", x00189093: "NumberOfKSpaceTrajectories", x00189094: "CoverageOfKSpace", x00189095: "SpectroscopyAcquisitionPhaseRows", x00189096: "ParallelReductFactorInPlaneRetired", x00189098: "TransmitterFrequency", x00189100: "ResonantNucleus", x00189101: "FrequencyCorrection", x00189103: "MRSpectroscopyFOV-GeometrySequence", x00189104: "SlabThickness", x00189105: "SlabOrientation", x00189106: "MidSlabPosition", x00189107: "MRSpatialSaturationSequence", x00189112: "MRTimingAndRelatedParametersSeq", x00189114: "MREchoSequence", x00189115: "MRModifierSequence", x00189117: "MRDiffusionSequence", x00189118: "CardiacTriggerSequence", x00189119: "MRAveragesSequence", x00189125: "MRFOV-GeometrySequence", x00189126: "VolumeLocalizationSequence", x00189127: "SpectroscopyAcquisitionDataColumns", x00189147: "DiffusionAnisotropyType", x00189151: "FrameReferenceDateTime", x00189152: "MRMetaboliteMapSequence", x00189155: "ParallelReductionFactorOutOfPlane", x00189159: "SpectroscopyOutOfPlanePhaseSteps", x00189166: "BulkMotionStatus", x00189168: "ParallelReductionFactSecondInPlane", x00189169: "CardiacBeatRejectionTechnique", x00189170: "RespiratoryMotionCompTechnique", x00189171: "RespiratorySignalSource", x00189172: "BulkMotionCompensationTechnique", x00189173: "BulkMotionSignalSource", x00189174: "ApplicableSafetyStandardAgency", x00189175: "ApplicableSafetyStandardDescr", x00189176: "OperatingModeSequence", x00189177: "OperatingModeType", x00189178: "OperatingMode", x00189179: "SpecificAbsorptionRateDefinition", x00189180: "GradientOutputType", x00189181: "SpecificAbsorptionRateValue", x00189182: "GradientOutput", x00189183: "FlowCompensationDirection", x00189184: "TaggingDelay", x00189185: "RespiratoryMotionCompTechDescr", x00189186: "RespiratorySignalSourceID", x00189195: "ChemicalShiftsMinIntegrateLimitHz", x00189196: "ChemicalShiftsMaxIntegrateLimitHz", x00189197: "MRVelocityEncodingSequence", x00189198: "FirstOrderPhaseCorrection", x00189199: "WaterReferencedPhaseCorrection", x00189200: "MRSpectroscopyAcquisitionType", x00189214: "RespiratoryCyclePosition", x00189217: "VelocityEncodingMaximumValue", x00189218: "TagSpacingSecondDimension", x00189219: "TagAngleSecondAxis", x00189220: "FrameAcquisitionDuration", x00189226: "MRImageFrameTypeSequence", x00189227: "MRSpectroscopyFrameTypeSequence", x00189231: "MRAcqPhaseEncodingStepsInPlane", x00189232: "MRAcqPhaseEncodingStepsOutOfPlane", x00189234: "SpectroscopyAcqPhaseColumns", x00189236: "CardiacCyclePosition", x00189239: "SpecificAbsorptionRateSequence", x00189240: "RFEchoTrainLength", x00189241: "GradientEchoTrainLength", x00189295: "ChemicalShiftsMinIntegrateLimitPPM", x00189296: "ChemicalShiftsMaxIntegrateLimitPPM", x00189301: "CTAcquisitionTypeSequence", x00189302: "AcquisitionType", x00189303: "TubeAngle", x00189304: "CTAcquisitionDetailsSequence", x00189305: "RevolutionTime", x00189306: "SingleCollimationWidth", x00189307: "TotalCollimationWidth", x00189308: "CTTableDynamicsSequence", x00189309: "TableSpeed", x00189310: "TableFeedPerRotation", x00189311: "SpiralPitchFactor", x00189312: "CTGeometrySequence", x00189313: "DataCollectionCenterPatient", x00189314: "CTReconstructionSequence", x00189315: "ReconstructionAlgorithm", x00189316: "ConvolutionKernelGroup", x00189317: "ReconstructionFieldOfView", x00189318: "ReconstructionTargetCenterPatient", x00189319: "ReconstructionAngle", x00189320: "ImageFilter", x00189321: "CTExposureSequence", x00189322: "ReconstructionPixelSpacing", x00189323: "ExposureModulationType", x00189324: "EstimatedDoseSaving", x00189325: "CTXRayDetailsSequence", x00189326: "CTPositionSequence", x00189327: "TablePosition", x00189328: "ExposureTimeInMilliSec", x00189329: "CTImageFrameTypeSequence", x00189330: "XRayTubeCurrentInMilliAmps", x00189332: "ExposureInMilliAmpSec", x00189333: "ConstantVolumeFlag", x00189334: "FluoroscopyFlag", x00189335: "SourceToDataCollectionCenterDist", x00189337: "ContrastBolusAgentNumber", x00189338: "ContrastBolusIngredientCodeSeq", x00189340: "ContrastAdministrationProfileSeq", x00189341: "ContrastBolusUsageSequence", x00189342: "ContrastBolusAgentAdministered", x00189343: "ContrastBolusAgentDetected", x00189344: "ContrastBolusAgentPhase", x00189345: "CTDIvol", x00189346: "CTDIPhantomTypeCodeSequence", x00189351: "CalciumScoringMassFactorPatient", x00189352: "CalciumScoringMassFactorDevice", x00189353: "EnergyWeightingFactor", x00189360: "CTAdditionalXRaySourceSequence", x00189401: "ProjectionPixelCalibrationSequence", x00189402: "DistanceSourceToIsocenter", x00189403: "DistanceObjectToTableTop", x00189404: "ObjectPixelSpacingInCenterOfBeam", x00189405: "PositionerPositionSequence", x00189406: "TablePositionSequence", x00189407: "CollimatorShapeSequence", x00189412: "XA-XRFFrameCharacteristicsSequence", x00189417: "FrameAcquisitionSequence", x00189420: "XRayReceptorType", x00189423: "AcquisitionProtocolName", x00189424: "AcquisitionProtocolDescription", x00189425: "ContrastBolusIngredientOpaque", x00189426: "DistanceReceptorPlaneToDetHousing", x00189427: "IntensifierActiveShape", x00189428: "IntensifierActiveDimensions", x00189429: "PhysicalDetectorSize", x00189430: "PositionOfIsocenterProjection", x00189432: "FieldOfViewSequence", x00189433: "FieldOfViewDescription", x00189434: "ExposureControlSensingRegionsSeq", x00189435: "ExposureControlSensingRegionShape", x00189436: "ExposureControlSensRegionLeftEdge", x00189437: "ExposureControlSensRegionRightEdge", x00189440: "CenterOfCircExposControlSensRegion", x00189441: "RadiusOfCircExposControlSensRegion", x00189447: "ColumnAngulationPatient", x00189449: "BeamAngle", x00189451: "FrameDetectorParametersSequence", x00189452: "CalculatedAnatomyThickness", x00189455: "CalibrationSequence", x00189456: "ObjectThicknessSequence", x00189457: "PlaneIdentification", x00189461: "FieldOfViewDimensionsInFloat", x00189462: "IsocenterReferenceSystemSequence", x00189463: "PositionerIsocenterPrimaryAngle", x00189464: "PositionerIsocenterSecondaryAngle", x00189465: "PositionerIsocenterDetRotAngle", x00189466: "TableXPositionToIsocenter", x00189467: "TableYPositionToIsocenter", x00189468: "TableZPositionToIsocenter", x00189469: "TableHorizontalRotationAngle", x00189470: "TableHeadTiltAngle", x00189471: "TableCradleTiltAngle", x00189472: "FrameDisplayShutterSequence", x00189473: "AcquiredImageAreaDoseProduct", x00189474: "CArmPositionerTabletopRelationship", x00189476: "XRayGeometrySequence", x00189477: "IrradiationEventIDSequence", x00189504: "XRay3DFrameTypeSequence", x00189506: "ContributingSourcesSequence", x00189507: "XRay3DAcquisitionSequence", x00189508: "PrimaryPositionerScanArc", x00189509: "SecondaryPositionerScanArc", x00189510: "PrimaryPositionerScanStartAngle", x00189511: "SecondaryPositionerScanStartAngle", x00189514: "PrimaryPositionerIncrement", x00189515: "SecondaryPositionerIncrement", x00189516: "StartAcquisitionDateTime", x00189517: "EndAcquisitionDateTime", x00189524: "ApplicationName", x00189525: "ApplicationVersion", x00189526: "ApplicationManufacturer", x00189527: "AlgorithmType", x00189528: "AlgorithmDescription", x00189530: "XRay3DReconstructionSequence", x00189531: "ReconstructionDescription", x00189538: "PerProjectionAcquisitionSequence", x00189601: "DiffusionBMatrixSequence", x00189602: "DiffusionBValueXX", x00189603: "DiffusionBValueXY", x00189604: "DiffusionBValueXZ", x00189605: "DiffusionBValueYY", x00189606: "DiffusionBValueYZ", x00189607: "DiffusionBValueZZ", x00189701: "DecayCorrectionDateTime", x00189715: "StartDensityThreshold", x00189722: "TerminationTimeThreshold", x00189725: "DetectorGeometry", x00189727: "AxialDetectorDimension", x00189735: "PETPositionSequence", x00189739: "NumberOfIterations", x00189740: "NumberOfSubsets", x00189751: "PETFrameTypeSequence", x00189756: "ReconstructionType", x00189758: "DecayCorrected", x00189759: "AttenuationCorrected", x00189760: "ScatterCorrected", x00189761: "DeadTimeCorrected", x00189762: "GantryMotionCorrected", x00189763: "PatientMotionCorrected", x00189765: "RandomsCorrected", x00189767: "SensitivityCalibrated", x00189801: "DepthsOfFocus", x00189804: "ExclusionStartDatetime", x00189805: "ExclusionDuration", x00189807: "ImageDataTypeSequence", x00189808: "DataType", x0018980b: "AliasedDataType", x0018a001: "ContributingEquipmentSequence", x0018a002: "ContributionDateTime", x0018a003: "ContributionDescription", x00200000: "RelationshipGroupLength", x0020000d: "StudyInstanceUID", x0020000e: "SeriesInstanceUID", x00200010: "StudyID", x00200011: "SeriesNumber", x00200012: "AcquisitionNumber", x00200013: "InstanceNumber", x00200014: "IsotopeNumber", x00200015: "PhaseNumber", x00200016: "IntervalNumber", x00200017: "TimeSlotNumber", x00200018: "AngleNumber", x00200019: "ItemNumber", x00200020: "PatientOrientation", x00200022: "OverlayNumber", x00200024: "CurveNumber", x00200026: "LookupTableNumber", x00200030: "ImagePosition", x00200032: "ImagePositionPatient", x00200035: "ImageOrientation", x00200037: "ImageOrientationPatient", x00200050: "Location", x00200052: "FrameOfReferenceUID", x00200060: "Laterality", x00200062: "ImageLaterality", x00200070: "ImageGeometryType", x00200080: "MaskingImage", x00200100: "TemporalPositionIdentifier", x00200105: "NumberOfTemporalPositions", x00200110: "TemporalResolution", x00200200: "SynchronizationFrameOfReferenceUID", x00201000: "SeriesInStudy", x00201001: "AcquisitionsInSeries", x00201002: "ImagesInAcquisition", x00201003: "ImagesInSeries", x00201004: "AcquisitionsInStudy", x00201005: "ImagesInStudy", x00201020: "Reference", x00201040: "PositionReferenceIndicator", x00201041: "SliceLocation", x00201070: "OtherStudyNumbers", x00201200: "NumberOfPatientRelatedStudies", x00201202: "NumberOfPatientRelatedSeries", x00201204: "NumberOfPatientRelatedInstances", x00201206: "NumberOfStudyRelatedSeries", x00201208: "NumberOfStudyRelatedInstances", x00201209: "NumberOfSeriesRelatedInstances", x002031xx: "SourceImageIDs", x00203401: "ModifyingDeviceID", x00203402: "ModifiedImageID", x00203403: "ModifiedImageDate", x00203404: "ModifyingDeviceManufacturer", x00203405: "ModifiedImageTime", x00203406: "ModifiedImageDescription", x00204000: "ImageComments", x00205000: "OriginalImageIdentification", x00205002: "OriginalImageIdentNomenclature", x00209056: "StackID", x00209057: "InStackPositionNumber", x00209071: "FrameAnatomySequence", x00209072: "FrameLaterality", x00209111: "FrameContentSequence", x00209113: "PlanePositionSequence", x00209116: "PlaneOrientationSequence", x00209128: "TemporalPositionIndex", x00209153: "TriggerDelayTime", x00209156: "FrameAcquisitionNumber", x00209157: "DimensionIndexValues", x00209158: "FrameComments", x00209161: "ConcatenationUID", x00209162: "InConcatenationNumber", x00209163: "InConcatenationTotalNumber", x00209164: "DimensionOrganizationUID", x00209165: "DimensionIndexPointer", x00209167: "FunctionalGroupPointer", x00209213: "DimensionIndexPrivateCreator", x00209221: "DimensionOrganizationSequence", x00209222: "DimensionIndexSequence", x00209228: "ConcatenationFrameOffsetNumber", x00209238: "FunctionalGroupPrivateCreator", x00209241: "NominalPercentageOfCardiacPhase", x00209245: "NominalPercentOfRespiratoryPhase", x00209246: "StartingRespiratoryAmplitude", x00209247: "StartingRespiratoryPhase", x00209248: "EndingRespiratoryAmplitude", x00209249: "EndingRespiratoryPhase", x00209250: "RespiratoryTriggerType", x00209251: "RRIntervalTimeNominal", x00209252: "ActualCardiacTriggerDelayTime", x00209253: "RespiratorySynchronizationSequence", x00209254: "RespiratoryIntervalTime", x00209255: "NominalRespiratoryTriggerDelayTime", x00209256: "RespiratoryTriggerDelayThreshold", x00209257: "ActualRespiratoryTriggerDelayTime", x00209301: "ImagePositionVolume", x00209302: "ImageOrientationVolume", x00209308: "ApexPosition", x00209421: "DimensionDescriptionLabel", x00209450: "PatientOrientationInFrameSequence", x00209453: "FrameLabel", x00209518: "AcquisitionIndex", x00209529: "ContributingSOPInstancesRefSeq", x00209536: "ReconstructionIndex", x00220001: "LightPathFilterPassThroughWavelen", x00220002: "LightPathFilterPassBand", x00220003: "ImagePathFilterPassThroughWavelen", x00220004: "ImagePathFilterPassBand", x00220005: "PatientEyeMovementCommanded", x00220006: "PatientEyeMovementCommandCodeSeq", x00220007: "SphericalLensPower", x00220008: "CylinderLensPower", x00220009: "CylinderAxis", x0022000a: "EmmetropicMagnification", x0022000b: "IntraOcularPressure", x0022000c: "HorizontalFieldOfView", x0022000d: "PupilDilated", x0022000e: "DegreeOfDilation", x00220010: "StereoBaselineAngle", x00220011: "StereoBaselineDisplacement", x00220012: "StereoHorizontalPixelOffset", x00220013: "StereoVerticalPixelOffset", x00220014: "StereoRotation", x00220015: "AcquisitionDeviceTypeCodeSequence", x00220016: "IlluminationTypeCodeSequence", x00220017: "LightPathFilterTypeStackCodeSeq", x00220018: "ImagePathFilterTypeStackCodeSeq", x00220019: "LensesCodeSequence", x0022001a: "ChannelDescriptionCodeSequence", x0022001b: "RefractiveStateSequence", x0022001c: "MydriaticAgentCodeSequence", x0022001d: "RelativeImagePositionCodeSequence", x00220020: "StereoPairsSequence", x00220021: "LeftImageSequence", x00220022: "RightImageSequence", x00220030: "AxialLengthOfTheEye", x00220031: "OphthalmicFrameLocationSequence", x00220032: "ReferenceCoordinates", x00220035: "DepthSpatialResolution", x00220036: "MaximumDepthDistortion", x00220037: "AlongScanSpatialResolution", x00220038: "MaximumAlongScanDistortion", x00220039: "OphthalmicImageOrientation", x00220041: "DepthOfTransverseImage", x00220042: "MydriaticAgentConcUnitsSeq", x00220048: "AcrossScanSpatialResolution", x00220049: "MaximumAcrossScanDistortion", x0022004e: "MydriaticAgentConcentration", x00220055: "IlluminationWaveLength", x00220056: "IlluminationPower", x00220057: "IlluminationBandwidth", x00220058: "MydriaticAgentSequence", x00280000: "ImagePresentationGroupLength", x00280002: "SamplesPerPixel", x00280003: "SamplesPerPixelUsed", x00280004: "PhotometricInterpretation", x00280005: "ImageDimensions", x00280006: "PlanarConfiguration", x00280008: "NumberOfFrames", x00280009: "FrameIncrementPointer", x0028000a: "FrameDimensionPointer", x00280010: "Rows", x00280011: "Columns", x00280012: "Planes", x00280014: "UltrasoundColorDataPresent", x00280030: "PixelSpacing", x00280031: "ZoomFactor", x00280032: "ZoomCenter", x00280034: "PixelAspectRatio", x00280040: "ImageFormat", x00280050: "ManipulatedImage", x00280051: "CorrectedImage", x0028005f: "CompressionRecognitionCode", x00280060: "CompressionCode", x00280061: "CompressionOriginator", x00280062: "CompressionLabel", x00280063: "CompressionDescription", x00280065: "CompressionSequence", x00280066: "CompressionStepPointers", x00280068: "RepeatInterval", x00280069: "BitsGrouped", x00280070: "PerimeterTable", x00280071: "PerimeterValue", x00280080: "PredictorRows", x00280081: "PredictorColumns", x00280082: "PredictorConstants", x00280090: "BlockedPixels", x00280091: "BlockRows", x00280092: "BlockColumns", x00280093: "RowOverlap", x00280094: "ColumnOverlap", x00280100: "BitsAllocated", x00280101: "BitsStored", x00280102: "HighBit", x00280103: "PixelRepresentation", x00280104: "SmallestValidPixelValue", x00280105: "LargestValidPixelValue", x00280106: "SmallestImagePixelValue", x00280107: "LargestImagePixelValue", x00280108: "SmallestPixelValueInSeries", x00280109: "LargestPixelValueInSeries", x00280110: "SmallestImagePixelValueInPlane", x00280111: "LargestImagePixelValueInPlane", x00280120: "PixelPaddingValue", x00280121: "PixelPaddingRangeLimit", x00280200: "ImageLocation", x00280300: "QualityControlImage", x00280301: "BurnedInAnnotation", x00280400: "TransformLabel", x00280401: "TransformVersionNumber", x00280402: "NumberOfTransformSteps", x00280403: "SequenceOfCompressedData", x00280404: "DetailsOfCoefficients", x002804x2: "CoefficientCoding", x002804x3: "CoefficientCodingPointers", x00280700: "DCTLabel", x00280701: "DataBlockDescription", x00280702: "DataBlock", x00280710: "NormalizationFactorFormat", x00280720: "ZonalMapNumberFormat", x00280721: "ZonalMapLocation", x00280722: "ZonalMapFormat", x00280730: "AdaptiveMapFormat", x00280740: "CodeNumberFormat", x002808x0: "CodeLabel", x002808x2: "NumberOfTables", x002808x3: "CodeTableLocation", x002808x4: "BitsForCodeWord", x002808x8: "ImageDataLocation", x00280a02: "PixelSpacingCalibrationType", x00280a04: "PixelSpacingCalibrationDescription", x00281040: "PixelIntensityRelationship", x00281041: "PixelIntensityRelationshipSign", x00281050: "WindowCenter", x00281051: "WindowWidth", x00281052: "RescaleIntercept", x00281053: "RescaleSlope", x00281054: "RescaleType", x00281055: "WindowCenterAndWidthExplanation", x00281056: "VOI_LUTFunction", x00281080: "GrayScale", x00281090: "RecommendedViewingMode", x00281100: "GrayLookupTableDescriptor", x00281101: "RedPaletteColorTableDescriptor", x00281102: "GreenPaletteColorTableDescriptor", x00281103: "BluePaletteColorTableDescriptor", x00281111: "LargeRedPaletteColorTableDescr", x00281112: "LargeGreenPaletteColorTableDescr", x00281113: "LargeBluePaletteColorTableDescr", x00281199: "PaletteColorTableUID", x00281200: "GrayLookupTableData", x00281201: "RedPaletteColorTableData", x00281202: "GreenPaletteColorTableData", x00281203: "BluePaletteColorTableData", x00281211: "LargeRedPaletteColorTableData", x00281212: "LargeGreenPaletteColorTableData", x00281213: "LargeBluePaletteColorTableData", x00281214: "LargePaletteColorLookupTableUID", x00281221: "SegmentedRedColorTableData", x00281222: "SegmentedGreenColorTableData", x00281223: "SegmentedBlueColorTableData", x00281300: "BreastImplantPresent", x00281350: "PartialView", x00281351: "PartialViewDescription", x00281352: "PartialViewCodeSequence", x0028135a: "SpatialLocationsPreserved", x00281402: "DataPathAssignment", x00281404: "BlendingLUT1Sequence", x00281406: "BlendingWeightConstant", x00281408: "BlendingLookupTableData", x0028140c: "BlendingLUT2Sequence", x0028140e: "DataPathID", x0028140f: "RGBLUTTransferFunction", x00281410: "AlphaLUTTransferFunction", x00282000: "ICCProfile", x00282110: "LossyImageCompression", x00282112: "LossyImageCompressionRatio", x00282114: "LossyImageCompressionMethod", x00283000: "ModalityLUTSequence", x00283002: "LUTDescriptor", x00283003: "LUTExplanation", x00283004: "ModalityLUTType", x00283006: "LUTData", x00283010: "VOILUTSequence", x00283110: "SoftcopyVOILUTSequence", x00284000: "ImagePresentationComments", x00285000: "BiPlaneAcquisitionSequence", x00286010: "RepresentativeFrameNumber", x00286020: "FrameNumbersOfInterest", x00286022: "FrameOfInterestDescription", x00286023: "FrameOfInterestType", x00286030: "MaskPointers", x00286040: "RWavePointer", x00286100: "MaskSubtractionSequence", x00286101: "MaskOperation", x00286102: "ApplicableFrameRange", x00286110: "MaskFrameNumbers", x00286112: "ContrastFrameAveraging", x00286114: "MaskSubPixelShift", x00286120: "TIDOffset", x00286190: "MaskOperationExplanation", x00287fe0: "PixelDataProviderURL", x00289001: "DataPointRows", x00289002: "DataPointColumns", x00289003: "SignalDomainColumns", x00289099: "LargestMonochromePixelValue", x00289108: "DataRepresentation", x00289110: "PixelMeasuresSequence", x00289132: "FrameVOILUTSequence", x00289145: "PixelValueTransformationSequence", x00289235: "SignalDomainRows", x00289411: "DisplayFilterPercentage", x00289415: "FramePixelShiftSequence", x00289416: "SubtractionItemID", x00289422: "PixelIntensityRelationshipLUTSeq", x00289443: "FramePixelDataPropertiesSequence", x00289444: "GeometricalProperties", x00289445: "GeometricMaximumDistortion", x00289446: "ImageProcessingApplied", x00289454: "MaskSelectionMode", x00289474: "LUTFunction", x00289478: "MaskVisibilityPercentage", x00289501: "PixelShiftSequence", x00289502: "RegionPixelShiftSequence", x00289503: "VerticesOfTheRegion", x00289506: "PixelShiftFrameRange", x00289507: "LUTFrameRange", x00289520: "ImageToEquipmentMappingMatrix", x00289537: "EquipmentCoordinateSystemID", x00320000: "StudyGroupLength", x0032000a: "StudyStatusID", x0032000c: "StudyPriorityID", x00320012: "StudyIDIssuer", x00320032: "StudyVerifiedDate", x00320033: "StudyVerifiedTime", x00320034: "StudyReadDate", x00320035: "StudyReadTime", x00321000: "ScheduledStudyStartDate", x00321001: "ScheduledStudyStartTime", x00321010: "ScheduledStudyStopDate", x00321011: "ScheduledStudyStopTime", x00321020: "ScheduledStudyLocation", x00321021: "ScheduledStudyLocationAETitle", x00321030: "ReasonForStudy", x00321031: "RequestingPhysicianIDSequence", x00321032: "RequestingPhysician", x00321033: "RequestingService", x00321040: "StudyArrivalDate", x00321041: "StudyArrivalTime", x00321050: "StudyCompletionDate", x00321051: "StudyCompletionTime", x00321055: "StudyComponentStatusID", x00321060: "RequestedProcedureDescription", x00321064: "RequestedProcedureCodeSequence", x00321070: "RequestedContrastAgent", x00324000: "StudyComments", x00380004: "ReferencedPatientAliasSequence", x00380008: "VisitStatusID", x00380010: "AdmissionID", x00380011: "IssuerOfAdmissionID", x00380016: "RouteOfAdmissions", x0038001a: "ScheduledAdmissionDate", x0038001b: "ScheduledAdmissionTime", x0038001c: "ScheduledDischargeDate", x0038001d: "ScheduledDischargeTime", x0038001e: "ScheduledPatientInstitResidence", x00380020: "AdmittingDate", x00380021: "AdmittingTime", x00380030: "DischargeDate", x00380032: "DischargeTime", x00380040: "DischargeDiagnosisDescription", x00380044: "DischargeDiagnosisCodeSequence", x00380050: "SpecialNeeds", x00380060: "ServiceEpisodeID", x00380061: "IssuerOfServiceEpisodeID", x00380062: "ServiceEpisodeDescription", x00380100: "PertinentDocumentsSequence", x00380300: "CurrentPatientLocation", x00380400: "PatientInstitutionResidence", x00380500: "PatientState", x00380502: "PatientClinicalTrialParticipSeq", x00384000: "VisitComments", x003a0004: "WaveformOriginality", x003a0005: "NumberOfWaveformChannels", x003a0010: "NumberOfWaveformSamples", x003a001a: "SamplingFrequency", x003a0020: "MultiplexGroupLabel", x003a0200: "ChannelDefinitionSequence", x003a0202: "WaveformChannelNumber", x003a0203: "ChannelLabel", x003a0205: "ChannelStatus", x003a0208: "ChannelSourceSequence", x003a0209: "ChannelSourceModifiersSequence", x003a020a: "SourceWaveformSequence", x003a020c: "ChannelDerivationDescription", x003a0210: "ChannelSensitivity", x003a0211: "ChannelSensitivityUnitsSequence", x003a0212: "ChannelSensitivityCorrectionFactor", x003a0213: "ChannelBaseline", x003a0214: "ChannelTimeSkew", x003a0215: "ChannelSampleSkew", x003a0218: "ChannelOffset", x003a021a: "WaveformBitsStored", x003a0220: "FilterLowFrequency", x003a0221: "FilterHighFrequency", x003a0222: "NotchFilterFrequency", x003a0223: "NotchFilterBandwidth", x003a0230: "WaveformDataDisplayScale", x003a0231: "WaveformDisplayBkgCIELabValue", x003a0240: "WaveformPresentationGroupSequence", x003a0241: "PresentationGroupNumber", x003a0242: "ChannelDisplaySequence", x003a0244: "ChannelRecommendDisplayCIELabValue", x003a0245: "ChannelPosition", x003a0246: "DisplayShadingFlag", x003a0247: "FractionalChannelDisplayScale", x003a0248: "AbsoluteChannelDisplayScale", x003a0300: "MultiplexAudioChannelsDescrCodeSeq", x003a0301: "ChannelIdentificationCode", x003a0302: "ChannelMode", x00400001: "ScheduledStationAETitle", x00400002: "ScheduledProcedureStepStartDate", x00400003: "ScheduledProcedureStepStartTime", x00400004: "ScheduledProcedureStepEndDate", x00400005: "ScheduledProcedureStepEndTime", x00400006: "ScheduledPerformingPhysiciansName", x00400007: "ScheduledProcedureStepDescription", x00400008: "ScheduledProtocolCodeSequence", x00400009: "ScheduledProcedureStepID", x0040000a: "StageCodeSequence", x0040000b: "ScheduledPerformingPhysicianIDSeq", x00400010: "ScheduledStationName", x00400011: "ScheduledProcedureStepLocation", x00400012: "PreMedication", x00400020: "ScheduledProcedureStepStatus", x00400031: "LocalNamespaceEntityID", x00400032: "UniversalEntityID", x00400033: "UniversalEntityIDType", x00400035: "IdentifierTypeCode", x00400036: "AssigningFacilitySequence", x00400100: "ScheduledProcedureStepSequence", x00400220: "ReferencedNonImageCompositeSOPSeq", x00400241: "PerformedStationAETitle", x00400242: "PerformedStationName", x00400243: "PerformedLocation", x00400244: "PerformedProcedureStepStartDate", x00400245: "PerformedProcedureStepStartTime", x00400250: "PerformedProcedureStepEndDate", x00400251: "PerformedProcedureStepEndTime", x00400252: "PerformedProcedureStepStatus", x00400253: "PerformedProcedureStepID", x00400254: "PerformedProcedureStepDescription", x00400255: "PerformedProcedureTypeDescription", x00400260: "PerformedProtocolCodeSequence", x00400261: "PerformedProtocolType", x00400270: "ScheduledStepAttributesSequence", x00400275: "RequestAttributesSequence", x00400280: "CommentsOnPerformedProcedureStep", x00400281: "ProcStepDiscontinueReasonCodeSeq", x00400293: "QuantitySequence", x00400294: "Quantity", x00400295: "MeasuringUnitsSequence", x00400296: "BillingItemSequence", x00400300: "TotalTimeOfFluoroscopy", x00400301: "TotalNumberOfExposures", x00400302: "EntranceDose", x00400303: "ExposedArea", x00400306: "DistanceSourceToEntrance", x00400307: "DistanceSourceToSupport", x0040030e: "ExposureDoseSequence", x00400310: "CommentsOnRadiationDose", x00400312: "XRayOutput", x00400314: "HalfValueLayer", x00400316: "OrganDose", x00400318: "OrganExposed", x00400320: "BillingProcedureStepSequence", x00400321: "FilmConsumptionSequence", x00400324: "BillingSuppliesAndDevicesSequence", x00400330: "ReferencedProcedureStepSequence", x00400340: "PerformedSeriesSequence", x00400400: "CommentsOnScheduledProcedureStep", x00400440: "ProtocolContextSequence", x00400441: "ContentItemModifierSequence", x0040050a: "SpecimenAccessionNumber", x00400512: "ContainerIdentifier", x0040051a: "ContainerDescription", x00400550: "SpecimenSequence", x00400551: "SpecimenIdentifier", x00400552: "SpecimenDescriptionSequenceTrial", x00400553: "SpecimenDescriptionTrial", x00400554: "SpecimenUID", x00400555: "AcquisitionContextSequence", x00400556: "AcquisitionContextDescription", x0040059a: "SpecimenTypeCodeSequence", x00400600: "SpecimenShortDescription", x004006fa: "SlideIdentifier", x0040071a: "ImageCenterPointCoordinatesSeq", x0040072a: "XOffsetInSlideCoordinateSystem", x0040073a: "YOffsetInSlideCoordinateSystem", x0040074a: "ZOffsetInSlideCoordinateSystem", x004008d8: "PixelSpacingSequence", x004008da: "CoordinateSystemAxisCodeSequence", x004008ea: "MeasurementUnitsCodeSequence", x004009f8: "VitalStainCodeSequenceTrial", x00401001: "RequestedProcedureID", x00401002: "ReasonForRequestedProcedure", x00401003: "RequestedProcedurePriority", x00401004: "PatientTransportArrangements", x00401005: "RequestedProcedureLocation", x00401006: "PlacerOrderNumber-Procedure", x00401007: "FillerOrderNumber-Procedure", x00401008: "ConfidentialityCode", x00401009: "ReportingPriority", x0040100a: "ReasonForRequestedProcedureCodeSeq", x00401010: "NamesOfIntendedRecipientsOfResults", x00401011: "IntendedRecipientsOfResultsIDSeq", x00401101: "PersonIdentificationCodeSequence", x00401102: "PersonAddress", x00401103: "PersonTelephoneNumbers", x00401400: "RequestedProcedureComments", x00402001: "ReasonForImagingServiceRequest", x00402004: "IssueDateOfImagingServiceRequest", x00402005: "IssueTimeOfImagingServiceRequest", x00402006: "PlacerOrderNumberImagingServiceRequestRetired", x00402007: "FillerOrderNumberImagingServiceRequestRetired", x00402008: "OrderEnteredBy", x00402009: "OrderEntererLocation", x00402010: "OrderCallbackPhoneNumber", x00402016: "PlacerOrderNum-ImagingServiceReq", x00402017: "FillerOrderNum-ImagingServiceReq", x00402400: "ImagingServiceRequestComments", x00403001: "ConfidentialityOnPatientDataDescr", x00404001: "GenPurposeScheduledProcStepStatus", x00404002: "GenPurposePerformedProcStepStatus", x00404003: "GenPurposeSchedProcStepPriority", x00404004: "SchedProcessingApplicationsCodeSeq", x00404005: "SchedProcedureStepStartDateAndTime", x00404006: "MultipleCopiesFlag", x00404007: "PerformedProcessingAppsCodeSeq", x00404009: "HumanPerformerCodeSequence", x00404010: "SchedProcStepModificationDateTime", x00404011: "ExpectedCompletionDateAndTime", x00404015: "ResultingGenPurposePerfProcStepSeq", x00404016: "RefGenPurposeSchedProcStepSeq", x00404018: "ScheduledWorkitemCodeSequence", x00404019: "PerformedWorkitemCodeSequence", x00404020: "InputAvailabilityFlag", x00404021: "InputInformationSequence", x00404022: "RelevantInformationSequence", x00404023: "RefGenPurSchedProcStepTransUID", x00404025: "ScheduledStationNameCodeSequence", x00404026: "ScheduledStationClassCodeSequence", x00404027: "SchedStationGeographicLocCodeSeq", x00404028: "PerformedStationNameCodeSequence", x00404029: "PerformedStationClassCodeSequence", x00404030: "PerformedStationGeogLocCodeSeq", x00404031: "RequestedSubsequentWorkItemCodeSeq", x00404032: "NonDICOMOutputCodeSequence", x00404033: "OutputInformationSequence", x00404034: "ScheduledHumanPerformersSequence", x00404035: "ActualHumanPerformersSequence", x00404036: "HumanPerformersOrganization", x00404037: "HumanPerformerName", x00404040: "RawDataHandling", x00408302: "EntranceDoseInMilliGy", x00409094: "RefImageRealWorldValueMappingSeq", x00409096: "RealWorldValueMappingSequence", x00409098: "PixelValueMappingCodeSequence", x00409210: "LUTLabel", x00409211: "RealWorldValueLastValueMapped", x00409212: "RealWorldValueLUTData", x00409216: "RealWorldValueFirstValueMapped", x00409224: "RealWorldValueIntercept", x00409225: "RealWorldValueSlope", x0040a010: "RelationshipType", x0040a027: "VerifyingOrganization", x0040a030: "VerificationDateTime", x0040a032: "ObservationDateTime", x0040a040: "ValueType", x0040a043: "ConceptNameCodeSequence", x0040a050: "ContinuityOfContent", x0040a073: "VerifyingObserverSequence", x0040a075: "VerifyingObserverName", x0040a078: "AuthorObserverSequence", x0040a07a: "ParticipantSequence", x0040a07c: "CustodialOrganizationSequence", x0040a080: "ParticipationType", x0040a082: "ParticipationDateTime", x0040a084: "ObserverType", x0040a088: "VerifyingObserverIdentCodeSequence", x0040a090: "EquivalentCDADocumentSequence", x0040a0b0: "ReferencedWaveformChannels", x0040a120: "DateTime", x0040a121: "Date", x0040a122: "Time", x0040a123: "PersonName", x0040a124: "UID", x0040a130: "TemporalRangeType", x0040a132: "ReferencedSamplePositions", x0040a136: "ReferencedFrameNumbers", x0040a138: "ReferencedTimeOffsets", x0040a13a: "ReferencedDateTime", x0040a160: "TextValue", x0040a168: "ConceptCodeSequence", x0040a170: "PurposeOfReferenceCodeSequence", x0040a180: "AnnotationGroupNumber", x0040a195: "ModifierCodeSequence", x0040a300: "MeasuredValueSequence", x0040a301: "NumericValueQualifierCodeSequence", x0040a30a: "NumericValue", x0040a353: "AddressTrial", x0040a354: "TelephoneNumberTrial", x0040a360: "PredecessorDocumentsSequence", x0040a370: "ReferencedRequestSequence", x0040a372: "PerformedProcedureCodeSequence", x0040a375: "CurrentRequestedProcEvidenceSeq", x0040a385: "PertinentOtherEvidenceSequence", x0040a390: "HL7StructuredDocumentRefSeq", x0040a491: "CompletionFlag", x0040a492: "CompletionFlagDescription", x0040a493: "VerificationFlag", x0040a494: "ArchiveRequested", x0040a496: "PreliminaryFlag", x0040a504: "ContentTemplateSequence", x0040a525: "IdenticalDocumentsSequence", x0040a730: "ContentSequence", x0040b020: "AnnotationSequence", x0040db00: "TemplateIdentifier", x0040db06: "TemplateVersion", x0040db07: "TemplateLocalVersion", x0040db0b: "TemplateExtensionFlag", x0040db0c: "TemplateExtensionOrganizationUID", x0040db0d: "TemplateExtensionCreatorUID", x0040db73: "ReferencedContentItemIdentifier", x0040e001: "HL7InstanceIdentifier", x0040e004: "HL7DocumentEffectiveTime", x0040e006: "HL7DocumentTypeCodeSequence", x0040e010: "RetrieveURI", x0040e011: "RetrieveLocationUID", x00420010: "DocumentTitle", x00420011: "EncapsulatedDocument", x00420012: "MIMETypeOfEncapsulatedDocument", x00420013: "SourceInstanceSequence", x00420014: "ListOfMIMETypes", x00440001: "ProductPackageIdentifier", x00440002: "SubstanceAdministrationApproval", x00440003: "ApprovalStatusFurtherDescription", x00440004: "ApprovalStatusDateTime", x00440007: "ProductTypeCodeSequence", x00440008: "ProductName", x00440009: "ProductDescription", x0044000a: "ProductLotIdentifier", x0044000b: "ProductExpirationDateTime", x00440010: "SubstanceAdministrationDateTime", x00440011: "SubstanceAdministrationNotes", x00440012: "SubstanceAdministrationDeviceID", x00440013: "ProductParameterSequence", x00440019: "SubstanceAdminParameterSeq", x00460012: "LensDescription", x00460014: "RightLensSequence", x00460015: "LeftLensSequence", x00460018: "CylinderSequence", x00460028: "PrismSequence", x00460030: "HorizontalPrismPower", x00460032: "HorizontalPrismBase", x00460034: "VerticalPrismPower", x00460036: "VerticalPrismBase", x00460038: "LensSegmentType", x00460040: "OpticalTransmittance", x00460042: "ChannelWidth", x00460044: "PupilSize", x00460046: "CornealSize", x00460060: "DistancePupillaryDistance", x00460062: "NearPupillaryDistance", x00460064: "OtherPupillaryDistance", x00460075: "RadiusOfCurvature", x00460076: "KeratometricPower", x00460077: "KeratometricAxis", x00460092: "BackgroundColor", x00460094: "Optotype", x00460095: "OptotypePresentation", x00460100: "AddNearSequence", x00460101: "AddIntermediateSequence", x00460102: "AddOtherSequence", x00460104: "AddPower", x00460106: "ViewingDistance", x00460125: "ViewingDistanceType", x00460135: "VisualAcuityModifiers", x00460137: "DecimalVisualAcuity", x00460139: "OptotypeDetailedDefinition", x00460146: "SpherePower", x00460147: "CylinderPower", x00500004: "CalibrationImage", x00500010: "DeviceSequence", x00500014: "DeviceLength", x00500015: "ContainerComponentWidth", x00500016: "DeviceDiameter", x00500017: "DeviceDiameterUnits", x00500018: "DeviceVolume", x00500019: "InterMarkerDistance", x0050001b: "ContainerComponentID", x00500020: "DeviceDescription", x00540010: "EnergyWindowVector", x00540011: "NumberOfEnergyWindows", x00540012: "EnergyWindowInformationSequence", x00540013: "EnergyWindowRangeSequence", x00540014: "EnergyWindowLowerLimit", x00540015: "EnergyWindowUpperLimit", x00540016: "RadiopharmaceuticalInformationSeq", x00540017: "ResidualSyringeCounts", x00540018: "EnergyWindowName", x00540020: "DetectorVector", x00540021: "NumberOfDetectors", x00540022: "DetectorInformationSequence", x00540030: "PhaseVector", x00540031: "NumberOfPhases", x00540032: "PhaseInformationSequence", x00540033: "NumberOfFramesInPhase", x00540036: "PhaseDelay", x00540038: "PauseBetweenFrames", x00540039: "PhaseDescription", x00540050: "RotationVector", x00540051: "NumberOfRotations", x00540052: "RotationInformationSequence", x00540053: "NumberOfFramesInRotation", x00540060: "RRIntervalVector", x00540061: "NumberOfRRIntervals", x00540062: "GatedInformationSequence", x00540063: "DataInformationSequence", x00540070: "TimeSlotVector", x00540071: "NumberOfTimeSlots", x00540072: "TimeSlotInformationSequence", x00540073: "TimeSlotTime", x00540080: "SliceVector", x00540081: "NumberOfSlices", x00540090: "AngularViewVector", x00540100: "TimeSliceVector", x00540101: "NumberOfTimeSlices", x00540200: "StartAngle", x00540202: "TypeOfDetectorMotion", x00540210: "TriggerVector", x00540211: "NumberOfTriggersInPhase", x00540220: "ViewCodeSequence", x00540222: "ViewModifierCodeSequence", x00540300: "RadionuclideCodeSequence", x00540302: "AdministrationRouteCodeSequence", x00540304: "RadiopharmaceuticalCodeSequence", x00540306: "CalibrationDataSequence", x00540308: "EnergyWindowNumber", x00540400: "ImageID", x00540410: "PatientOrientationCodeSequence", x00540412: "PatientOrientationModifierCodeSeq", x00540414: "PatientGantryRelationshipCodeSeq", x00540500: "SliceProgressionDirection", x00541000: "SeriesType", x00541001: "Units", x00541002: "CountsSource", x00541004: "ReprojectionMethod", x00541100: "RandomsCorrectionMethod", x00541101: "AttenuationCorrectionMethod", x00541102: "DecayCorrection", x00541103: "ReconstructionMethod", x00541104: "DetectorLinesOfResponseUsed", x00541105: "ScatterCorrectionMethod", x00541200: "AxialAcceptance", x00541201: "AxialMash", x00541202: "TransverseMash", x00541203: "DetectorElementSize", x00541210: "CoincidenceWindowWidth", x00541220: "SecondaryCountsType", x00541300: "FrameReferenceTime", x00541310: "PrimaryCountsAccumulated", x00541311: "SecondaryCountsAccumulated", x00541320: "SliceSensitivityFactor", x00541321: "DecayFactor", x00541322: "DoseCalibrationFactor", x00541323: "ScatterFractionFactor", x00541324: "DeadTimeFactor", x00541330: "ImageIndex", x00541400: "CountsIncluded", x00541401: "DeadTimeCorrectionFlag", x00603000: "HistogramSequence", x00603002: "HistogramNumberOfBins", x00603004: "HistogramFirstBinValue", x00603006: "HistogramLastBinValue", x00603008: "HistogramBinWidth", x00603010: "HistogramExplanation", x00603020: "HistogramData", x00620001: "SegmentationType", x00620002: "SegmentSequence", x00620003: "SegmentedPropertyCategoryCodeSeq", x00620004: "SegmentNumber", x00620005: "SegmentLabel", x00620006: "SegmentDescription", x00620008: "SegmentAlgorithmType", x00620009: "SegmentAlgorithmName", x0062000a: "SegmentIdentificationSequence", x0062000b: "ReferencedSegmentNumber", x0062000c: "RecommendedDisplayGrayscaleValue", x0062000d: "RecommendedDisplayCIELabValue", x0062000e: "MaximumFractionalValue", x0062000f: "SegmentedPropertyTypeCodeSequence", x00620010: "SegmentationFractionalType", x00640002: "DeformableRegistrationSequence", x00640003: "SourceFrameOfReferenceUID", x00640005: "DeformableRegistrationGridSequence", x00640007: "GridDimensions", x00640008: "GridResolution", x00640009: "VectorGridData", x0064000f: "PreDeformationMatrixRegistSeq", x00640010: "PostDeformationMatrixRegistSeq", x00660001: "NumberOfSurfaces", x00660002: "SurfaceSequence", x00660003: "SurfaceNumber", x00660004: "SurfaceComments", x00660009: "SurfaceProcessing", x0066000a: "SurfaceProcessingRatio", x0066000e: "FiniteVolume", x00660010: "Manifold", x00660011: "SurfacePointsSequence", x00660015: "NumberOfSurfacePoints", x00660016: "PointCoordinatesData", x00660017: "PointPositionAccuracy", x00660018: "MeanPointDistance", x00660019: "MaximumPointDistance", x0066001b: "AxisOfRotation", x0066001c: "CenterOfRotation", x0066001e: "NumberOfVectors", x0066001f: "VectorDimensionality", x00660020: "VectorAccuracy", x00660021: "VectorCoordinateData", x00660023: "TrianglePointIndexList", x00660024: "EdgePointIndexList", x00660025: "VertexPointIndexList", x00660026: "TriangleStripSequence", x00660027: "TriangleFanSequence", x00660028: "LineSequence", x00660029: "PrimitivePointIndexList", x0066002a: "SurfaceCount", x0066002f: "AlgorithmFamilyCodeSequ", x00660031: "AlgorithmVersion", x00660032: "AlgorithmParameters", x00660034: "FacetSequence", x00660036: "AlgorithmName", x00700001: "GraphicAnnotationSequence", x00700002: "GraphicLayer", x00700003: "BoundingBoxAnnotationUnits", x00700004: "AnchorPointAnnotationUnits", x00700005: "GraphicAnnotationUnits", x00700006: "UnformattedTextValue", x00700008: "TextObjectSequence", x00700009: "GraphicObjectSequence", x00700010: "BoundingBoxTopLeftHandCorner", x00700011: "BoundingBoxBottomRightHandCorner", x00700012: "BoundingBoxTextHorizJustification", x00700014: "AnchorPoint", x00700015: "AnchorPointVisibility", x00700020: "GraphicDimensions", x00700021: "NumberOfGraphicPoints", x00700022: "GraphicData", x00700023: "GraphicType", x00700024: "GraphicFilled", x00700040: "ImageRotationRetired", x00700041: "ImageHorizontalFlip", x00700042: "ImageRotation", x00700050: "DisplayedAreaTopLeftTrial", x00700051: "DisplayedAreaBottomRightTrial", x00700052: "DisplayedAreaTopLeft", x00700053: "DisplayedAreaBottomRight", x0070005a: "DisplayedAreaSelectionSequence", x00700060: "GraphicLayerSequence", x00700062: "GraphicLayerOrder", x00700066: "GraphicLayerRecDisplayGraysclValue", x00700067: "GraphicLayerRecDisplayRGBValue", x00700068: "GraphicLayerDescription", x00700080: "ContentLabel", x00700081: "ContentDescription", x00700082: "PresentationCreationDate", x00700083: "PresentationCreationTime", x00700084: "ContentCreatorName", x00700086: "ContentCreatorIDCodeSequence", x00700100: "PresentationSizeMode", x00700101: "PresentationPixelSpacing", x00700102: "PresentationPixelAspectRatio", x00700103: "PresentationPixelMagRatio", x00700306: "ShapeType", x00700308: "RegistrationSequence", x00700309: "MatrixRegistrationSequence", x0070030a: "MatrixSequence", x0070030c: "FrameOfRefTransformationMatrixType", x0070030d: "RegistrationTypeCodeSequence", x0070030f: "FiducialDescription", x00700310: "FiducialIdentifier", x00700311: "FiducialIdentifierCodeSequence", x00700312: "ContourUncertaintyRadius", x00700314: "UsedFiducialsSequence", x00700318: "GraphicCoordinatesDataSequence", x0070031a: "FiducialUID", x0070031c: "FiducialSetSequence", x0070031e: "FiducialSequence", x00700401: "GraphicLayerRecomDisplayCIELabVal", x00700402: "BlendingSequence", x00700403: "RelativeOpacity", x00700404: "ReferencedSpatialRegistrationSeq", x00700405: "BlendingPosition", x00720002: "HangingProtocolName", x00720004: "HangingProtocolDescription", x00720006: "HangingProtocolLevel", x00720008: "HangingProtocolCreator", x0072000a: "HangingProtocolCreationDateTime", x0072000c: "HangingProtocolDefinitionSequence", x0072000e: "HangingProtocolUserIDCodeSequence", x00720010: "HangingProtocolUserGroupName", x00720012: "SourceHangingProtocolSequence", x00720014: "NumberOfPriorsReferenced", x00720020: "ImageSetsSequence", x00720022: "ImageSetSelectorSequence", x00720024: "ImageSetSelectorUsageFlag", x00720026: "SelectorAttribute", x00720028: "SelectorValueNumber", x00720030: "TimeBasedImageSetsSequence", x00720032: "ImageSetNumber", x00720034: "ImageSetSelectorCategory", x00720038: "RelativeTime", x0072003a: "RelativeTimeUnits", x0072003c: "AbstractPriorValue", x0072003e: "AbstractPriorCodeSequence", x00720040: "ImageSetLabel", x00720050: "SelectorAttributeVR", x00720052: "SelectorSequencePointer", x00720054: "SelectorSeqPointerPrivateCreator", x00720056: "SelectorAttributePrivateCreator", x00720060: "SelectorATValue", x00720062: "SelectorCSValue", x00720064: "SelectorISValue", x00720066: "SelectorLOValue", x00720068: "SelectorLTValue", x0072006a: "SelectorPNValue", x0072006c: "SelectorSHValue", x0072006e: "SelectorSTValue", x00720070: "SelectorUTValue", x00720072: "SelectorDSValue", x00720074: "SelectorFDValue", x00720076: "SelectorFLValue", x00720078: "SelectorULValue", x0072007a: "SelectorUSValue", x0072007c: "SelectorSLValue", x0072007e: "SelectorSSValue", x00720080: "SelectorCodeSequenceValue", x00720100: "NumberOfScreens", x00720102: "NominalScreenDefinitionSequence", x00720104: "NumberOfVerticalPixels", x00720106: "NumberOfHorizontalPixels", x00720108: "DisplayEnvironmentSpatialPosition", x0072010a: "ScreenMinimumGrayscaleBitDepth", x0072010c: "ScreenMinimumColorBitDepth", x0072010e: "ApplicationMaximumRepaintTime", x00720200: "DisplaySetsSequence", x00720202: "DisplaySetNumber", x00720203: "DisplaySetLabel", x00720204: "DisplaySetPresentationGroup", x00720206: "DisplaySetPresentationGroupDescr", x00720208: "PartialDataDisplayHandling", x00720210: "SynchronizedScrollingSequence", x00720212: "DisplaySetScrollingGroup", x00720214: "NavigationIndicatorSequence", x00720216: "NavigationDisplaySet", x00720218: "ReferenceDisplaySets", x00720300: "ImageBoxesSequence", x00720302: "ImageBoxNumber", x00720304: "ImageBoxLayoutType", x00720306: "ImageBoxTileHorizontalDimension", x00720308: "ImageBoxTileVerticalDimension", x00720310: "ImageBoxScrollDirection", x00720312: "ImageBoxSmallScrollType", x00720314: "ImageBoxSmallScrollAmount", x00720316: "ImageBoxLargeScrollType", x00720318: "ImageBoxLargeScrollAmount", x00720320: "ImageBoxOverlapPriority", x00720330: "CineRelativeToRealTime", x00720400: "FilterOperationsSequence", x00720402: "FilterByCategory", x00720404: "FilterByAttributePresence", x00720406: "FilterByOperator", x00720432: "SynchronizedImageBoxList", x00720434: "TypeOfSynchronization", x00720500: "BlendingOperationType", x00720510: "ReformattingOperationType", x00720512: "ReformattingThickness", x00720514: "ReformattingInterval", x00720516: "ReformattingOpInitialViewDir", x00720520: "RenderingType3D", x00720600: "SortingOperationsSequence", x00720602: "SortByCategory", x00720604: "SortingDirection", x00720700: "DisplaySetPatientOrientation", x00720702: "VOIType", x00720704: "PseudoColorType", x00720706: "ShowGrayscaleInverted", x00720710: "ShowImageTrueSizeFlag", x00720712: "ShowGraphicAnnotationFlag", x00720714: "ShowPatientDemographicsFlag", x00720716: "ShowAcquisitionTechniquesFlag", x00720717: "DisplaySetHorizontalJustification", x00720718: "DisplaySetVerticalJustification", x00741000: "UnifiedProcedureStepState", x00741002: "UPSProgressInformationSequence", x00741004: "UnifiedProcedureStepProgress", x00741006: "UnifiedProcedureStepProgressDescr", x00741008: "UnifiedProcedureStepComURISeq", x0074100a: "ContactURI", x0074100c: "ContactDisplayName", x00741020: "BeamTaskSequence", x00741022: "BeamTaskType", x00741024: "BeamOrderIndex", x00741030: "DeliveryVerificationImageSequence", x00741032: "VerificationImageTiming", x00741034: "DoubleExposureFlag", x00741036: "DoubleExposureOrdering", x00741038: "DoubleExposureMeterset", x0074103a: "DoubleExposureFieldDelta", x00741040: "RelatedReferenceRTImageSequence", x00741042: "GeneralMachineVerificationSequence", x00741044: "ConventionalMachineVerificationSeq", x00741046: "IonMachineVerificationSequence", x00741048: "FailedAttributesSequence", x0074104a: "OverriddenAttributesSequence", x0074104c: "ConventionalControlPointVerifySeq", x0074104e: "IonControlPointVerificationSeq", x00741050: "AttributeOccurrenceSequence", x00741052: "AttributeOccurrencePointer", x00741054: "AttributeItemSelector", x00741056: "AttributeOccurrencePrivateCreator", x00741200: "ScheduledProcedureStepPriority", x00741202: "StudyListLabel", x00741204: "ProcedureStepLabel", x00741210: "ScheduledProcessingParametersSeq", x00741212: "PerformedProcessingParametersSeq", x00741216: "UPSPerformedProcedureSequence", x00741220: "RelatedProcedureStepSequence", x00741222: "ProcedureStepRelationshipType", x00741230: "DeletionLock", x00741234: "ReceivingAE", x00741236: "RequestingAE", x00741238: "ReasonForCancellation", x00741242: "SCPStatus", x00741244: "SubscriptionListStatus", x00741246: "UPSListStatus", x00880130: "StorageMediaFileSetID", x00880140: "StorageMediaFileSetUID", x00880200: "IconImageSequence", x00880904: "TopicTitle", x00880906: "TopicSubject", x00880910: "TopicAuthor", x00880912: "TopicKeywords", x01000410: "SOPInstanceStatus", x01000420: "SOPAuthorizationDateAndTime", x01000424: "SOPAuthorizationComment", x01000426: "AuthorizationEquipmentCertNumber", x04000005: "MACIDNumber", x04000010: "MACCalculationTransferSyntaxUID", x04000015: "MACAlgorithm", x04000020: "DataElementsSigned", x04000100: "DigitalSignatureUID", x04000105: "DigitalSignatureDateTime", x04000110: "CertificateType", x04000115: "CertificateOfSigner", x04000120: "Signature", x04000305: "CertifiedTimestampType", x04000310: "CertifiedTimestamp", x04000401: "DigitalSignaturePurposeCodeSeq", x04000402: "ReferencedDigitalSignatureSeq", x04000403: "ReferencedSOPInstanceMACSeq", x04000404: "MAC", x04000500: "EncryptedAttributesSequence", x04000510: "EncryptedContentTransferSyntaxUID", x04000520: "EncryptedContent", x04000550: "ModifiedAttributesSequence", x04000561: "OriginalAttributesSequence", x04000562: "AttributeModificationDateTime", x04000563: "ModifyingSystem", x04000564: "SourceOfPreviousValues", x04000565: "ReasonForTheAttributeModification", x1000xxx0: "EscapeTriplet", x1000xxx1: "RunLengthTriplet", x1000xxx2: "HuffmanTableSize", x1000xxx3: "HuffmanTableTriplet", x1000xxx4: "ShiftTableSize", x1000xxx5: "ShiftTableTriplet", x1010xxxx: "ZonalMap", x20000010: "NumberOfCopies", x2000001e: "PrinterConfigurationSequence", x20000020: "PrintPriority", x20000030: "MediumType", x20000040: "FilmDestination", x20000050: "FilmSessionLabel", x20000060: "MemoryAllocation", x20000061: "MaximumMemoryAllocation", x20000062: "ColorImagePrintingFlag", x20000063: "CollationFlag", x20000065: "AnnotationFlag", x20000067: "ImageOverlayFlag", x20000069: "PresentationLUTFlag", x2000006a: "ImageBoxPresentationLUTFlag", x200000a0: "MemoryBitDepth", x200000a1: "PrintingBitDepth", x200000a2: "MediaInstalledSequence", x200000a4: "OtherMediaAvailableSequence", x200000a8: "SupportedImageDisplayFormatSeq", x20000500: "ReferencedFilmBoxSequence", x20000510: "ReferencedStoredPrintSequence", x20100010: "ImageDisplayFormat", x20100030: "AnnotationDisplayFormatID", x20100040: "FilmOrientation", x20100050: "FilmSizeID", x20100052: "PrinterResolutionID", x20100054: "DefaultPrinterResolutionID", x20100060: "MagnificationType", x20100080: "SmoothingType", x201000a6: "DefaultMagnificationType", x201000a7: "OtherMagnificationTypesAvailable", x201000a8: "DefaultSmoothingType", x201000a9: "OtherSmoothingTypesAvailable", x20100100: "BorderDensity", x20100110: "EmptyImageDensity", x20100120: "MinDensity", x20100130: "MaxDensity", x20100140: "Trim", x20100150: "ConfigurationInformation", x20100152: "ConfigurationInformationDescr", x20100154: "MaximumCollatedFilms", x2010015e: "Illumination", x20100160: "ReflectedAmbientLight", x20100376: "PrinterPixelSpacing", x20100500: "ReferencedFilmSessionSequence", x20100510: "ReferencedImageBoxSequence", x20100520: "ReferencedBasicAnnotationBoxSeq", x20200010: "ImageBoxPosition", x20200020: "Polarity", x20200030: "RequestedImageSize", x20200040: "RequestedDecimate-CropBehavior", x20200050: "RequestedResolutionID", x202000a0: "RequestedImageSizeFlag", x202000a2: "DecimateCropResult", x20200110: "BasicGrayscaleImageSequence", x20200111: "BasicColorImageSequence", x20200130: "ReferencedImageOverlayBoxSequence", x20200140: "ReferencedVOILUTBoxSequence", x20300010: "AnnotationPosition", x20300020: "TextString", x20400010: "ReferencedOverlayPlaneSequence", x20400011: "ReferencedOverlayPlaneGroups", x20400020: "OverlayPixelDataSequence", x20400060: "OverlayMagnificationType", x20400070: "OverlaySmoothingType", x20400072: "OverlayOrImageMagnification", x20400074: "MagnifyToNumberOfColumns", x20400080: "OverlayForegroundDensity", x20400082: "OverlayBackgroundDensity", x20400090: "OverlayMode", x20400100: "ThresholdDensity", x20400500: "ReferencedImageBoxSequenceRetired", x20500010: "PresentationLUTSequence", x20500020: "PresentationLUTShape", x20500500: "ReferencedPresentationLUTSequence", x21000010: "PrintJobID", x21000020: "ExecutionStatus", x21000030: "ExecutionStatusInfo", x21000040: "CreationDate", x21000050: "CreationTime", x21000070: "Originator", x21000140: "DestinationAE", x21000160: "OwnerID", x21000170: "NumberOfFilms", x21000500: "ReferencedPrintJobSequencePullStoredPrint", x21100010: "PrinterStatus", x21100020: "PrinterStatusInfo", x21100030: "PrinterName", x21100099: "PrintQueueID", x21200010: "QueueStatus", x21200050: "PrintJobDescriptionSequence", x21200070: "ReferencedPrintJobSequence", x21300010: "PrintManagementCapabilitiesSeq", x21300015: "PrinterCharacteristicsSequence", x21300030: "FilmBoxContentSequence", x21300040: "ImageBoxContentSequence", x21300050: "AnnotationContentSequence", x21300060: "ImageOverlayBoxContentSequence", x21300080: "PresentationLUTContentSequence", x213000a0: "ProposedStudySequence", x213000c0: "OriginalImageSequence", x22000001: "LabelFromInfoExtractedFromInstance", x22000002: "LabelText", x22000003: "LabelStyleSelection", x22000004: "MediaDisposition", x22000005: "BarcodeValue", x22000006: "BarcodeSymbology", x22000007: "AllowMediaSplitting", x22000008: "IncludeNonDICOMObjects", x22000009: "IncludeDisplayApplication", x2200000a: "SaveCompInstancesAfterMediaCreate", x2200000b: "TotalNumberMediaPiecesCreated", x2200000c: "RequestedMediaApplicationProfile", x2200000d: "ReferencedStorageMediaSequence", x2200000e: "FailureAttributes", x2200000f: "AllowLossyCompression", x22000020: "RequestPriority", x30020002: "RTImageLabel", x30020003: "RTImageName", x30020004: "RTImageDescription", x3002000a: "ReportedValuesOrigin", x3002000c: "RTImagePlane", x3002000d: "XRayImageReceptorTranslation", x3002000e: "XRayImageReceptorAngle", x30020010: "RTImageOrientation", x30020011: "ImagePlanePixelSpacing", x30020012: "RTImagePosition", x30020020: "RadiationMachineName", x30020022: "RadiationMachineSAD", x30020024: "RadiationMachineSSD", x30020026: "RTImageSID", x30020028: "SourceToReferenceObjectDistance", x30020029: "FractionNumber", x30020030: "ExposureSequence", x30020032: "MetersetExposure", x30020034: "DiaphragmPosition", x30020040: "FluenceMapSequence", x30020041: "FluenceDataSource", x30020042: "FluenceDataScale", x30020051: "FluenceMode", x30020052: "FluenceModeID", x30040001: "DVHType", x30040002: "DoseUnits", x30040004: "DoseType", x30040006: "DoseComment", x30040008: "NormalizationPoint", x3004000a: "DoseSummationType", x3004000c: "GridFrameOffsetVector", x3004000e: "DoseGridScaling", x30040010: "RTDoseROISequence", x30040012: "DoseValue", x30040014: "TissueHeterogeneityCorrection", x30040040: "DVHNormalizationPoint", x30040042: "DVHNormalizationDoseValue", x30040050: "DVHSequence", x30040052: "DVHDoseScaling", x30040054: "DVHVolumeUnits", x30040056: "DVHNumberOfBins", x30040058: "DVHData", x30040060: "DVHReferencedROISequence", x30040062: "DVHROIContributionType", x30040070: "DVHMinimumDose", x30040072: "DVHMaximumDose", x30040074: "DVHMeanDose", x30060002: "StructureSetLabel", x30060004: "StructureSetName", x30060006: "StructureSetDescription", x30060008: "StructureSetDate", x30060009: "StructureSetTime", x30060010: "ReferencedFrameOfReferenceSequence", x30060012: "RTReferencedStudySequence", x30060014: "RTReferencedSeriesSequence", x30060016: "ContourImageSequence", x30060020: "StructureSetROISequence", x30060022: "ROINumber", x30060024: "ReferencedFrameOfReferenceUID", x30060026: "ROIName", x30060028: "ROIDescription", x3006002a: "ROIDisplayColor", x3006002c: "ROIVolume", x30060030: "RTRelatedROISequence", x30060033: "RTROIRelationship", x30060036: "ROIGenerationAlgorithm", x30060038: "ROIGenerationDescription", x30060039: "ROIContourSequence", x30060040: "ContourSequence", x30060042: "ContourGeometricType", x30060044: "ContourSlabThickness", x30060045: "ContourOffsetVector", x30060046: "NumberOfContourPoints", x30060048: "ContourNumber", x30060049: "AttachedContours", x30060050: "ContourData", x30060080: "RTROIObservationsSequence", x30060082: "ObservationNumber", x30060084: "ReferencedROINumber", x30060085: "ROIObservationLabel", x30060086: "RTROIIdentificationCodeSequence", x30060088: "ROIObservationDescription", x300600a0: "RelatedRTROIObservationsSequence", x300600a4: "RTROIInterpretedType", x300600a6: "ROIInterpreter", x300600b0: "ROIPhysicalPropertiesSequence", x300600b2: "ROIPhysicalProperty", x300600b4: "ROIPhysicalPropertyValue", x300600b6: "ROIElementalCompositionSequence", x300600b7: "ROIElementalCompAtomicNumber", x300600b8: "ROIElementalCompAtomicMassFraction", x300600c0: "FrameOfReferenceRelationshipSeq", x300600c2: "RelatedFrameOfReferenceUID", x300600c4: "FrameOfReferenceTransformType", x300600c6: "FrameOfReferenceTransformMatrix", x300600c8: "FrameOfReferenceTransformComment", x30080010: "MeasuredDoseReferenceSequence", x30080012: "MeasuredDoseDescription", x30080014: "MeasuredDoseType", x30080016: "MeasuredDoseValue", x30080020: "TreatmentSessionBeamSequence", x30080021: "TreatmentSessionIonBeamSequence", x30080022: "CurrentFractionNumber", x30080024: "TreatmentControlPointDate", x30080025: "TreatmentControlPointTime", x3008002a: "TreatmentTerminationStatus", x3008002b: "TreatmentTerminationCode", x3008002c: "TreatmentVerificationStatus", x30080030: "ReferencedTreatmentRecordSequence", x30080032: "SpecifiedPrimaryMeterset", x30080033: "SpecifiedSecondaryMeterset", x30080036: "DeliveredPrimaryMeterset", x30080037: "DeliveredSecondaryMeterset", x3008003a: "SpecifiedTreatmentTime", x3008003b: "DeliveredTreatmentTime", x30080040: "ControlPointDeliverySequence", x30080041: "IonControlPointDeliverySequence", x30080042: "SpecifiedMeterset", x30080044: "DeliveredMeterset", x30080045: "MetersetRateSet", x30080046: "MetersetRateDelivered", x30080047: "ScanSpotMetersetsDelivered", x30080048: "DoseRateDelivered", x30080050: "TreatmentSummaryCalcDoseRefSeq", x30080052: "CumulativeDoseToDoseReference", x30080054: "FirstTreatmentDate", x30080056: "MostRecentTreatmentDate", x3008005a: "NumberOfFractionsDelivered", x30080060: "OverrideSequence", x30080061: "ParameterSequencePointer", x30080062: "OverrideParameterPointer", x30080063: "ParameterItemIndex", x30080064: "MeasuredDoseReferenceNumber", x30080065: "ParameterPointer", x30080066: "OverrideReason", x30080068: "CorrectedParameterSequence", x3008006a: "CorrectionValue", x30080070: "CalculatedDoseReferenceSequence", x30080072: "CalculatedDoseReferenceNumber", x30080074: "CalculatedDoseReferenceDescription", x30080076: "CalculatedDoseReferenceDoseValue", x30080078: "StartMeterset", x3008007a: "EndMeterset", x30080080: "ReferencedMeasuredDoseReferenceSeq", x30080082: "ReferencedMeasuredDoseReferenceNum", x30080090: "ReferencedCalculatedDoseRefSeq", x30080092: "ReferencedCalculatedDoseRefNumber", x300800a0: "BeamLimitingDeviceLeafPairsSeq", x300800b0: "RecordedWedgeSequence", x300800c0: "RecordedCompensatorSequence", x300800d0: "RecordedBlockSequence", x300800e0: "TreatmentSummaryMeasuredDoseRefSeq", x300800f0: "RecordedSnoutSequence", x300800f2: "RecordedRangeShifterSequence", x300800f4: "RecordedLateralSpreadingDeviceSeq", x300800f6: "RecordedRangeModulatorSequence", x30080100: "RecordedSourceSequence", x30080105: "SourceSerialNumber", x30080110: "TreatmentSessionAppSetupSeq", x30080116: "ApplicationSetupCheck", x30080120: "RecordedBrachyAccessoryDeviceSeq", x30080122: "ReferencedBrachyAccessoryDeviceNum", x30080130: "RecordedChannelSequence", x30080132: "SpecifiedChannelTotalTime", x30080134: "DeliveredChannelTotalTime", x30080136: "SpecifiedNumberOfPulses", x30080138: "DeliveredNumberOfPulses", x3008013a: "SpecifiedPulseRepetitionInterval", x3008013c: "DeliveredPulseRepetitionInterval", x30080140: "RecordedSourceApplicatorSequence", x30080142: "ReferencedSourceApplicatorNumber", x30080150: "RecordedChannelShieldSequence", x30080152: "ReferencedChannelShieldNumber", x30080160: "BrachyControlPointDeliveredSeq", x30080162: "SafePositionExitDate", x30080164: "SafePositionExitTime", x30080166: "SafePositionReturnDate", x30080168: "SafePositionReturnTime", x30080200: "CurrentTreatmentStatus", x30080202: "TreatmentStatusComment", x30080220: "FractionGroupSummarySequence", x30080223: "ReferencedFractionNumber", x30080224: "FractionGroupType", x30080230: "BeamStopperPosition", x30080240: "FractionStatusSummarySequence", x30080250: "TreatmentDate", x30080251: "TreatmentTime", x300a0002: "RTPlanLabel", x300a0003: "RTPlanName", x300a0004: "RTPlanDescription", x300a0006: "RTPlanDate", x300a0007: "RTPlanTime", x300a0009: "TreatmentProtocols", x300a000a: "PlanIntent", x300a000b: "TreatmentSites", x300a000c: "RTPlanGeometry", x300a000e: "PrescriptionDescription", x300a0010: "DoseReferenceSequence", x300a0012: "DoseReferenceNumber", x300a0013: "DoseReferenceUID", x300a0014: "DoseReferenceStructureType", x300a0015: "NominalBeamEnergyUnit", x300a0016: "DoseReferenceDescription", x300a0018: "DoseReferencePointCoordinates", x300a001a: "NominalPriorDose", x300a0020: "DoseReferenceType", x300a0021: "ConstraintWeight", x300a0022: "DeliveryWarningDose", x300a0023: "DeliveryMaximumDose", x300a0025: "TargetMinimumDose", x300a0026: "TargetPrescriptionDose", x300a0027: "TargetMaximumDose", x300a0028: "TargetUnderdoseVolumeFraction", x300a002a: "OrganAtRiskFullVolumeDose", x300a002b: "OrganAtRiskLimitDose", x300a002c: "OrganAtRiskMaximumDose", x300a002d: "OrganAtRiskOverdoseVolumeFraction", x300a0040: "ToleranceTableSequence", x300a0042: "ToleranceTableNumber", x300a0043: "ToleranceTableLabel", x300a0044: "GantryAngleTolerance", x300a0046: "BeamLimitingDeviceAngleTolerance", x300a0048: "BeamLimitingDeviceToleranceSeq", x300a004a: "BeamLimitingDevicePositionTol", x300a004b: "SnoutPositionTolerance", x300a004c: "PatientSupportAngleTolerance", x300a004e: "TableTopEccentricAngleTolerance", x300a004f: "TableTopPitchAngleTolerance", x300a0050: "TableTopRollAngleTolerance", x300a0051: "TableTopVerticalPositionTolerance", x300a0052: "TableTopLongitudinalPositionTol", x300a0053: "TableTopLateralPositionTolerance", x300a0055: "RTPlanRelationship", x300a0070: "FractionGroupSequence", x300a0071: "FractionGroupNumber", x300a0072: "FractionGroupDescription", x300a0078: "NumberOfFractionsPlanned", x300a0079: "NumberFractionPatternDigitsPerDay", x300a007a: "RepeatFractionCycleLength", x300a007b: "FractionPattern", x300a0080: "NumberOfBeams", x300a0082: "BeamDoseSpecificationPoint", x300a0084: "BeamDose", x300a0086: "BeamMeterset", x300a0088: "BeamDosePointDepth", x300a0089: "BeamDosePointEquivalentDepth", x300a008a: "BeamDosePointSSD", x300a00a0: "NumberOfBrachyApplicationSetups", x300a00a2: "BrachyAppSetupDoseSpecPoint", x300a00a4: "BrachyApplicationSetupDose", x300a00b0: "BeamSequence", x300a00b2: "TreatmentMachineName", x300a00b3: "PrimaryDosimeterUnit", x300a00b4: "SourceAxisDistance", x300a00b6: "BeamLimitingDeviceSequence", x300a00b8: "RTBeamLimitingDeviceType", x300a00ba: "SourceToBeamLimitingDeviceDistance", x300a00bb: "IsocenterToBeamLimitingDeviceDist", x300a00bc: "NumberOfLeafJawPairs", x300a00be: "LeafPositionBoundaries", x300a00c0: "BeamNumber", x300a00c2: "BeamName", x300a00c3: "BeamDescription", x300a00c4: "BeamType", x300a00c6: "RadiationType", x300a00c7: "HighDoseTechniqueType", x300a00c8: "ReferenceImageNumber", x300a00ca: "PlannedVerificationImageSequence", x300a00cc: "ImagingDeviceSpecificAcqParams", x300a00ce: "TreatmentDeliveryType", x300a00d0: "NumberOfWedges", x300a00d1: "WedgeSequence", x300a00d2: "WedgeNumber", x300a00d3: "WedgeType", x300a00d4: "WedgeID", x300a00d5: "WedgeAngle", x300a00d6: "WedgeFactor", x300a00d7: "TotalWedgeTrayWaterEquivThickness", x300a00d8: "WedgeOrientation", x300a00d9: "IsocenterToWedgeTrayDistance", x300a00da: "SourceToWedgeTrayDistance", x300a00db: "WedgeThinEdgePosition", x300a00dc: "BolusID", x300a00dd: "BolusDescription", x300a00e0: "NumberOfCompensators", x300a00e1: "MaterialID", x300a00e2: "TotalCompensatorTrayFactor", x300a00e3: "CompensatorSequence", x300a00e4: "CompensatorNumber", x300a00e5: "CompensatorID", x300a00e6: "SourceToCompensatorTrayDistance", x300a00e7: "CompensatorRows", x300a00e8: "CompensatorColumns", x300a00e9: "CompensatorPixelSpacing", x300a00ea: "CompensatorPosition", x300a00eb: "CompensatorTransmissionData", x300a00ec: "CompensatorThicknessData", x300a00ed: "NumberOfBoli", x300a00ee: "CompensatorType", x300a00f0: "NumberOfBlocks", x300a00f2: "TotalBlockTrayFactor", x300a00f3: "TotalBlockTrayWaterEquivThickness", x300a00f4: "BlockSequence", x300a00f5: "BlockTrayID", x300a00f6: "SourceToBlockTrayDistance", x300a00f7: "IsocenterToBlockTrayDistance", x300a00f8: "BlockType", x300a00f9: "AccessoryCode", x300a00fa: "BlockDivergence", x300a00fb: "BlockMountingPosition", x300a00fc: "BlockNumber", x300a00fe: "BlockName", x300a0100: "BlockThickness", x300a0102: "BlockTransmission", x300a0104: "BlockNumberOfPoints", x300a0106: "BlockData", x300a0107: "ApplicatorSequence", x300a0108: "ApplicatorID", x300a0109: "ApplicatorType", x300a010a: "ApplicatorDescription", x300a010c: "CumulativeDoseReferenceCoefficient", x300a010e: "FinalCumulativeMetersetWeight", x300a0110: "NumberOfControlPoints", x300a0111: "ControlPointSequence", x300a0112: "ControlPointIndex", x300a0114: "NominalBeamEnergy", x300a0115: "DoseRateSet", x300a0116: "WedgePositionSequence", x300a0118: "WedgePosition", x300a011a: "BeamLimitingDevicePositionSequence", x300a011c: "LeafJawPositions", x300a011e: "GantryAngle", x300a011f: "GantryRotationDirection", x300a0120: "BeamLimitingDeviceAngle", x300a0121: "BeamLimitingDeviceRotateDirection", x300a0122: "PatientSupportAngle", x300a0123: "PatientSupportRotationDirection", x300a0124: "TableTopEccentricAxisDistance", x300a0125: "TableTopEccentricAngle", x300a0126: "TableTopEccentricRotateDirection", x300a0128: "TableTopVerticalPosition", x300a0129: "TableTopLongitudinalPosition", x300a012a: "TableTopLateralPosition", x300a012c: "IsocenterPosition", x300a012e: "SurfaceEntryPoint", x300a0130: "SourceToSurfaceDistance", x300a0134: "CumulativeMetersetWeight", x300a0140: "TableTopPitchAngle", x300a0142: "TableTopPitchRotationDirection", x300a0144: "TableTopRollAngle", x300a0146: "TableTopRollRotationDirection", x300a0148: "HeadFixationAngle", x300a014a: "GantryPitchAngle", x300a014c: "GantryPitchRotationDirection", x300a014e: "GantryPitchAngleTolerance", x300a0180: "PatientSetupSequence", x300a0182: "PatientSetupNumber", x300a0183: "PatientSetupLabel", x300a0184: "PatientAdditionalPosition", x300a0190: "FixationDeviceSequence", x300a0192: "FixationDeviceType", x300a0194: "FixationDeviceLabel", x300a0196: "FixationDeviceDescription", x300a0198: "FixationDevicePosition", x300a0199: "FixationDevicePitchAngle", x300a019a: "FixationDeviceRollAngle", x300a01a0: "ShieldingDeviceSequence", x300a01a2: "ShieldingDeviceType", x300a01a4: "ShieldingDeviceLabel", x300a01a6: "ShieldingDeviceDescription", x300a01a8: "ShieldingDevicePosition", x300a01b0: "SetupTechnique", x300a01b2: "SetupTechniqueDescription", x300a01b4: "SetupDeviceSequence", x300a01b6: "SetupDeviceType", x300a01b8: "SetupDeviceLabel", x300a01ba: "SetupDeviceDescription", x300a01bc: "SetupDeviceParameter", x300a01d0: "SetupReferenceDescription", x300a01d2: "TableTopVerticalSetupDisplacement", x300a01d4: "TableTopLongitudinalSetupDisplace", x300a01d6: "TableTopLateralSetupDisplacement", x300a0200: "BrachyTreatmentTechnique", x300a0202: "BrachyTreatmentType", x300a0206: "TreatmentMachineSequence", x300a0210: "SourceSequence", x300a0212: "SourceNumber", x300a0214: "SourceType", x300a0216: "SourceManufacturer", x300a0218: "ActiveSourceDiameter", x300a021a: "ActiveSourceLength", x300a0222: "SourceEncapsulationNomThickness", x300a0224: "SourceEncapsulationNomTransmission", x300a0226: "SourceIsotopeName", x300a0228: "SourceIsotopeHalfLife", x300a0229: "SourceStrengthUnits", x300a022a: "ReferenceAirKermaRate", x300a022b: "SourceStrength", x300a022c: "SourceStrengthReferenceDate", x300a022e: "SourceStrengthReferenceTime", x300a0230: "ApplicationSetupSequence", x300a0232: "ApplicationSetupType", x300a0234: "ApplicationSetupNumber", x300a0236: "ApplicationSetupName", x300a0238: "ApplicationSetupManufacturer", x300a0240: "TemplateNumber", x300a0242: "TemplateType", x300a0244: "TemplateName", x300a0250: "TotalReferenceAirKerma", x300a0260: "BrachyAccessoryDeviceSequence", x300a0262: "BrachyAccessoryDeviceNumber", x300a0263: "BrachyAccessoryDeviceID", x300a0264: "BrachyAccessoryDeviceType", x300a0266: "BrachyAccessoryDeviceName", x300a026a: "BrachyAccessoryDeviceNomThickness", x300a026c: "BrachyAccessoryDevNomTransmission", x300a0280: "ChannelSequence", x300a0282: "ChannelNumber", x300a0284: "ChannelLength", x300a0286: "ChannelTotalTime", x300a0288: "SourceMovementType", x300a028a: "NumberOfPulses", x300a028c: "PulseRepetitionInterval", x300a0290: "SourceApplicatorNumber", x300a0291: "SourceApplicatorID", x300a0292: "SourceApplicatorType", x300a0294: "SourceApplicatorName", x300a0296: "SourceApplicatorLength", x300a0298: "SourceApplicatorManufacturer", x300a029c: "SourceApplicatorWallNomThickness", x300a029e: "SourceApplicatorWallNomTrans", x300a02a0: "SourceApplicatorStepSize", x300a02a2: "TransferTubeNumber", x300a02a4: "TransferTubeLength", x300a02b0: "ChannelShieldSequence", x300a02b2: "ChannelShieldNumber", x300a02b3: "ChannelShieldID", x300a02b4: "ChannelShieldName", x300a02b8: "ChannelShieldNominalThickness", x300a02ba: "ChannelShieldNominalTransmission", x300a02c8: "FinalCumulativeTimeWeight", x300a02d0: "BrachyControlPointSequence", x300a02d2: "ControlPointRelativePosition", x300a02d4: "ControlPoint3DPosition", x300a02d6: "CumulativeTimeWeight", x300a02e0: "CompensatorDivergence", x300a02e1: "CompensatorMountingPosition", x300a02e2: "SourceToCompensatorDistance", x300a02e3: "TotalCompTrayWaterEquivThickness", x300a02e4: "IsocenterToCompensatorTrayDistance", x300a02e5: "CompensatorColumnOffset", x300a02e6: "IsocenterToCompensatorDistances", x300a02e7: "CompensatorRelStoppingPowerRatio", x300a02e8: "CompensatorMillingToolDiameter", x300a02ea: "IonRangeCompensatorSequence", x300a02eb: "CompensatorDescription", x300a0302: "RadiationMassNumber", x300a0304: "RadiationAtomicNumber", x300a0306: "RadiationChargeState", x300a0308: "ScanMode", x300a030a: "VirtualSourceAxisDistances", x300a030c: "SnoutSequence", x300a030d: "SnoutPosition", x300a030f: "SnoutID", x300a0312: "NumberOfRangeShifters", x300a0314: "RangeShifterSequence", x300a0316: "RangeShifterNumber", x300a0318: "RangeShifterID", x300a0320: "RangeShifterType", x300a0322: "RangeShifterDescription", x300a0330: "NumberOfLateralSpreadingDevices", x300a0332: "LateralSpreadingDeviceSequence", x300a0334: "LateralSpreadingDeviceNumber", x300a0336: "LateralSpreadingDeviceID", x300a0338: "LateralSpreadingDeviceType", x300a033a: "LateralSpreadingDeviceDescription", x300a033c: "LateralSpreadingDevWaterEquivThick", x300a0340: "NumberOfRangeModulators", x300a0342: "RangeModulatorSequence", x300a0344: "RangeModulatorNumber", x300a0346: "RangeModulatorID", x300a0348: "RangeModulatorType", x300a034a: "RangeModulatorDescription", x300a034c: "BeamCurrentModulationID", x300a0350: "PatientSupportType", x300a0352: "PatientSupportID", x300a0354: "PatientSupportAccessoryCode", x300a0356: "FixationLightAzimuthalAngle", x300a0358: "FixationLightPolarAngle", x300a035a: "MetersetRate", x300a0360: "RangeShifterSettingsSequence", x300a0362: "RangeShifterSetting", x300a0364: "IsocenterToRangeShifterDistance", x300a0366: "RangeShifterWaterEquivThickness", x300a0370: "LateralSpreadingDeviceSettingsSeq", x300a0372: "LateralSpreadingDeviceSetting", x300a0374: "IsocenterToLateralSpreadingDevDist", x300a0380: "RangeModulatorSettingsSequence", x300a0382: "RangeModulatorGatingStartValue", x300a0384: "RangeModulatorGatingStopValue", x300a038a: "IsocenterToRangeModulatorDistance", x300a0390: "ScanSpotTuneID", x300a0392: "NumberOfScanSpotPositions", x300a0394: "ScanSpotPositionMap", x300a0396: "ScanSpotMetersetWeights", x300a0398: "ScanningSpotSize", x300a039a: "NumberOfPaintings", x300a03a0: "IonToleranceTableSequence", x300a03a2: "IonBeamSequence", x300a03a4: "IonBeamLimitingDeviceSequence", x300a03a6: "IonBlockSequence", x300a03a8: "IonControlPointSequence", x300a03aa: "IonWedgeSequence", x300a03ac: "IonWedgePositionSequence", x300a0401: "ReferencedSetupImageSequence", x300a0402: "SetupImageComment", x300a0410: "MotionSynchronizationSequence", x300a0412: "ControlPointOrientation", x300a0420: "GeneralAccessorySequence", x300a0421: "GeneralAccessoryID", x300a0422: "GeneralAccessoryDescription", x300a0423: "GeneralAccessoryType", x300a0424: "GeneralAccessoryNumber", x300c0002: "ReferencedRTPlanSequence", x300c0004: "ReferencedBeamSequence", x300c0006: "ReferencedBeamNumber", x300c0007: "ReferencedReferenceImageNumber", x300c0008: "StartCumulativeMetersetWeight", x300c0009: "EndCumulativeMetersetWeight", x300c000a: "ReferencedBrachyAppSetupSeq", x300c000c: "ReferencedBrachyAppSetupNumber", x300c000e: "ReferencedSourceNumber", x300c0020: "ReferencedFractionGroupSequence", x300c0022: "ReferencedFractionGroupNumber", x300c0040: "ReferencedVerificationImageSeq", x300c0042: "ReferencedReferenceImageSequence", x300c0050: "ReferencedDoseReferenceSequence", x300c0051: "ReferencedDoseReferenceNumber", x300c0055: "BrachyReferencedDoseReferenceSeq", x300c0060: "ReferencedStructureSetSequence", x300c006a: "ReferencedPatientSetupNumber", x300c0080: "ReferencedDoseSequence", x300c00a0: "ReferencedToleranceTableNumber", x300c00b0: "ReferencedBolusSequence", x300c00c0: "ReferencedWedgeNumber", x300c00d0: "ReferencedCompensatorNumber", x300c00e0: "ReferencedBlockNumber", x300c00f0: "ReferencedControlPointIndex", x300c00f2: "ReferencedControlPointSequence", x300c00f4: "ReferencedStartControlPointIndex", x300c00f6: "ReferencedStopControlPointIndex", x300c0100: "ReferencedRangeShifterNumber", x300c0102: "ReferencedLateralSpreadingDevNum", x300c0104: "ReferencedRangeModulatorNumber", x300e0002: "ApprovalStatus", x300e0004: "ReviewDate", x300e0005: "ReviewTime", x300e0008: "ReviewerName", x40000000: "TextGroupLength", x40000010: "Arbitrary", x40004000: "TextComments", x40080040: "ResultsID", x40080042: "ResultsIDIssuer", x40080050: "ReferencedInterpretationSequence", x40080100: "InterpretationRecordedDate", x40080101: "InterpretationRecordedTime", x40080102: "InterpretationRecorder", x40080103: "ReferenceToRecordedSound", x40080108: "InterpretationTranscriptionDate", x40080109: "InterpretationTranscriptionTime", x4008010a: "InterpretationTranscriber", x4008010b: "InterpretationText", x4008010c: "InterpretationAuthor", x40080111: "InterpretationApproverSequence", x40080112: "InterpretationApprovalDate", x40080113: "InterpretationApprovalTime", x40080114: "PhysicianApprovingInterpretation", x40080115: "InterpretationDiagnosisDescription", x40080117: "InterpretationDiagnosisCodeSeq", x40080118: "ResultsDistributionListSequence", x40080119: "DistributionName", x4008011a: "DistributionAddress", x40080200: "InterpretationID", x40080202: "InterpretationIDIssuer", x40080210: "InterpretationTypeID", x40080212: "InterpretationStatusID", x40080300: "Impressions", x40084000: "ResultsComments", x4ffe0001: "MACParametersSequence", x50xx0005: "CurveDimensions", x50xx0010: "NumberOfPoints", x50xx0020: "TypeOfData", x50xx0022: "CurveDescription", x50xx0030: "AxisUnits", x50xx0040: "AxisLabels", x50xx0103: "DataValueRepresentation", x50xx0104: "MinimumCoordinateValue", x50xx0105: "MaximumCoordinateValue", x50xx0106: "CurveRange", x50xx0110: "CurveDataDescriptor", x50xx0112: "CoordinateStartValue", x50xx0114: "CoordinateStepValue", x50xx1001: "CurveActivationLayer", x50xx2000: "AudioType", x50xx2002: "AudioSampleFormat", x50xx2004: "NumberOfChannels", x50xx2006: "NumberOfSamples", x50xx2008: "SampleRate", x50xx200a: "TotalTime", x50xx200c: "AudioSampleData", x50xx200e: "AudioComments", x50xx2500: "CurveLabel", x50xx2600: "CurveReferencedOverlaySequence", x50xx2610: "ReferencedOverlayGroup", x50xx3000: "CurveData", x52009229: "SharedFunctionalGroupsSequence", x52009230: "PerFrameFunctionalGroupsSequence", x54000100: "WaveformSequence", x54000110: "ChannelMinimumValue", x54000112: "ChannelMaximumValue", x54001004: "WaveformBitsAllocated", x54001006: "WaveformSampleInterpretation", x5400100a: "WaveformPaddingValue", x54001010: "WaveformData", x56000010: "FirstOrderPhaseCorrectionAngle", x56000020: "SpectroscopyData", x60000000: "OverlayGroupLength", x60xx0010: "OverlayRows", x60xx0011: "OverlayColumns", x60xx0012: "OverlayPlanes", x60xx0015: "NumberOfFramesInOverlay", x60xx0022: "OverlayDescription", x60xx0040: "OverlayType", x60xx0045: "OverlaySubtype", x60xx0050: "OverlayOrigin", x60xx0051: "ImageFrameOrigin", x60xx0052: "OverlayPlaneOrigin", x60xx0060: "OverlayCompressionCode", x60xx0061: "OverlayCompressionOriginator", x60xx0062: "OverlayCompressionLabel", x60xx0063: "OverlayCompressionDescription", x60xx0066: "OverlayCompressionStepPointers", x60xx0068: "OverlayRepeatInterval", x60xx0069: "OverlayBitsGrouped", x60xx0100: "OverlayBitsAllocated", x60xx0102: "OverlayBitPosition", x60xx0110: "OverlayFormat", x60xx0200: "OverlayLocation", x60xx0800: "OverlayCodeLabel", x60xx0802: "OverlayNumberOfTables", x60xx0803: "OverlayCodeTableLocation", x60xx0804: "OverlayBitsForCodeWord", x60xx1001: "OverlayActivationLayer", x60xx1100: "OverlayDescriptorGray", x60xx1101: "OverlayDescriptorRed", x60xx1102: "OverlayDescriptorGreen", x60xx1103: "OverlayDescriptorBlue", x60xx1200: "OverlaysGray", x60xx1201: "OverlaysRed", x60xx1202: "OverlaysGreen", x60xx1203: "OverlaysBlue", x60xx1301: "ROIArea", x60xx1302: "ROIMean", x60xx1303: "ROIStandardDeviation", x60xx1500: "OverlayLabel", x60xx3000: "OverlayData", x60xx4000: "OverlayComments", x7fxx0000: "PixelDataGroupLength", x7fxx0010: "PixelData", x7fxx0011: "VariableNextDataGroup", x7fxx0020: "VariableCoefficientsSDVN", x7fxx0030: "VariableCoefficientsSDHN", x7fxx0040: "VariableCoefficientsSDDN", xfffafffa: "DigitalSignaturesSequence", xfffcfffc: "DataSetTrailingPadding", xfffee000: "StartOfItem", xfffee00d: "EndOfItems", xfffee0dd: "EndOfSequence"
      }
      ;
      a.init(r),
      r=null,
      t.a=a
  }
  ,
  jVBd:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      i("pIFo"),
      i("SRfc"),
      i("V+eJ"),
      i("Oyvg");
      function n(e, t) {
          2<arguments.length&&void 0!==arguments[2]&&arguments[2];
          if(e)return e.imageId?e.imageId:e.url?(void 0!==t&&(e.url=function(e, t, i) {
              if(t) {
                  var n=new RegExp("([?&])"+t+"=.*?(&|$)", "i"), a=-1!==e.indexOf("?")?"&": "?";
                  return e.match(n)?e.replace(n, "$1"+t+"="+i+"$2"): e+a+t+"="+i
              }
              return e
          }
          (e.url, "frame", t)), e.url):void 0
      }
  }
  ,
  jqra:function(e, t, i) {
      "use strict";
      var n=i("Rsbj"),
      a=i("zYFM");
      t.a=function() {
          Object(a.b)(),
          Object(n.b)(function() {
              return Promise.all([i.e("async-vendor"), i.e(19), i.e("exportDialog")]).then(i.bind(null, "SWpC"))
          }
          )
      }
  }
  ,
  "lG/8":function(e, t, i) {
      "use strict";
      var n=i("80ml");
      i.n(n).a
  }
  ,
  mfGe:function(e, t, i) {
      "use strict";
      i("91GP"),
      i("a1Th"),
      i("h7Nl"),
      i("0l/t"),
      i("rGqo"),
      i("8+KV");
      var n=i("BkRI"),
      r=i.n(n),
      u=i("hZHs"),
      d=i("PDtF");
      t.a= {
          maximizeCardWin:function(i) {
              var e=d.b.getters.layout,
              t=d.b.getters.grids;
              u.a.session.setObject("oldLayout", e, 2),
              u.a.session.setObject("oldGrids", t, 2);
              var n=r()(e);
              n.rows=1,
              n.columns=1,
              n.style.gridTemplateColumns="100%",
              n.style.gridTemplateRows="100%";
              var a=r()(t);
              a.forEach(function(e, t) {
                  t===i?(e.style.gridColumn="1", e.style.gridRow="1", e.style.gridColumnEnd="auto", e.style.gridRowEnd="auto"): e.style.display="none"
              }
              ),
              d.b.dispatch("setLayout", n),
              d.b.dispatch("setGrids", a),
              u.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2)
          }
          ,
          normalCardWin:function(e) {
              var t=u.a.session.getObject("oldLayout"),
              i=u.a.session.getObject("oldGrids");
              d.b.dispatch("setLayout", t),
              d.b.dispatch("setGrids", i),
              u.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 1)
          }
          ,
          closeCardWin:function(i) {
              var e=u.a.session.getObject("oldLayout", 2),
              t=u.a.session.getObject("oldGrids", 2);
              e&&t&&(d.b.dispatch("setLayout", e), d.b.dispatch("setGrids", t));
              var a=d.b.getters.grids,
              m=d.b.getters.layout,
              g=parseInt(i/m.columns),
              p=[],
              r=[];
              a.forEach(function(e, t) {
                  t===i&&(e.style.display="none")
              }
              );
              for(var n=function(i) {
                  var n=0;
                  a.forEach(function(e, t) {
                      parseInt(t/m.columns)===i&&"block"===e.style.display&&(n++, r.push(t))
                  }
                  ), p.push( {
                      rowIdx: i, colNum: n
                  }
                  )
              }
              , o=0;
              o<m.rows;
              o++)n(o);
              var f,
              S=0,
              h=0,
              v=p.filter(function(e) {
                  return 0<e.colNum
              }
              ),
              y=v.length,
              b=1<m.rows?m.rows-1:m.rows,
              I=1<m.columns?m.columns-1:m.columns;
              a.forEach(function(e, t) {
                  var i=parseInt(t/m.columns);
                  if(v.length<m.rows) {
                      var n=parseInt(m.rows*b/y), a=m.rows*b%y;
                      if(i!==g) {
                          v.forEach(function(e, t) {
                              e.rowIdx===i&&(h=t)
                          }
                          );
                          var r=0===a?n*(h+1)+1:n*(h+1)+2;
                          if(0===i)e.style.gridRow=(h+1).toString(), e.style.gridRowEnd=r.toString();
                          else {
                              var o=0===a?n*h+1: n*h+2;
                              e.style.gridRow=o.toString(), e.style.gridRowEnd=r.toString()
                          }
                      }
                      if(p[i].colNum&&p[i].colNum<m.columns&&"block"===e.style.display) {
                          var s=parseInt(m.columns*I/p[i].colNum), c=m.columns*I%p[i].colNum;
                          if(i===g) {
                              S++;
                              var l=0===c?s*S+1: s*S+2;
                              1===S?(e.style.gridColumn=S.toString(), e.style.gridColumnEnd=l): (e.style.gridColumn=f.toString(), e.style.gridColumnEnd=l.toString()), f=l
                          }
                      }
                  }
                  else if("block"===e.style.display) {
                      var u=parseInt(m.columns*I/p[i].colNum), d=m.columns*I%p[i].colNum;
                      if(i===g) {
                          S++;
                          var x=0===d?u*S+1: u*S+2;
                          e.style.gridColumn=1===S?S.toString(): f.toString(), e.style.gridColumnEnd=x.toString(), f=x
                      }
                  }
              }
              ),
              d.b.dispatch("setGrids", a),
              u.a.session.remove("oldLayout", 1),
              u.a.session.remove("oldGrids", 1),
              u.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2),
              u.a.eventBus.$emit("activateViewport", 0<r.length?r[0]:0)
          }
          ,
          splitCardGrids:function(i, n, a) {
              var e=d.b.getters.grids;
              e.forEach(function(e, t) {
                  t===i&&(e.subGridLayout= {}
                  , e.subGridLayout.rows=n, e.subGridLayout.columns=a)
              }
              ),
              u.a.store.dispatch("setGrids", e),
              u.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2)
          }
          ,
          splitLayout:function(e) {
              var t=d.b.getters.layout,
              i=Object.assign( {}
              , t, e);
              !function(e) {
                  for(var t=[], i=[], n=1<e.rows?e.rows*(e.rows-1): e.rows, a=1<e.columns?e.columns*(e.columns-1): e.columns, r=1;
                  r<=n;
                  r++)t.push(100/n+"%");
                  for(var o=1;
                  o<=a;
                  o++)i.push(100/a+"%");
                  e.style.display="grid",
                  e.style.gridTemplateColumns=i.join(" "),
                  e.style.gridTemplateRows=t.join(" "),
                  u.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2),
                  u.a.store.dispatch("setLayout", e),
                  u.a.eventBus.$emit("activateViewport", 0)
              }
              (i),
              function(e) {
                  for(var t=[], i=d.b.getters.grids, n=0, a=0;
                  a<e.rows;
                  a++)for(var r=0;
                  r<e.columns;
                  r++) {
                      var o=(e.columns-1)*r+1,
                      s=o+(e.columns-1),
                      c=(e.rows-1)*a+1,
                      l=c+(e.rows-1);
                      t.push( {
                          style: {
                              display: "block", gridColumn: o.toString(), gridRow: c.toString(), gridColumnEnd: s.toString(), gridRowEnd: l.toString()
                          }
                          , subGridLayout:i.length>n?i[n].subGridLayout:null
                      }
                      ),
                      n++
                  }
                  u.a.store.dispatch("setGrids", t)
              }
              (i)
          }
      }
  }
  ,
  n0V9:function(e, t, i) {
      "use strict";
      i.r(t);
      var n=i("MVZn"),
      a=i.n(n),
      r=(i("xfY5"), i("WIBD")),
      o=i("f9UM"),
      s=i("mfGe"),
      c= {
          name:"toolbar-win-panel",
          data:function() {
              return {
                  showDropdown: !1
              }
          }
          ,
          props: {
              title: {
                  type: String
              }
              ,
              classes: {
                  type: Object|String
              }
              ,
              icon: {
                  type: String
              }
              ,
              iconClasses: {
                  type: String
              }
              ,
              maxRows: {
                  type: Number, default: o.a.settings.layoutMaxRows||3
              }
              ,
              maxColumns: {
                  type: Number, default: o.a.settings.layoutMaxColumns||3
              }
          }
          ,
          computed:a()( {}
          , Object(r.mapGetters)(["grids"])),
          methods: {
              showLayout:function() {
                  this.showDropdown=!this.showDropdown
              }
              ,
              handleMouseLeave:function() {
                  for(var e=0;
                  e<this.maxRows;
                  e++)for(var t=0;
                  t<this.maxColumns;
                  t++)this.$refs.layoutButtonDropdown.getElementsByTagName("ul")[e].getElementsByTagName("li")[t].classList.remove("active");
                  this.showDropdown=!1
              }
              ,
              handleMouseEnterSplit:function(e, t) {
                  for(var i=0;
                  i<this.maxRows;
                  i++)for(var n=0;
                  n<this.maxColumns;
                  n++)this.$refs.layoutButtonDropdown.getElementsByTagName("ul")[i].getElementsByTagName("li")[n].classList.remove("active");
                  for(var a=0;
                  a<e;
                  a++)for(var r=0;
                  r<t;
                  r++)this.$refs.layoutButtonDropdown.getElementsByTagName("ul")[a].getElementsByTagName("li")[r].classList.add("active")
              }
              ,
              handleSplit:function(e, t) {
                  o.a.viewer.fusionEnabled?this.$alert(this.$t("petCtFusion.fusioning"), this.$t("tip"), {
                      confirmButtonText: this.$t("confirm")
                  }
                  ):o.a.viewer.mprState.enable?this.$alert(this.$t("mprFunction.mpring"), this.$t("tip"), {
                      confirmButtonText: this.$t("confirm")
                  }
                  ):s.a.splitLayout( {
                      rows: e, columns: t
                  }
                  )
              }
          }
      }
      ,
      l=(i("K27S"), i("ZpG+")),
      u=Object(l.a)(c, function() {
          var n=this, e=n.$createElement, a=n._self._c||e;
          return a("div", {
              staticClass:"toolbar-button", attrs: {
                  title: n.title
              }
              , on: {
                  mouseleave:function(e) {
                      n.showDropdown=!1
                  }
                  , click:n.showLayout
              }
          }
          , [a("div", {
              class: n.classes
          }
          , [a("svg-icon", {
              attrs: {
                  "icon-class": n.icon, className: n.iconClasses
              }
          }
          )], 1), n._v(" "), a("div", {
              staticClass: "toolbar-button-arrow"
          }
          , [a("svg-icon", {
              attrs: {
                  "icon-class": "sub-toolbar-arrow"
              }
          }
          )], 1), n._v(" "), a("div", {
              ref:"layoutButtonDropdown", staticClass:"layout-dropdown", class:n.showDropdown?"is-show":"", on: {
                  mouseleave: n.handleMouseLeave
              }
          }
          , n._l(n.maxRows, function(i) {
              return a("ul", {
                  key: i
              }
              , n._l(n.maxColumns, function(t) {
                  return a("li", {
                      key:t, on: {
                          mouseenter:function(e) {
                              return n.handleMouseEnterSplit(i, t)
                          }
                          , click:function(e) {
                              return n.handleSplit(i, t)
                          }
                      }
                  }
                  )
              }
              ), 0)
          }
          ), 0)])
      }
      , [], !1, null, "5c908aff", null);
      t.default=u.exports
  }
  ,
  oQx6:function(e, t, i) {
      "use strict";
      var n=i("8Z7u");
      i.n(n).a
  }
  ,
  pKyk:function(e, t, i) {
      "use strict";
      var n= {
          name:"loading",
          props: {
              show: {
                  type: Boolean, default: !1
              }
          }
          ,
          methods: {
              showLoading:function() {
                  this.show=!0
              }
              ,
              hideLoading:function() {
                  this.show=!1
              }
          }
          ,
          mounted:function() {}
      }
      ,
      a=(i("0FfL"), i("ZpG+")),
      r=Object(a.a)(n, function() {
          var e=this.$createElement, t=this._self._c||e;
          return t("div", {
              directives:[ {
                  name: "show", rawName: "v-show", value: this.show, expression: "show"
              }
              ], ref:"loading", staticClass:"loading"
          }
          , [t("div", {
              staticClass: "loading-box"
          }
          )])
      }
      , [], !1, null, "6041a50c", null);
      t.a=r.exports
  }
  ,
  pmNF:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      var r=i("pyFn"),
      o=i("hZHs");
      function n(e) {
          var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: 0, i=Object(r.a)(e, t);
          if(i) {
              var n=o.d.getToolState(i, "stack");
              if(n&&n.data&&n.data.length) {
                  var a=n.data[0];
                  if(a)return a
              }
          }
      }
  }
  ,
  pyFn:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      var r=i("hZHs");
      function n(e) {
          var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: 0, i=document.getElementsByClassName("viewport-card");
          if(0!==i.length) {
              var n=i[e].querySelectorAll(".image-viewer-viewport"),
              a=n[t];
              if(a&&!a.classList.contains("empty"))if(0!==n[t].querySelectorAll("canvas").length) {
                  try {
                      r.b.getEnabledElement(a)
                  }
                  catch(e) {
                      return
                  }
                  return a
              }
          }
      }
  }
  ,
  srCo:function(e, t, i) {}
  ,
  "tT9+":function(e, t, i) {
      "use strict";
      i.d(t, "f", function() {
          return a
      }
      ),
      i.d(t, "e", function() {
          return r
      }
      ),
      i.d(t, "d", function() {
          return s
      }
      ),
      i.d(t, "c", function() {
          return c
      }
      ),
      i.d(t, "b", function() {
          return l
      }
      );
      i("rGqo"),
      i("8+KV");
      var n=function() {
          var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]: "image-viewer-viewport";
          return document.getElementsByClassName(e)
      }
      ,
      a=function(e) {
          var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: 0;
          null==e&&(e=0),
          t<0&&(t=0);
          var i=document.getElementsByClassName("viewport-card");
          return i.length>e?i[e].querySelectorAll(".image-viewer-viewport")[t]: null
      }
      ,
      r=function(e) {
          return document.getElementsByClassName("viewport-card")[e].querySelectorAll(".image-viewer-viewport")
      }
      ,
      o=function() {
          for(var e=document.getElementsByClassName("viewport-card"), t=[], i=0;
          i<e.length;
          i++) {
              var n=e[i].querySelectorAll(".image-viewer-viewport")[0];
              n.querySelectorAll("canvas").length&&t.push(n)
          }
          return t
      }
      ,
      s=function(e) {
          var t=n();
          Array.prototype.forEach.call(t, e)
      }
      ,
      c=function(t) {
          var e=n();
          Array.prototype.forEach.call(e, function(e) {
              e.querySelectorAll("canvas").length&&t(e)
          }
          )
      }
      ,
      l=function(t) {
          var e=o();
          Array.prototype.forEach.call(e, function(e) {
              t(e)
          }
          )
      }
      ,
      u= {
          getAllCardFirstNotEmptyElements:o,
          forEachAllCardFirstNotEmptyElements:l,
          getCardIndexByElement:function(e) {
              for(var t=document.getElementsByClassName("viewport-card"), i=0;
              i<t.length;
              i++)for(var n=t[i].querySelectorAll(".image-viewer-viewport"), a=0;
              a<n.length;
              a++)if(n[a]===e)return i
          }
          ,
          getViewportElements:n,
          getViewportElement:a,
          getSubGridViewportElements:r,
          forEachViewportElements:s,
          forEachNotEmptyElements:c,
          getSubGridIndexByElement:function(e) {
              for(var t=document.getElementsByClassName("viewport-card"), i=0;
              i<t.length;
              i++)for(var n=t[i].querySelectorAll(".image-viewer-viewport"), a=0;
              a<n.length;
              a++)if(n[a]===e)return a
          }
      }
      ;
      t.a=u
  }
  ,
  tgvk:function(e, t, i) {}
  ,
  trZD:function(e, t, i) {}
  ,
  uMz5:function(e, t, i) {
      "use strict";
      i("V+eJ"),
      i("91GP"),
      i("hhXQ"),
      i("Z2Ku"),
      i("L9s1"),
      i("8+KV"),
      i("rGqo"),
      i("yt8O"),
      i("RW0V"),
      i("0l/t");
      var s,
      n,
      a=i("MVZn"),
      c=i.n(a),
      l=i("hZHs"),
      u=i("OB9c"),
      d=i("c3He"),
      x=i("Q/NG"),
      r=i("KLBf"),
      m=i("P0NO"),
      o=i("g7kw"),
      g= {}
      ,
      p=!1,
      f= {
          left: "wwwc", right: "zoom", middle: "pan"
      }
      ,
      S= {
          shadow: !1, shadowColor: "#000000", shadowOffsetX: 0, shadowOffsetY: 0, drawHandlesOnHover: !0
      }
      ,
      h= {
          left: 1, right: 2, middle: 4
      }
      ,
      v=["freehandAnnotation",
      "rectAnnotation",
      "ellipticalAnnotation"],
      y=["length",
      "probe",
      "angle",
      "arrowAnnotate",
      "ellipticalRoi",
      "rectangleRoi",
      "freehand",
      "FusionSuvEllipticalRoiTool",
      "FusionSuvFreeHandTool"];
      function b(e) {
          var t=prompt(l.a.i18n.t("viewer.inputAnnotation"));
          t?e(t): e(null, void 0, !0)
      }
      function I(e, t, i) {
          var n=prompt(l.a.i18n.t("viewer.changeAnnotation"), e.text);
          n?i(e, n): ""!==n&&""!==e.text?i(e, e.text): i(e, void 0, !0)
      }
      var T= {
          init:function() {
              console.log("toolManager init..."),
              l.a.viewer.defaultTool&&(f=l.a.viewer.defaultTool),
              l.d.init( {
                  showSVGCursors: l.a.settings.showSVGCursors
              }
              ),
              g= {
                  wwwc: {
                      className: "WwwcTool"
                  }
                  ,
                  wwwcRegion: {
                      className: "WwwcRegionTool"
                  }
                  ,
                  zoom: {
                      className:"ZoomTool",
                      configuration: {
                          minScale: .05, maxScale: 10
                      }
                  }
                  ,
                  zoomTouchPinch: {
                      className: "ZoomTouchPinchTool"
                  }
                  ,
                  panMultiTouch: {
                      className: "PanMultiTouchTool"
                  }
                  ,
                  pan: {
                      className: "PanTool"
                  }
                  ,
                  rotate: {
                      className: "RotateTool"
                  }
                  ,
                  length: {
                      className:"LengthTool",
                      configuration:c()( {}
                      , S, {
                          drawHandlesOnHover: !0
                      }
                      )
                  }
                  ,
                  angle: {
                      className: "AngleTool", configuration: S
                  }
                  ,
                  ellipticalRoi: {
                      className:"EllipticalRoiTool",
                      configuration:c()( {}
                      , S, {
                          showMinMax: !0, drawHandlesOnHover: !1
                      }
                      )
                  }
                  ,
                  rectangleRoi: {
                      className:"RectangleRoiTool",
                      configuration:c()( {}
                      , S, {
                          drawHandlesOnHover: !0
                      }
                      )
                  }
                  ,
                  freehand: {
                      className: "FreehandMouseTool"
                  }
                  ,
                  probe: {
                      className: "ProbeTool"
                  }
                  ,
                  eraser: {
                      className: "EraserTool"
                  }
                  ,
                  scaleOverlay: {
                      className: "ScaleOverlayTool"
                  }
                  ,
                  arrowAnnotate: {
                      className:"ArrowAnnotateTool",
                      configuration:c()( {}
                      , S, {
                          getTextCallback: b, changeTextCallback: I, drawHandles: !1, arrowFirst: !0
                      }
                      )
                  }
                  ,
                  magnify: {
                      className:"MagnifyTool",
                      configuration: {
                          magnifySize: 300, magnificationLevel: 3
                      }
                  }
                  ,
                  crosshairs: {
                      className: "CrosshairsTool"
                  }
                  ,
                  stackScroll: {
                      className: "StackScrollTool"
                  }
                  ,
                  stackScrollMouseWheel: {
                      className: "StackScrollMouseWheelTool"
                  }
                  ,
                  stackScrollMultiTouch: {
                      className: "StackScrollMultiTouchTool"
                  }
                  ,
                  referenceLines: {
                      className: "ReferenceLinesTool"
                  }
              }
              ,
              this.registerThirdPartyTool("FusionSuvEllipticalRoiTool", "suvEllipticalMeasure", r.a, c()( {}
              , S, {
                  showMinMax: !0
              }
              )),
              this.registerThirdPartyTool("FusionSuvFreeHandTool", "suvFreehandMeasure", o.a, c()( {}
              , S, {
                  showMinMax: !0
              }
              )),
              (n=l.a.settings&&l.a.settings.defaultMouseButtonTools)&&(n.left&&this.setDefaultTool(n.left), n.right&&this.setDefaultTool(n.right, "right"), n.middle&&this.setDefaultTool(n.middle, "middle"));
              var e=l.d.textStyle,
              t=l.d.toolStyle,
              i=l.d.toolColors;
              e.setBackgroundColor("transparent");
              e.setFont("15px Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"),
              t.setToolWidth(2),
              i.setToolColor("rgb(255, 255, 0)"),
              i.setActiveColor("rgb(50, 205, 50)"),
              p=!0
          }
          ,
          getKeysByValue:function(t, i) {
              return Object.keys(t).filter(function(e) {
                  return t[e]===i
              }
              )
          }
          ,
          getMouseButtonMask:function(e) {
              return h[e]||void 0
          }
          ,
          configureLoadProcess:function() {
              function e(e) {
                  var t=e.detail;
                  T.getKeysByValue(window.ViewportLoading, t.imageId).forEach(function(e) {
                      l.a.session.setObject("cornerstoneLoadProgress:"+e, t.percentComplete, 2)
                  }
                  );
                  var i=l.a.string.encodeId(t.imageId);
                  l.a.session.set("cornerstoneThumbnailLoadProgress:"+i, t.percentComplete, 2)
              }
              l.b.events.removeEventListener("cornerstoneimageloadprogress", e),
              l.b.events.addEventListener("cornerstoneimageloadprogress", e)
          }
          ,
          addTool:function(e, t) {
              g[e]=t
          }
          ,
          registerThirdPartyTool:function(e, t, i, n) {
              l.d[e]=i,
              g[t]= {
                  className: e, configuration: n
              }
          }
          ,
          getTools:function() {
              return Object.keys(g)
          }
          ,
          getAnnotationTools:function() {
              return v
          }
          ,
          getMeasurementTools:function() {
              return y
          }
          ,
          getAnnotationOrMeasurementTools:function() {
              return v.concat(y)
          }
          ,
          setActiveTool:function(t) {
              var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]: "left", n=2<arguments.length?arguments[2]: void 0;
              l.d.store.state.enabledElements.forEach(function(e) {
                  T.setActiveToolForElement(e, t, i="left", n, !1)
              }
              ),
              "left"===i&&(l.a.eventBus.$emit("activeToolChanged", t), l.a.viewer.setActiveTool(t)),
              console.log("Set active tool: ".concat(t, "(").concat(i, ")"))
          }
          ,
          setActiveToolForElement:function(t, e) {
              var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]: "left", n=3<arguments.length?arguments[3]: void 0, a=!(4<arguments.length&&void 0!==arguments[4])||arguments[4];
              if(!e)return T.setActiveToolForElement(t, T.getDefaultTool()),
              T.setActiveToolForElement(t, T.getDefaultTool("right"), "right"),
              void T.setActiveToolForElement(t, T.getDefaultTool("middle"), "middle");
              var r=T.getMouseButtonMask(i);
              switch(r&&(n=c()( {}
              , n, {
                  mouseButtonMask: r
              }
              )), l.a.session.getObject("tools:measureEnabled", 2, !0)||(T.getMeasurementTools().forEach(function(e) {
                  l.d.setToolDisabledForElement(t, e)
              }
              ), l.b.updateImage(t)), i) {
                  case"left":l.d.setToolActiveForElement(t, T.getActiveTool("right"), {
                      mouseButtonMask: T.getMouseButtonMask("right")
                  }
                  ),
                  l.d.setToolActiveForElement(t, T.getActiveTool("middle"), {
                      mouseButtonMask: T.getMouseButtonMask("middle")
                  }
                  );
                  break;
                  case"right":l.d.setToolActiveForElement(t, T.getActiveTool("left"), {
                      mouseButtonMask: T.getMouseButtonMask("left")
                  }
                  ),
                  l.d.setToolActiveForElement(t, T.getActiveTool("middle"), {
                      mouseButtonMask: T.getMouseButtonMask("middle")
                  }
                  );
                  break;
                  case"middle":l.d.setToolActiveForElement(t, T.getActiveTool("left"), {
                      mouseButtonMask: T.getMouseButtonMask("left")
                  }
                  ),
                  l.d.setToolActiveForElement(t, T.getActiveTool("right"), {
                      mouseButtonMask: T.getMouseButtonMask("right")
                  }
                  )
              }
              if("crosshairs"===e) {
                  var o=Object(u.a)(t);
                  o&&(Object(d.a)(o), n.synchronizationContext=x.a.synchronizers[o]),
                  l.d.setToolActiveForElement(t, e, n)
              }
              else l.d.setToolActiveForElement(t, e, n);
              s[i]=e,
              a&&("left"===i&&(l.a.eventBus.$emit("activeToolChanged", e), l.a.viewer.setActiveTool(e)), console.log("Set active tool for element: ".concat(e, "(").concat(i, ")")))
          }
          ,
          instantiateTools:function(o) {
              Object.keys(g).forEach(function(e) {
                  var t=g[e], i=t.className, n=t.configuration, a=l.d[i];
                  if(a) {
                      var r= {
                          name: e
                      }
                      ;
                      n&&(r.configuration=n), l.d.addToolForElement(o, a, r), s&&Object.values(s).includes(e)||l.d.setToolPassive(e)
                  }
              }
              );
              var e=Object(m.a)();
              e&&(l.d.setToolActive("zoomTouchPinch", {
                  mouseButtonMask: 0, isTouchActive: e
              }
              ), l.d.setToolActive("panMultiTouch", {
                  mouseButtonMask: 0, isTouchActive: e
              }
              ), l.d.setToolActive("stackScrollMultiTouch", {
                  mouseButtonMask: 0, isTouchActive: e
              }
              ))
          }
          ,
          removeToolsForElement:function(t) {
              Object.keys(g).forEach(function(e) {
                  l.d.removeToolForElement(t, e)
              }
              )
          }
          ,
          setPassiveTool:function(e, t) {
              p||T.init(),
              l.d.setToolPassive(e, t),
              s= {
                  left: l.a.device.desktop()?"": "stackScroll", right: "zoom", middle: "pan"
              }
              ,
              l.a.device.desktop()?(l.a.eventBus.$emit("activeToolChanged", ""), l.a.viewer.setActiveTool("")):(T.setActiveTool("stackScroll"), l.a.eventBus.$emit("activeToolChanged", "stackScroll"), l.a.viewer.setActiveTool("stackScroll"))
          }
          ,
          toggleActiveTool:function(e, t) {
              e===T.getActiveTool()?T.setPassiveTool(e, t): T.setActiveTool(e, t)
          }
          ,
          getNearbyToolData:function(r, o, e) {
              var s=!1,
              c= {}
              ;
              return(e||this.getTools()).forEach(function(e) {
                  var t=l.d.getToolState(r, e);
                  if(t) {
                      for(var i=0;
                      i<t.data.length;
                      i++) {
                          var n=t.data[i], a=l.d.getToolForElement(r, e);
                          if(a&&"function"==typeof a.pointNearTool&&a.pointNearTool(r, n, o)) {
                              s=!0, c.tool=n, c.index=i, c.toolType=e;
                              break
                          }
                      }
                      return!0!==s&&void 0
                  }
              }
              ),
              s?c:void 0
          }
          ,
          getActiveTool:function() {
              var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]: "left";
              return p||T.init(),
              s||(s=Object.assign( {}
              , f)),
              s[e]
          }
          ,
          setDefaultTool:function(e) {
              var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: "left";
              f[t]=e
          }
          ,
          getDefaultTool:function() {
              var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]: "left";
              return f[e]
          }
          ,
          activateCommandButton:function(e) {
              var t=l.a.session.getObject("toolManagerActiveCommandButtons")||[];
              -1===t.indexOf(e)&&(t.push(e), l.a.viewer.setActiveCommandButtons(t))
          }
          ,
          deactivateCommandButton:function(e) {
              var t=l.a.session.getObject("toolManagerActiveCommandButtons")||[],
              i=t.indexOf(e);
              -1!==i&&(t.splice(i, 1), l.a.viewer.setActiveCommandButtons(t))
          }
      }
      ;
      t.a=T
  }
  ,
  w6Oy:function(e, t, i) {
      "use strict";
      i("8+KV");
      var r=i("f9UM"),
      m=i("uMz5"),
      g=i("cR7Z"),
      n=i("mfGe"),
      p=i("SW4N"),
      a=(i("V+eJ"), i("yt8O"), i("RW0V"), i("rGqo"), i("lwsE")),
      o=i.n(a),
      s=i("W8MJ"),
      c=i.n(s),
      l=(i("2Spj"), i("XfO3"), i("9AAn"), i("a1gu")),
      u=i.n(l),
      d=i("Nsbk"),
      x=i.n(d),
      f=i("7W2i"),
      S=i.n(f),
      h=(i("a1Th"), i("h7Nl"), function() {
          function i(e, t) {
              o()(this, i), t=t|| {}
              , this.id=i.getNewId(), this.stack=e, this.startListening(), this.statsItemsLimit=t.statsItemsLimit||2, this.stats= {
                  items: [], total: 0, elapsedTime: 0, speed: 0
              }
              , this._addStatsData(0), this._updateProgress()
          }
          return c()(i, [ {
              key:"_addStatsData", value:function(e) {
                  var t=new Date, i=this.stats, n=i.items, a= {
                      value: e, date: t
                  }
                  ;
                  for(n.push(a), i.total+=a.value;
                  n.length>this.statsItemsLimit;
                  ) {
                      var r=n.shift();
                      i.total-=r.value
                  }
                  if(1<n.length) {
                      var o=n[0];
                      i.elapsedTime=(a.date.getTime()-o.date.getTime())/1e3, i.speed=(i.total-o.value)/i.elapsedTime
                  }
              }
          }
          , {
              key:"_getProgressSessionId", value:function() {
                  return"stackProgress:"+this.stack.displaySetInstanceUid
              }
          }
          , {
              key:"_clearSession", value:function() {
                  var e=this._getProgressSessionId();
                  r.d.remove(e)
              }
          }
          , {
              key:"startListening", value:function() {
                  throw new Error("`startListening` must be implemented by child clases")
              }
          }
          , {
              key:"stopListening", value:function() {
                  throw new Error("`stopListening` must be implemented by child clases")
              }
          }
          , {
              key:"destroy", value:function() {
                  this.stopListening(), this._clearSession()
              }
          }
          ], [ {
              key:"getNewId", value:function() {
                  var e=(new Date).getTime().toString().slice(-8), t=parseInt(1e9*Math.random());
                  return e.toString()+t.toString()
              }
          }
          ]), i
      }
      ()),
      z=i("hZHs"),
      v=function(e) {
          function i(e) {
              var t;
              return o()(this, i),
              (t=u()(this, x()(i).call(this, e, {
                  statsItemsLimit: 20
              }
              ))).imageDataMap=t._convertImageIdsArrayToMap(e.imageIds),
              t.framesStatus=t._createArray(e.imageIds.length, !1),
              t.loadedCount=0,
              t._checkCachedData(),
              t
          }
          return S()(i, e),
          c()(i, [ {
              key:"_convertImageIdsArrayToMap", value:function(e) {
                  for(var t=new Map, i=0;
                  i<e.length;
                  i++)t.set(e[i], {
                      index: i, loaded: !1
                  }
                  );
                  return t
              }
          }
          , {
              key:"_createArray", value:function(e, t) {
                  for(var i=[], n=0;
                  n<e;
                  n++)i[n]=t;
                  return i
              }
          }
          , {
              key:"_checkCachedData", value:function() {}
          }
          , {
              key:"_getImageLoadedEventName", value:function() {
                  return"cornerstoneimageloaded."+this.id
              }
          }
          , {
              key:"_getImageCachePromiseRemoveEventName", value:function() {
                  return"cornerstoneimagecachepromiseremoved."+this.id
              }
          }
          , {
              key:"startListening", value:function() {
                  var e=this._getImageLoadedEventName(), t=this._getImageCachePromiseRemoveEventName(), i=this._imageLoadedEventHandle.bind(this), n=this._imageCachePromiseRemovedEventHandle.bind(this);
                  this.stopListening(), z.b.events.addEventListener(e, i), z.b.events.addEventListener(t, n)
              }
          }
          , {
              key:"stopListening", value:function() {
                  var e=this._getImageLoadedEventName(), t=this._getImageCachePromiseRemoveEventName();
                  z.b.events.removeEventListener(e), z.b.events.removeEventListener(t)
              }
          }
          , {
              key:"_updateFrameStatus", value:function(e, t) {
                  var i=this.imageDataMap.get(e);
                  i&&i.loaded!==t&&(t&&this._addStatsData(1), i.loaded=t, this.framesStatus[i.index]=t, this.loadedCount+=t?1: -1, this._updateProgress())
              }
          }
          , {
              key:"_imageLoadedEventHandle", value:function(e) {
                  this._updateFrameStatus(e.detail.image.imageId, !0)
              }
          }
          , {
              key:"_imageCachePromiseRemovedEventHandle", value:function(e) {
                  this._updateFrameStatus(e.detail.imageId, !1)
              }
          }
          , {
              key:"_updateProgress", value:function() {
                  var e=this.stack.imageIds.length, t=this.loadedCount, i=e-t, n=Math.round(t/e*100), a=this._getProgressSessionId();
                  r.d.setObject(a, {
                      multiFrame: !0, totalFramesCount: e, loadedFramesCount: t, loadingFramesCount: i, percentComplete: n, framesPerSecond: this.stats.speed, framesStatus: this.framesStatus
                  }
                  , 2)
              }
          }
          , {
              key:"_logProgress", value:function() {
                  for(var e=this.stack.imageIds.length, t=this.stack.displaySetInstanceUid, i="[", n=0;
                  n<e;
                  n++) {
                      var a=this.framesStatus[n]?"|": ".";
                      i+="".concat(a)
                  }
                  i+="]", r.a.log.info("".concat(t, ": ").concat(i))
              }
          }
          ]),
          i
      }
      (h),
      y=(i("pIFo"), function(e) {
          function i(e) {
              var t;
              return o()(this, i), (t=u()(this, x()(i).call(this, e)))._dataSetUrl=t._getDataSetUrl(e), t._lastLoaded=0, t._checkCachedData(), t
          }
          return S()(i, e), c()(i, [ {
              key:"_checkCachedData", value:function() {
                  var e=z.a.cornerstone.cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.get(this._dataSetUrl);
                  if(e) {
                      var t=e.byteArray.length;
                      this._updateProgress( {
                          percentComplete: 100, loaded: t, total: t
                      }
                      )
                  }
              }
          }
          , {
              key:"_getImageLoadProgressEventName", value:function() {
                  return"cornerstoneimageloadprogress."+this.id
              }
          }
          , {
              key:"startListening", value:function() {
                  var e=this._getImageLoadProgressEventName(), t=this._imageLoadProgressEventHandle.bind(this);
                  this.stopListening(), z.b.events.addEventListener(e, t)
              }
          }
          , {
              key:"stopListening", value:function() {
                  var e=this._getImageLoadProgressEventName();
                  z.b.events.removeEventListener(e)
              }
          }
          , {
              key:"_imageLoadProgressEventHandle", value:function(e) {
                  var t=e.detail, i=this._convertImageIdToDataSetUrl(t.imageId), n=t.loaded-this._lastLoaded;
                  !this._dataSetUrl!==i&&(this._addStatsData(n), this._updateProgress(t), this._lastLoaded=t.loaded)
              }
          }
          , {
              key:"_updateProgress", value:function(e) {
                  var t=this._getProgressSessionId();
                  e=e|| {}
                  , r.d.setObject(t, {
                      multiFrame: !1, percentComplete: e.percentComplete, bytesLoaded: e.loaded, bytesTotal: e.total, bytesPerSecond: this.stats.speed
                  }
                  , 2)
              }
          }
          , {
              key:"_convertImageIdToDataSetUrl", value:function(e) {
                  return e=(e=(e=e.replace(/^(dicomweb: |wadouri: )/i, "")).replace(/frame=\d+&?/i, "")).replace(/&$/, "")
              }
          }
          , {
              key:"_getDataSetUrl", value:function(e) {
                  var t=e.imageIds[0];
                  return this._convertImageIdToDataSetUrl(t)
              }
          }
          ]), i
      }
      (h)),
      b=function() {
          function e() {
              o()(this, e),
              this.listeners= {}
          }
          return c()(e, [ {
              key:"addStack", value:function(e, t) {
                  var i=e.displaySetInstanceUid;
                  if(!this.listeners[i]) {
                      var n=this._createListener(e, t);
                      n&&(this.listeners[i]=n)
                  }
              }
          }
          , {
              key:"addStudy", value:function(i) {
                  var n=this;
                  i.displaySets.forEach(function(e) {
                      var t=r.a.viewerbase.stackManager.findOrCreateStack(i, e);
                      n.addStack(t, {
                          isMultiFrame: e.isMultiFrame
                      }
                      )
                  }
                  )
              }
          }
          , {
              key:"addStudies", value:function(e) {
                  if(e&&e.length)for(var t=0;
                  t<e.length;
                  t++)this.addStudy(e[t])
              }
          }
          , {
              key:"clear", value:function() {
                  for(var e=Object.keys(this.listeners), t=e.length, i=0;
                  i<t;
                  i++) {
                      var n=e[i];
                      this.listeners[n].destroy()
                  }
                  this.listeners= {}
              }
          }
          , {
              key:"_createListener", value:function(e, t) {
                  return"wadors"!==this._getSchema(e)&&t.isMultiFrame?new y(e): new v(e)
              }
          }
          , {
              key:"_getSchema", value:function(e) {
                  var t=e.imageIds[0], i=t.indexOf(":");
                  return t.substring(0, i)
              }
          }
          ], [ {
              key:"getInstance", value:function() {
                  return e._instance||(e._instance=new e), e._instance
              }
          }
          ]),
          e
      }
      (),
      I=i("Brr8"),
      T="1.2.840.10008.5.1.4.1.1.1",
      D="1.2.840.10008.5.1.4.1.1.1.1",
      C="1.2.840.10008.5.1.4.1.1.1.1.1",
      w="1.2.840.10008.5.1.4.1.1.1.2",
      P="1.2.840.10008.5.1.4.1.1.1.2.1",
      R="1.2.840.10008.5.1.4.1.1.1.3",
      O="1.2.840.10008.5.1.4.1.1.1.3.1",
      E="1.2.840.10008.5.1.4.1.1.2",
      A="1.2.840.10008.5.1.4.1.1.2.1",
      q="1.2.840.10008.5.1.4.1.1.2.2",
      N="1.2.840.10008.5.1.4.1.1.3.1",
      M="1.2.840.10008.5.1.4.1.1.4",
      V="1.2.840.10008.5.1.4.1.1.4.1",
      L="1.2.840.10008.5.1.4.1.1.4.3",
      F="1.2.840.10008.5.1.4.1.1.4.4",
      k="1.2.840.10008.5.1.4.1.1.6.1",
      B="1.2.840.10008.5.1.4.1.1.7",
      _="1.2.840.10008.5.1.4.1.1.7.1",
      G="1.2.840.10008.5.1.4.1.1.7.2",
      U="1.2.840.10008.5.1.4.1.1.7.3",
      j="1.2.840.10008.5.1.4.1.1.7.4",
      W="1.2.840.10008.5.1.4.1.1.12.1",
      H="1.2.840.10008.5.1.4.1.1.12.1.1",
      $="1.2.840.10008.5.1.4.1.1.12.2",
      Z="1.2.840.10008.5.1.4.1.1.12.2.1",
      Y="1.2.840.10008.5.1.4.1.1.13.1.1",
      X="1.2.840.10008.5.1.4.1.1.13.1.2",
      K="1.2.840.10008.5.1.4.1.1.13.1.3",
      J="1.2.840.10008.5.1.4.1.1.13.1.4",
      Q="1.2.840.10008.5.1.4.1.1.13.1.5",
      ee="1.2.840.10008.5.1.4.1.1.14.1",
      te="1.2.840.10008.5.1.4.1.1.14.2",
      ie="1.2.840.10008.5.1.4.1.1.20",
      ne="1.2.840.10008.5.1.4.1.1.77.1.1",
      ae="1.2.840.10008.5.1.4.1.1.77.1.1.1",
      re="1.2.840.10008.5.1.4.1.1.77.1.2",
      oe="1.2.840.10008.5.1.4.1.1.77.1.2.1",
      se="1.2.840.10008.5.1.4.1.1.77.1.3",
      ce="1.2.840.10008.5.1.4.1.1.77.1.4",
      le="1.2.840.10008.5.1.4.1.1.77.1.4.1",
      ue="1.2.840.10008.5.1.4.1.1.77.1.5.1",
      de="1.2.840.10008.5.1.4.1.1.77.1.5.2",
      xe="1.2.840.10008.5.1.4.1.1.77.1.5.4",
      me="1.2.840.10008.5.1.4.1.1.77.1.6",
      ge="1.2.840.10008.5.1.4.1.1.128",
      pe="1.2.840.10008.5.1.4.1.1.130",
      fe="1.2.840.10008.5.1.4.1.1.128.1",
      Se="1.2.840.10008.5.1.4.1.1.481.1";
      var he=function(e) {
          return 1<e.getTagValue("x00280008")
      }
      ,
      ve=function(e, t) {
          var i=t[0],
          n=new I.a(t),
          a=e.getData();
          return n.setAttributes( {
              thumbImgUrl: a.thumbImg, displaySetInstanceUid: a.id, seriesDate: a.seriesDate, seriesTime: a.seriesTime, seriesInstanceUid: e.getSeriesInstanceUID(), seriesNumber: i.getTagValue("x00200011"), seriesDescription: a.seriesDesc, numImageFrames: t.length, frameRate: i.getTagValue("x00181063"), modality: i.getTagValue("x00080060"), isMultiFrame: he(i)
          }
          ),
          n.setAttribute("instanceNumber", n.getImage(0).getTagValue("x00200013")),
          n
      }
      ,
      ye=function(o) {
          var s=[];
          return o&&o.getSeriesCount()&&o.forEachSeries(function(a) {
              if(a.getInstanceCount()) {
                  var r=[];
                  if(a.forEachInstance(function(e) {
                      var t, i, n;
                      ((t=e.getTagValue("x00080016"))===T||t===D||t===C||t===w||t===P||t===R||t===O||t===E||t===A||t===q||t===N||t===M||t===V||t===L||t===F||t===k||t===B||t===_||t===G||t===U||t===j||t===W||t===H||t===$||t===Z||t===Y||t===X||t===K||t===J||t===Q||t===ee||t===te||t===ie||t===ne||t===ae||t===re||t===oe||t===se||t===ce||t===le||t===ue||t===de||t===xe||t===me||t===ge||t===pe||t===fe||t===Se||e.getTagValue("x00280010"))&&(he(e)?((i=ve(a, [e])).setAttributes( {
                          isClip: !0, studyInstanceUid: o.getStudyInstanceUID(), numImageFrames: e.getTagValue("x00280008"), instanceNumber: e.getTagValue("x00200013"), acquisitionDatetime: e.getTagValue("x0008002a")
                      }
                      ), s.push(i)):"CR"===(n=e.modality)||"MG"===n||"DX"===n?((i=ve(a, [e])).setAttributes( {
                          studyInstanceUid: o.getStudyInstanceUID(), instanceNumber: e.getTagValue("x00200013"), acquisitionDatetime: e.getTagValue("x0008002a")
                      }
                      ), s.push(i)):r.push(e))
                  }
                  ), r.length) {
                      var e=ve(a, r);
                      e.setAttribute("studyInstanceUid", o.getStudyInstanceUID()), s.push(e)
                  }
              }
          }
          ),
          s
      }
      ,
      be=i("Zmhw");
      var Ie,
      Te=i("ftGT"),
      De=i("P0NO"),
      Ce=i("zYFM"),
      we=i("tT9+"),
      Pe=function() {
          function a() {
              o()(this, a),
              this.active=!1,
              this.syncedViewports=[],
              this.synchronizer=new z.d.Synchronizer("cornerstonenewimage", z.d.stackImagePositionOffsetSynchronizer)
          }
          return c()(a, [ {
              key:"isActive", value:function() {
                  return this.active
              }
          }
          , {
              key:"activate", value:function() {
                  var e=this.getLinkableViewports();
                  this.syncViewports(e)
              }
          }
          , {
              key:"activateByViewportIndexes", value:function(e) {
                  var t=this.getViewportByIndexes(e);
                  this.syncViewports(t)
              }
          }
          , {
              key:"deactivate", value:function() {
                  if(this.isActive()) {
                      for(;
                      this.syncedViewports.length;
                      ) {
                          var e=this.syncedViewports[0];
                          this.removeViewport(e)
                      }
                      this.active=!1, m.a.deactivateCommandButton("linkStackScroll")
                  }
              }
          }
          , {
              key:"update", value:function() {
                  if(this.isActive()) {
                      var e=this.getActiveViewportElement();
                      this.isViewportSynced(e)||(this.deactivate(), this.activate())
                  }
              }
          }
          , {
              key:"syncViewports", value:function(e) {
                  var i=this, n=[];
                  this.isActive()||e.length<=1||(e.forEach(function(e, t) {
                      i.synchronizer.add(e.element), i.synchronizer.getDistances(), i.syncedViewports.push(e), n.push(e.index), i.disabledListener||(i.disabledListener=i.elementDisabledHandler(i)), e.element.addEventListener(a.ELEMENT_DISABLED_EVENT, i.disabledListener)
                  }
                  ), this.active=!0, m.a.activateCommandButton("linkStackScroll"), r.a.session.setObject("stackImagePositionOffsetSynchronizerLinkedViewports", n))
              }
          }
          , {
              key:"isViewportSynced", value:function(e) {
                  return!!this.getViewportByElement(e)
              }
          }
          , {
              key:"getActiveViewportElement", value:function() {
                  return Ce.a.getActiveViewportElement()
              }
          }
          , {
              key:"removeViewport", value:function(e) {
                  var t=this.syncedViewports.indexOf(e);
                  -1!==t&&(this.syncedViewports.splice(t, 1), this.synchronizer.remove(e.element), this.removeLinkedViewportFromSession(e), e.element.removeEventListener(a.ELEMENT_DISABLED_EVENT, this.disabledListener))
              }
          }
          , {
              key:"getViewportByElement", value:function(e) {
                  for(var t=this.syncedViewports.length, i=0;
                  i<t;
                  i++) {
                      var n=this.syncedViewports[i];
                      if(n.element===e)return n
                  }
              }
          }
          , {
              key:"removeViewportByElement", value:function(e) {
                  var t=this.getViewportByElement(e);
                  t&&this.removeViewport(t)
              }
          }
          , {
              key:"removeLinkedViewportFromSession", value:function(e) {
                  var t=r.a.session.getObject("stackImagePositionOffsetSynchronizerLinkedViewports"), i=t.indexOf(e.index);
                  -1!==i&&(t.splice(i, 1), r.a.session.setObject("stackImagePositionOffsetSynchronizerLinkedViewports", t))
              }
          }
          , {
              key:"elementDisabledHandler", value:function(t) {
                  return function(e) {
                      return t.removeViewportByElement(e.detail.element)
                  }
              }
          }
          , {
              key:"getViewportByIndexes", value:function(e) {
                  var i=[];
                  return e.forEach(function(e) {
                      var t=we.a.getViewportElement(e);
                      t&&i.push( {
                          index: e, element: t
                      }
                      )
                  }
                  ), i
              }
          }
          , {
              key:"isViewportsLinkable", value:function(e, t) {
                  var i=this.getViewportImageNormal(e), n=this.getViewportImageNormal(t);
                  if(i&&n) {
                      var a=n.angleTo(i);
                      return a<Math.PI/12||a===Math.PI
                  }
                  return!0
              }
          }
          , {
              key:"getLinkableViewports", value:function() {
                  var i=this, n=this.getActiveViewportElement(), a=[];
                  return we.a.forEachViewportElements(function(e, t) {
                      i.isViewportsLinkable(n, e)&&a.push( {
                          index: t, element: e
                      }
                      )
                  }
                  ), a
              }
          }
          , {
              key:"getViewportImageNormal", value:function(e) {
                  if(e)try {
                      var t=z.b.getEnabledElement(e);
                      if(!t.image)return;
                      var i=t.image.imageId, n=z.b.metaData.get("imagePlaneModule", i);
                      if(!n||!n.rowCosines||!n.columnCosines)return;
                      return n.rowCosines.clone().cross(n.columnCosines)
                  }
                  catch(e) {
                      var a=e.message||e;
                      r.a.log.info("stackImagePositionOffsetSynchronizer getViewportImageNormal: ".concat(a))
                  }
              }
          }
          ], [ {
              key:"ELEMENT_DISABLED_EVENT", get:function() {
                  return"cornerstoneelementdisabled.StackImagePositionOffsetSynchronizer"
              }
          }
          ]),
          a
      }
      (),
      Re=i("c3He"),
      Oe=i("aelj"),
      Ee=(i("rE2o"), i("ioFf"), i("PDtF")),
      Ae= {
          petCtFusion:function() {
              if(z.a.viewer.fusionEnabled) {
                  for(var e=z.a.store.getters.viewportsData, t=0;
                  t<e.length;
                  t++)if("PET CT FUSION"===e[t].title) {
                      e.splice(t, 1);
                      break
                  }
                  Ee.b.dispatch("setLayout", {
                      rows:1, columns:1, style: {
                          display: "grid", gridTemplateColumns: "100%", gridTemplateRows: "100%", msGridColumns: "100%", msGridRows: "100%", gridGap: "unset"
                      }
                  }
                  ),
                  Ee.b.dispatch("setGrids", [ {
                      style: {
                          display: "block", gridColumn: "1", gridRow: "1", gridColumnEnd: "auto", gridRowEnd: "auto"
                      }
                  }
                  ]),
                  z.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2),
                  z.a.viewer.fusionEnabled=!1,
                  z.a.session.setObject("activeGridCardIndex", 0),
                  z.a.session.setObject("activeSubGridIndex", 0),
                  z.a.session.setObject("activeViewport", [0, 0]);
                  var i=Ce.a.getAllEnabledElements(),
                  n=z.d.getToolState(i[0].element, "stack");
                  z.d.addToolState(i[0].element, "stack", {}
                  );
                  var a=new z.a.cornerstone.stackRenderers.OverlayRenderer(n.data[0].currentImageIdIndex, n.data[0].displaySetInstanceUid);
                  z.d.addToolState(i[0].element, "stackRenderer", a)
              }
              else {
                  Ee.b.dispatch("setLayout", {
                      rows:2, columns:2, style: {
                          display: "grid", gridTemplateColumns: "50%", gridTemplateRows: "50%", msGridColumns: "50%", msGridRows: "50%", gridGap: "unset"
                      }
                  }
                  ),
                  Ee.b.dispatch("setGrids", [ {
                      style: {
                          display: "maxOnly", gridColumn: "1", gridRow: "1", gridColumnEnd: "2", gridRowEnd: "2"
                      }
                  }
                  , {
                      style: {
                          display: "maxOnly", gridColumn: "1", gridRow: "2", gridColumnEnd: "2", gridRowEnd: "3"
                      }
                  }
                  , {
                      style: {
                          display: "maxOnly", gridColumn: "2", gridRow: "1", gridColumnEnd: "3", gridRowEnd: "3"
                      }
                  }
                  ]),
                  z.a.session.setObject("layout:updatedTime", (new Date).valueOf(), 2);
                  var r= {
                      viewportIndex: 2, title: "PET CT FUSION", studyInstanceUid: Ee.b.getters.viewportsData[0].studyInstanceUid, seriesInstanceUid: "pet.ct.fusion"
                  }
                  ;
                  Ee.b.dispatch("setViewportDataByIndex", {
                      index: 2, viewportData: r
                  }
                  ),
                  z.a.viewer.fusionEnabled=!0
              }
          }
          ,
          canDoFusion:function() {
              if(z.a.viewer.fusionEnabled)return!1;
              if(z.a.viewer.mprState.enable)return!0;
              var e=z.a.store.getters.layout;
              if(e.rows*e.columns==2) {
                  var t=z.a.store.getters.viewportsData,
                  i=[];
                  return t.length<2||(i.push(z.a.viewer.data.study.series[t[0].seriesIndex].modality), i.push(z.a.viewer.data.study.series[t[1].seriesIndex].modality), !("PT"===i[0]&&"CT"===i[1]||"CT"===i[0]&&"PT"===i[1]))
              }
              return!0
          }
          ,
          getFusionSet:function() {
              var e= {
                  imageIds:[],
                  currentImageIdIndex:0,
                  options: {
                      opacity: 1, visible: !0, name: "CT"
                  }
              }
              ,
              t= {
                  imageIds:[],
                  currentImageIdIndex:0,
                  options: {
                      opacity:.3,
                      visible:!0,
                      viewport: {
                          colormap:"hot",
                          voi: {
                              windowWidth: 63542, windowCenter: 30678
                          }
                      }
                      ,
                      name:"PET"
                  }
              }
              ;
              if(z.a.viewer.fusionEnabled) {
                  var i=z.a.store.getters.viewportsData,
                  n=[],
                  a=!0,
                  r=!1,
                  o=void 0;
                  try {
                      for(var s, c=i[Symbol.iterator]();
                      !(a=(s=c.next()).done);
                      a=!0) {
                          var l=s.value;
                          "0"!==l.viewportIndex&&0!==l.viewportIndex||n.push(l),
                          1===l.viewportIndex&&n.push(l)
                      }
                  }
                  catch(e) {
                      r=!0,
                      o=e
                  }
                  finally {
                      try {
                          a||null==c.return||c.return()
                      }
                      finally {
                          if(r)throw o
                      }
                  }
                  for(var u=0;
                  u<n.length;
                  u++) {
                      var d=n[u];
                      if("PET CT FUSION"!==d.title) {
                          var x=z.a.viewer.data.study.series[d.seriesIndex];
                          if("PT"===x.modality) {
                              var m=!0,
                              g=!1,
                              p=void 0;
                              try {
                                  for(var f, S=x.instances[Symbol.iterator]();
                                  !(m=(f=S.next()).done);
                                  m=!0) {
                                      var h=f.value,
                                      v="radiomics"===z.a.viewer.currentProduct?h.dcmImg: h.jpegImg;
                                      t.imageIds.push("dicomweb:"+v)
                                  }
                              }
                              catch(e) {
                                  g=!0,
                                  p=e
                              }
                              finally {
                                  try {
                                      m||null==S.return||S.return()
                                  }
                                  finally {
                                      if(g)throw p
                                  }
                              }
                          }
                          else if("CT"===x.modality) {
                              var y=!0,
                              b=!1,
                              I=void 0;
                              try {
                                  for(var T, D=x.instances[Symbol.iterator]();
                                  !(y=(T=D.next()).done);
                                  y=!0) {
                                      var C=T.value,
                                      w="radiomics"===z.a.viewer.currentProduct?C.dcmImg: C.jpegImg;
                                      e.imageIds.push("dicomweb:"+w)
                                  }
                              }
                              catch(e) {
                                  b=!0,
                                  I=e
                              }
                              finally {
                                  try {
                                      y||null==D.return||D.return()
                                  }
                                  finally {
                                      if(b)throw I
                                  }
                              }
                          }
                      }
                  }
              }
              if(z.a.viewer.mprState.enable) {
                  var P=z.a.viewer.data.study.series[z.a.viewer.mprState.ctViewport.seriesIndex],
                  R=!0,
                  O=!1,
                  E=void 0;
                  try {
                      for(var A, q=P.instances[Symbol.iterator]();
                      !(R=(A=q.next()).done);
                      R=!0) {
                          var N=A.value,
                          M="radiomics"===z.a.viewer.currentProduct?N.dcmImg: N.jpegImg;
                          e.imageIds.push("dicomweb:"+M)
                      }
                  }
                  catch(e) {
                      O=!0,
                      E=e
                  }
                  finally {
                      try {
                          R||null==q.return||q.return()
                      }
                      finally {
                          if(O)throw E
                      }
                  }
                  var V=z.a.viewer.data.study.series[z.a.viewer.mprState.petViewport.seriesIndex],
                  L=!0,
                  F=!1,
                  k=void 0;
                  try {
                      for(var B, _=V.instances[Symbol.iterator]();
                      !(L=(B=_.next()).done);
                      L=!0) {
                          var G=B.value,
                          U="radiomics"===z.a.viewer.currentProduct?G.dcmImg: G.jpegImg;
                          t.imageIds.push("dicomweb:"+U)
                      }
                  }
                  catch(e) {
                      F=!0,
                      k=e
                  }
                  finally {
                      try {
                          L||null==_.return||_.return()
                      }
                      finally {
                          if(F)throw k
                      }
                  }
              }
              return {
                  petStack: t, ctStack: e
              }
          }
          ,
          canDoSuvMeasure:function() {
              var e=z.a.store.getters.selectedViewportData;
              return void 0!==e&&(!!(e.title&&-1<e.title.indexOf("FUSION")||e.seriesInstanceUid&&-1<e.seriesInstanceUid.indexOf("pet"))||void 0!==e.seriesIndex&&"PT"===z.a.viewer.data.study.series[e.seriesIndex].modality)
          }
      }
      ,
      qe=i("CR6M"),
      Ne=(i("0l/t"), i("91GP"), i("MVZn")),
      Me=i.n(Ne),
      Ve=i("WIBD"),
      Le=(i("xfY5"), i("RIqP")),
      Fe=i.n(Le),
      ke=(i("f3/d"), i("LK8F"), i("sEfC")),
      Be=i.n(ke),
      _e=(i("brCV"), i("JSzz")),
      Ge=z.d.import("util/makeUnselectable"),
      Ue= {
          props:["modality",
          "imageId",
          "viewport",
          "cardIndex",
          "subGridIndex",
          "image"],
          computed:Me()( {}
          , Object(Ve.mapGetters)(["tagDisplay"]), {
              dicomTags:function() {
                  return z.a.viewer.viewportOverlaySettings[this.modality]||z.a.viewer.viewportOverlaySettings.CT
              }
              , overlayFontSize:function() {
                  return {
                      "overlay-xs": this.$ui.breakpoint.xs, "overlay-sm": this.$ui.breakpoint.sm, "overlay-md": this.$ui.breakpoint.md, "overlay-lg": this.$ui.breakpoint.lg||this.$ui.breakpoint.xl
                  }
              }
          }
          ),
          mounted:function() {
              var e=document.getElementsByClassName("dicom-tag");
              Array.prototype.forEach.call(e, function(e) {
                  Ge(e, !0)
              }
              ),
              this.tagDisplay&&z.a.session.set("tagDisplay", this.tagDisplay)
          }
          ,
          beforeDestroy:function() {}
          ,
          methods: {
              toggleTagDisplay:function() {
                  this.tagDisplay=!this.tagDisplay
              }
              ,
              isTagDisplay:function(e) {
                  return(void 0===e.visible||("function"==typeof e.visible?e.visible.call(this): e.visible))&&this.getTagValue(e.id)
              }
              ,
              getTagValue:function(e) {
                  return Oe.b.TAG_FUNCTIONS[e].call(this)
              }
              ,
              tagDisplayLeftOnly:function() {
                  return"L"===Oe.b.getTagDisplay.call(this, "side")
              }
              ,
              tagDisplayRightOnly:function() {
                  return"R"===Oe.b.getTagDisplay.call(this, "side")
              }
              ,
              tagDisplaySpecified:function() {
                  return Oe.b.getTagDisplay.call(this, "side")
              }
              ,
              listenForWindowResize:function() {
                  this.$nextTick(function() {
                      window.addEventListener("resize", this.onWindowResize)
                  }
                  )
              }
          }
      }
      ,
      ze=(i("bN/b"), i("ZpG+")),
      je=Object(ze.a)(Ue, function() {
          var t=this, e=t.$createElement, i=t._self._c||e;
          return t.tagDisplay?i("div", {
              staticClass: "image-viewer-viewport-overlay", class: t.overlayFontSize
          }
          , [!t.tagDisplaySpecified||t.tagDisplayLeftOnly?i("div", {
              staticClass: "top-left dicom-tag"
          }
          , t._l(t.dicomTags.topLeft, function(e) {
              return t.isTagDisplay(e)?i("div", {
                  key:e.id, attrs: {
                      title: e.title
                  }
              }
              , [e.label?i("span", {
                  staticClass: "dicom-tag-label"
              }
              , [t._v(t._s(e.label+": "))]):t._e(), t._v(" "), i("span", {
                  staticClass: "dicom-tag-value"
              }
              , [t._v(t._s(t.getTagValue(e.id)))]), t._v(" "), e.unit?i("span", {
                  staticClass: "dicom-tag-unit"
              }
              , [t._v(t._s(" "+e.unit))]):t._e()]):t._e()
          }
          ), 0):t._e(), t._v(" "), !t.tagDisplaySpecified||t.tagDisplayRightOnly?i("div", {
              staticClass: "top-right dicom-tag"
          }
          , t._l(t.dicomTags.topRight, function(e) {
              return t.isTagDisplay(e)?i("div", {
                  key:e.id, attrs: {
                      title: e.title
                  }
              }
              , [e.label?i("span", {
                  staticClass: "dicom-tag-label"
              }
              , [t._v(t._s(e.label+": "))]):t._e(), t._v(" "), i("span", {
                  staticClass: "dicom-tag-value"
              }
              , [t._v(t._s(t.getTagValue(e.id)))]), t._v(" "), e.unit?i("span", {
                  staticClass: "dicom-tag-unit"
              }
              , [t._v(t._s(" "+e.unit))]):t._e()]):t._e()
          }
          ), 0):t._e(), t._v(" "), !t.tagDisplaySpecified||t.tagDisplayLeftOnly?i("div", {
              staticClass: "bottom-left dicom-tag"
          }
          , t._l(t.dicomTags.bottomLeft, function(e) {
              return t.isTagDisplay(e)?i("div", {
                  key:e.id, attrs: {
                      title: e.title
                  }
              }
              , [e.label?i("span", {
                  staticClass: "dicom-tag-label"
              }
              , [t._v(t._s(e.label+": "))]):t._e(), t._v(" "), i("span", {
                  staticClass: "dicom-tag-value"
              }
              , [t._v(t._s(t.getTagValue(e.id)))]), t._v(" "), e.unit?i("span", {
                  staticClass: "dicom-tag-unit"
              }
              , [t._v(t._s(" "+e.unit))]):t._e()]):t._e()
          }
          ), 0):t._e(), t._v(" "), !t.tagDisplaySpecified||t.tagDisplayRightOnly?i("div", {
              staticClass: "bottom-right dicom-tag"
          }
          , t._l(t.dicomTags.bottomRight, function(e) {
              return t.isTagDisplay(e)?i("div", {
                  key:e.id, attrs: {
                      title: e.title
                  }
              }
              , [e.label?i("span", {
                  staticClass: "dicom-tag-label"
              }
              , [t._v(t._s(e.label+": "))]):t._e(), t._v(" "), i("span", {
                  staticClass: "dicom-tag-value"
              }
              , [t._v(t._s(t.getTagValue(e.id)))]), t._v(" "), e.unit?i("span", {
                  staticClass: "dicom-tag-unit"
              }
              , [t._v(t._s(" "+e.unit))]):t._e()]):t._e()
          }
          ), 0):t._e()]):t._e()
      }
      , [], !1, null, "14add5ae", null).exports;
      z.d.loadHandlerManager&&(z.d.loadHandlerManager.setStartLoadHandler(function(t) {
          clearTimeout(Ie), Ie=setTimeout(function() {
              var e=t.getAttribute("data-position");
              z.a.session.setObject("cornerstoneLoading:".concat(e), !0, 2), z.a.session.setObject("cornerstoneErrorLoading:".concat(e), !1, 2)
          }
          )
      }
      ), z.d.loadHandlerManager.setEndLoadHandler(function(e) {
          clearTimeout(Ie);
          var t=e.getAttribute("data-position");
          z.a.session.setObject("cornerstoneLoading:".concat(t), !1, 2), z.a.session.setObject("cornerstoneErrorLoading:".concat(t), !1, 2)
      }
      ), z.d.loadHandlerManager.setErrorLoadingHandler(function(e, t, i, n) {
          var a=e.getAttribute("data-position");
          z.a.session.setObject("cornerstoneLoading:".concat(a), !1, 2), z.a.session.setObject("cornerstoneErrorLoading:".concat(a), !0, 2), z.a.session.setObject("cornerstoneErrorDetails:".concat(a), "An error has occurred while loading image: ".concat(t))
      }
      ));
      var We= {
          props: {
              cardIndex: {
                  type: Number
              }
              ,
              subGridIndex: {
                  type: Number
              }
          }
          ,
          computed: {
              loading:function() {
                  return z.a.session.getObject("cornerstoneLoading:".concat(this.cardIndex, "_").concat(this.subGridIndex), 2)
              }
              ,
              errorLoading:function() {
                  return z.a.session.getObject("cornerstoneErrorLoading:".concat(this.cardIndex, "_").concat(this.subGridIndex))
              }
              ,
              errorDetails:function() {
                  return z.a.session.get("cornerstoneErrorDetails:".concat(this.cardIndex, "_").concat(this.subGridIndex))
              }
              ,
              percentComplete:function() {
                  var e=z.a.session.getObject("cornerstoneLoadProgress:".concat(this.cardIndex, "_").concat(this.subGridIndex), 2);
                  if(e&&100!==e)return"".concat(e, "%")
              }
          }
      }
      ,
      He=(i("YDI3"), Object(ze.a)(We, function() {
          var e=this, t=e.$createElement, i=e._self._c||t;
          return i("div", {
              directives:[ {
                  name: "show", rawName: "v-show", value: e.loading, expression: "loading"
              }
              ], staticClass:"image-viewer-loading-indicator"
          }
          , [i("div", {
              staticClass: "indicator-contents"
          }
          , [i("p", [e._v(e._s(e.percentComplete?e.$t("downloading"):e.$t("loading"))+"\n      "), i("i", {
              staticClass: "el-icon-loading"
          }
          ), e._v(" "+e._s(e.percentComplete))])]), e._v(" "), i("div", {
              directives:[ {
                  name: "show", rawName: "v-show", value: e.errorLoading, expression: "errorLoading"
              }
              ], staticClass:"indicator-contents"
          }
          , [i("h4", [e._v("Error Loading Image")]), e._v(" "), i("p", {
              staticClass: "description"
          }
          , [e._v("An error has occurred.")]), e._v(" "), i("p", {
              staticClass: "details"
          }
          , [e._v(e._s(e.errorDetails))])])])
      }
      , [], !1, null, "b54cc0ea", null).exports),
      $e= {
          props: {
              imageId: {
                  type: String
              }
              ,
              hflip: {
                  type: Boolean, default: !1
              }
              ,
              vflip: {
                  type: Boolean, default: !1
              }
              ,
              rotation: {
                  type: Number, default: 0
              }
          }
          ,
          data:function() {
              return {
                  top: "", bottom: "", left: "", right: ""
              }
          }
          ,
          mounted:function() {
              var e=this.rotation,
              t=z.b.metaData.get("imagePlaneModule", this.imageId);
              if(t&&t.rowCosines&&t.columnCosines) {
                  var i=z.d.orientation.getOrientationString(t.rowCosines),
                  n=z.d.orientation.getOrientationString(t.columnCosines),
                  a=z.d.orientation.invertOrientationString(i),
                  r=z.d.orientation.invertOrientationString(n);
                  this.top=r,
                  this.left=a,
                  this.vflip&&(this.top=z.d.orientation.invertOrientationString(this.data.top)),
                  this.hflip&&(this.left=z.d.orientation.invertOrientationString(this.data.left)),
                  90===e||-270===e?(this.top=this.left, this.left=z.d.orientation.invertOrientationString(this.top)): -90===e||270===e?(this.top=z.d.orientation.invertOrientationString(this.left), this.left=this.top): 180!==e&&-180!==e||(this.top=z.d.orientation.invertOrientationString(this.top), this.left=z.d.orientation.invertOrientationString(this.left)), this.bottom=z.d.orientation.invertOrientationString(this.top), this.right=z.d.orientation.invertOrientationString(this.left)
              }
          }
      }
      ,
      Ze=(i("HBs0"), Object(ze.a)($e, function() {
          var e=this, t=e.$createElement, i=e._self._c||t;
          return i("div", {
              staticClass: "viewport-orientation-markers"
          }
          , [i("div", {
              staticClass: "top-mid orientation-marker"
          }
          , [e._v("\n    "+e._s(e.top)+"\n  ")]), e._v(" "), i("div", {
              staticClass: "bottom-mid orientation-marker"
          }
          , [e._v("\n    "+e._s(e.bottom)+"\n  ")]), e._v(" "), i("div", {
              staticClass: "left-mid orientation-marker"
          }
          , [e._v("\n    "+e._s(e.left)+"\n  ")]), e._v(" "), i("div", {
              staticClass: "right-mid orientation-marker"
          }
          , [e._v("\n    "+e._s(e.right)+"\n  ")])])
      }
      , [], !1, null, "0df2b75e", null).exports),
      Ye= {
          props: {
              axis: {
                  type: Object, required: !1
              }
              ,
              contextMenuItems: {
                  type: Array, requred: !1
              }
          }
          ,
          watch: {
              axis:function(e) {
                  var t=e.x,
                  i=e.y,
                  n=this.$refs.contextmenu;
                  n.style.display="block",
                  n.style.left=t+"px",
                  n.style.top=i+"px",
                  document.addEventListener("mouseup", function(e) {
                      0===e.button&&(n.style.display="none")
                  }
                  , !1)
              }
          }
      }
      ,
      Xe=(i("1+8e"), Object(ze.a)(Ye, function() {
          var e=this, t=e.$createElement, i=e._self._c||t;
          return i("ul", {
              ref:"contextmenu", staticClass:"contextmenu-list-wrapper", attrs: {
                  oncontextmenu: "return false"
              }
          }
          , e._l(e.contextMenuItems, function(t) {
              return i("li", {
                  key: t.id, staticClass: "context-menu-list"
              }
              , [i("button", {
                  attrs: {
                      type: "button"
                  }
                  , on: {
                      click:function(e) {
                          return e.stopPropagation(), t.action(t.params)
                      }
                  }
              }
              , [i("span", [i("svg-icon", {
                  attrs: {
                      "icon-class": t.icon
                  }
              }
              )], 1), e._v(" "), i("span", [e._v(e._s(t.title||t.id))])])])
          }
          ), 0)
      }
      , [], !1, null, null, null).exports),
      Ke=i("pyFn"),
      Je=i("Zzk7"),
      Qe=i("/NTW"),
      et=i("U0G1"),
      tt=["click",
      z.d.EVENTS.MOUSE_DOWN,
      z.d.EVENTS.MOUSE_DOWN_ACTIVATE,
      z.d.EVENTS.MOUSE_CLICK,
      z.d.EVENTS.MOUSE_DRAG,
      z.d.EVENTS.MOUSE_UP,
      z.d.EVENTS.MOUSE_WHEEL,
      z.d.EVENTS.DOUBLE_TAP,
      z.d.EVENTS.TOUCH_PRESS,
      z.d.EVENTS.MULTI_TOUCH_START,
      z.d.EVENTS.MULTI_TOUCH_START_ACTIVE,
      z.d.EVENTS.MULTI_TOUCH_DRAG],
      it=z.a.viewer.metadataProvider,
      nt=it&&"function"==typeof it.updateMetadata;
      function at(t) {
          var e=t.study;
          if(e&&e.displaySets)if(e.displaySets.every(function(e) {
              return e.seriesInstanceUid!==t.seriesInstanceUid||(t.displaySet=e, !1)
          }
          ), -1<t.seriesInstanceUid.indexOf("fusion"))(function(c) {
              var l=this, u=c.element, d=z.a.viewerbase.advancedImageProcessing.getFusionSet();
              if(-1<c.seriesInstanceUid.indexOf("mpr")&&(d=z.a.viewerbase.mprFunction.getFusionSet(c.seriesInstanceUid)), d) {
                  var x=new z.a.cornerstone.stackRenderers.FusionRenderer(d.ctStack.currentImageIdIndex);
                  x.findImageFn=function(e, a) {
                      var t=z.b.metaData.get("imagePlaneModule", a);
                      -1<a.indexOf("mpr")&&(t=z.b.metaData.get("mprImagePlaneModule", a));
                      var r=t.imagePositionPatient[2];
                      -1<a.indexOf("Sagittal")&&(r=t.imagePositionPatient[0]), -1<a.indexOf("Coronal")&&(r=t.imagePositionPatient[1]);
                      var o=null;
                      return e.forEach(function(e) {
                          var t=z.b.metaData.get("imagePlaneModule", e);
                          if(-1<e.indexOf("mpr")&&(t=z.b.metaData.get("mprImagePlaneModule", e)), void 0===t)return!1;
                          var i=parseFloat(t.sliceThickness), n=t.imagePositionPatient[2];
                          -1<e.indexOf("Sagittal")&&(n=t.imagePositionPatient[0]), -1<a.indexOf("Coronal")&&(n=t.imagePositionPatient[1]), Math.abs(n-r)<.8*i&&(o=e)
                      }
                      ), o
                  }
                  ;
                  try {
                      z.b.getEnabledElement(u)
                  }
                  catch(e) {
                      z.b.enable(u)
                  }
                  this.imageId=d.ctStack.imageIds[d.ctStack.currentImageIdIndex], z.b.loadAndCacheImage(d.ctStack.imageIds[d.ctStack.currentImageIdIndex]).then(function(e) {
                      var t;
                      try {
                          t=z.b.getEnabledElement(u)
                      }
                      catch(e) {
                          return void z.a.log.warn("Viewport destroyed before loaded image could be displayed")
                      }
                      t.image=e, t.viewport=z.b.getDefaultViewport(t.canvas, e), z.b.displayImage(u, e), z.d.addStackStateManager(u, ["stack"]), z.d.clearToolState(u, "stack"), z.d.addToolState(u, "stack", d.ctStack), z.d.addToolState(u, "stack", d.petStack), z.d.addToolState(u, "stackRenderer", x), x.render(u), Object(Qe.a)(u), -1<c.seriesInstanceUid.indexOf("mpr")&&(z.a.mpr.mprOperateLine.active(u, c.seriesInstanceUid), u.removeEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.petOperatePosChanged), u.addEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.petOperatePosChanged)), m.a.instantiateTools(u);
                      var i=m.a.getActiveTool();
                      m.a.setActiveTool(i), u.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, l.onImageRendered), u.addEventListener(z.b.EVENTS.IMAGE_RENDERED, l.onImageRendered), l.$emit("cornerstoneElementEnabled", u), tt.forEach(function(e) {
                          u.removeEventListener(e, l.sendActivationTrigger), u.addEventListener(e, l.sendActivationTrigger)
                      }
                      ), setTimeout(function() {
                          z.a.viewer.synchronizer.stackSynchronizer="", Ce.a.toggleStackImagePositionSynchronizer()
                      }
                      , 1e3);
                      for(var n=Ce.a.getAllEnabledElements(), a=0;
                      a<2;
                      a++) {
                          var r=n[a], o=z.d.getToolState(r.element, "stackRenderer");
                          z.d.removeToolState(r.element, "stackRenderer", o.data[0]);
                          var s=z.d.getToolState(r.element, "stack");
                          z.d.removeToolState(r.element, "stack", s.data[1])
                      }
                  }
                  )
              }
          }
          ).call(this, t);
          else if(-1<t.seriesInstanceUid.indexOf("mpr")||-1<t.seriesInstanceUid.indexOf("file"))(function(a) {
              var r=this, o=a.element, s=null;
              z.a.viewer.mprState.enable&&(s=z.a.viewerbase.mprFunction.getMprSet(a.seriesInstanceUid)), z.a.viewer.ctaState.enable&&0===a.seriesInstanceUid.indexOf("mpr")&&(s=z.a.viewerbase.ctaFunction.getMprSet(a.seriesInstanceUid)), z.a.viewer.clineState.enable&&0===a.seriesInstanceUid.indexOf("file")&&(s=z.a.viewerbase.ctaFunction.getClineSet(a.seriesInstanceUid));
              try {
                  z.b.getEnabledElement(o)
              }
              catch(e) {
                  z.b.enable(o), z.a.viewer.wwwcSynchronizer.add(o)
              }
              this.imageId=s.imageIds[s.currentImageIdIndex], z.b.loadAndCacheImage(s.imageIds[s.currentImageIdIndex]).then(function(e) {
                  var t;
                  try {
                      t=z.b.getEnabledElement(o)
                  }
                  catch(e) {
                      return void z.a.log.warn("Viewport destroyed before loaded image could be displayed")
                  }
                  t.image=e, t.viewport=z.b.getDefaultViewport(t.canvas, e), z.b.displayImage(o, e), z.d.addStackStateManager(o, ["stack"]), z.d.clearToolState(o, "stack"), z.d.addToolState(o, "stack", s), z.d.addToolState(o, "stack", {}
                  );
                  var i=new z.a.cornerstone.stackRenderers.OverlayRenderer(s.currentImageIdIndex, s.displaySetInstanceUid);
                  z.d.addToolState(o, "stackRenderer", i), i.render(o), Object(Qe.a)(o), -1===a.seriesInstanceUid.indexOf("Vertical")&&-1===a.seriesInstanceUid.indexOf("fileLumen")&&-1===a.seriesInstanceUid.indexOf("fileWhole")&&z.a.mpr.mprOperateLine.active(o, a.seriesInstanceUid), m.a.instantiateTools(o);
                  var n=m.a.getActiveTool();
                  m.a.setActiveTool(n), o.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, r.onImageRendered), o.addEventListener(z.b.EVENTS.IMAGE_RENDERED, r.onImageRendered), z.a.viewer.mprState.enable&&(z.a.viewer.mprState.petMode?(o.removeEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.petOperatePosChanged), o.addEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.petOperatePosChanged)):(o.removeEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.operatePosChanged), o.addEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.mprFunction.operatePosChanged))), z.a.viewer.ctaState.enable&&-1<a.seriesInstanceUid.indexOf("mpr")&&(o.removeEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.ctaFunction.operatePosChanged), o.addEventListener("CornerstoneToolsMprOperatePositionModified", z.a.viewerbase.ctaFunction.operatePosChanged), o.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, z.a.viewerbase.ctaFunction.onImageRendered), o.addEventListener(z.b.EVENTS.IMAGE_RENDERED, z.a.viewerbase.ctaFunction.onImageRendered)), z.a.viewer.clineState.enable&&-1<a.seriesInstanceUid.indexOf("Vertical")&&(o.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, z.a.viewerbase.ctaFunction.onImageRendered), o.addEventListener(z.b.EVENTS.IMAGE_RENDERED, z.a.viewerbase.ctaFunction.onImageRendered)), r.$emit("cornerstoneElementEnabled", o)
              }
              )
          }
          ).call(this, t);
          else {
              if(!t.displaySet)return;
              (function(o) {
                  var s=this;
                  if(z.a.log.info("imageViewerViewport loadDisplaySetIntoViewport"), o.study&&o.displaySet&&o.element) {
                      var c=o.element, l=o.displaySet, u=g.a.findOrCreateStack(o.study, l);
                      u.isClip&&0<u.frameRate&&(z.a.viewer.cine.framesPerSecond=parseFloat(u.frameRate), z.a.session.set("cine:updated", Math.random()));
                      var e=u.imageIds, t=e[(u= {
                          currentImageIdIndex: 0<o.currentImageIdIndex&&o.currentImageIdIndex<e.length?o.currentImageIdIndex: 0, imageIds: e, displaySetInstanceUid: l.displaySetInstanceUid
                      }
                      ).currentImageIdIndex];
                      if(t) {
                          this.imageId=t;
                          var d="".concat(this.cardIndex, "_").concat(this.subGridIndex);
                          window.ViewportLoading["".concat(this.cardIndex, "_").concat(this.subGridIndex)]=t;
                          var i= {
                              renderer: z.a.settings.cornerstone.renderer||""
                          }
                          ;
                          try {
                              z.b.getEnabledElement(c)
                          }
                          catch(e) {
                              z.b.enable(c, i)
                          }
                          z.a.session.setObject("cornerstoneLoading:".concat(this.cardIndex, "_").concat(this.subGridIndex), !0, 2);
                          var n, x=z.d.loadHandlerManager.getEndLoadHandler(), a=z.d.loadHandlerManager.getErrorLoadingHandler();
                          z.a.viewer.data.loadedSeriesData[this.cardIndex]= {
                              displaySetInstanceUid: l.displaySetInstanceUid
                          }
                          ;
                          try {
                              n=z.a.settings.imageCacheEnabled?z.b.loadAndCacheImage(t): z.b.loadImage(t)
                          }
                          catch(e) {
                              if(z.a.log.info(e), !n)return void a(c, t, e)
                          }
                          n.then(function(e) {
                              var t;
                              try {
                                  t=z.b.getEnabledElement(c)
                              }
                              catch(e) {
                                  return void z.a.log.warn("Viewport destroyed before loaded image could be displayed")
                              }
                              if(t.image=e, t.viewport=z.b.getDefaultViewport(t.canvas, e), t.viewport.voiLUT=void 0, nt&&it.updateMetadata(e), l.images&&l.images.length) {
                                  o.viewport?z.b.displayImage(c, e, o.viewport): z.b.displayImage(c, e), Object(et.b)(z.a.viewer.wwwcPreset, c), delete window.ViewportLoading[d], z.b.resize(c, !0), x(c, e), z.d.addStackStateManager(c, ["stack", "playClip", "referenceLines"]), Object(Qe.a)(c);
                                  var i=z.b.getViewport(c);
                                  s.viewport=i, s.image=t.image, z.d.clearToolState(c, "stack"), z.d.addToolState(c, "stack", u), z.d.addToolState(c, "stack", {}
                                  );
                                  var n=new z.a.cornerstone.stackRenderers.OverlayRenderer(u.currentImageIdIndex, u.displaySetInstanceUid);
                                  z.d.addToolState(c, "stackRenderer", n), n.render(c), m.a.instantiateTools(c);
                                  var a=m.a.getActiveTool();
                                  m.a.setActiveTool(a), p.a.getInstance().prefetch(), c.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, s.onImageRendered), c.addEventListener(z.b.EVENTS.IMAGE_RENDERED, s.onImageRendered), c.removeEventListener(z.b.EVENTS.NEW_IMAGE, s.onNewImage), c.addEventListener(z.b.EVENTS.NEW_IMAGE, s.onNewImage), z.a.device.mobile()&&(c.removeEventListener(z.d.EVENTS.TOUCH_START, s.handleImageTouched), c.addEventListener(z.d.EVENTS.TOUCH_START, s.handleImageTouched), c.removeEventListener(z.d.EVENTS.MULTI_TOUCH_START, s.handleImageTouched), c.addEventListener(z.d.EVENTS.MULTI_TOUCH_START, s.handleImageTouched)), s.$emit("cornerstoneElementEnabled", c), tt.forEach(function(e) {
                                      c.removeEventListener(e, s.sendActivationTrigger), c.addEventListener(e, s.sendActivationTrigger)
                                  }
                                  );
                                  var r=z.b.metaData.get("imagePlaneModule", e.imageId);
                                  r&&r.frameOfReferenceUID&&(z.a.viewer.updateImageSynchronizer&&z.a.viewer.updateImageSynchronizer.add(c), z.a.viewer.refLinesEnabled&&z.a.viewer.updateImageSynchronizer&&z.d.setToolEnabledForElement(c, "referenceLines", {
                                      synchronizationContext: z.a.viewer.updateImageSynchronizer
                                  }
                                  ), "crosshairs"===a&&Object(Re.a)(r.frameOfReferenceUID))
                              }
                          }
                          , function(e) {
                              a(c, t, e)
                          }
                          )
                      }
                  }
                  else z.a.log.warn("loadDisplaySetIntoViewport: No Study, Series, or Element provided")
              }
              ).call(this, t)
          }
      }
      window.ViewportLoading=window.ViewportLoading= {}
      ,
      m.a.configureLoadProcess();
      var rt=[ {
          id:"delete",
          title:z.a.i18n.t("tools.delete"),
          icon:"delete",
          action:function(e) {
              var t=e.nearbyToolData,
              i=e.eventData.element;
              z.d.removeToolState(i, t.toolType, t.tool);
              var n=z.d.getToolForElement(i, t.toolType);
              n.isMultiPartTool&&(n.configuration.currentHandle=0, n.configuration.currentTool=-1, n._deactivateDraw(i)),
              z.b.updateImage(i)
          }
      }
      ],
      ot= {
          props: {
              active: {
                  type: Boolean, default: !1
              }
              ,
              hasSubGrid: {
                  type: Boolean, default: !1
              }
              ,
              study: {
                  type: Object
              }
              ,
              cardIndex: {
                  type: Number
              }
              ,
              subGridIndex: {
                  type: Number, default: 0
              }
              ,
              currentImageIdIndex: {
                  type: Number
              }
              ,
              studyInstanceUid: {
                  type: String
              }
              ,
              seriesInstanceUid: {
                  type: String
              }
              ,
              sopInstanceUid: {
                  type: String
              }
              ,
              viewportIndex: {
                  type: Number
              }
              ,
              seriesIndex: {
                  type: Number
              }
              ,
              title: {
                  type: String
              }
              ,
              handle: {
                  type: [String, Function]
              }
          }
          ,
          components: {
              ViewportOverlay: je, ViewportLoadingIndicator: He, ViewportOrientationMarkers: Ze, ContextMenu: Xe, ResizeObserver: _e.a
          }
          ,
          data:function() {
              return {
                  imageId: "", image: void 0, viewport: void 0, rotation: 0, contextMenuItems: void 0, axis: void 0, part: !0
              }
          }
          ,
          computed: {
              loadingIndicator:function() {
                  return z.a.session.getObject("cine:updated"),
                  z.a.device.mobile()?!!("standard"===z.a.session.get("browseMode")||!1)&&("toggleSeries"!==this.$store.getters.activeTabTool&&z.a.settings.ui.imageLoadingVisible&&!Ce.a.isPlaying()): z.a.settings.ui.imageLoadingVisible&&!Ce.a.isPlaying()
              }
          }
          ,
          mounted:function() {
              var e=this.$refs.element;
              e&&(this.debouncedResize=Be()(function() {
                  if(e) {
                      try {
                          z.b.getEnabledElement(e)
                      }
                      catch(e) {
                          return
                      }
                      z.b.resize(e, !0)
                  }
              }
              , 100), this.initDisplay(), z.a.eventBus.$on("cornerstoneImageRendered".concat(this.cardIndex), this.handleCornerstoneImageRendered), e.addEventListener(z.d.EVENTS.MOUSE_CLICK, this.handleOpenContextMenu), e.addEventListener(z.d.EVENTS.TOUCH_PRESS, this.handleTouchOpenContextMenu))
          }
          ,
          watch: {
              seriesInstanceUid:function() {
                  this.initDisplay()
              }
              ,
              active:function(e, t) {
                  e&&Object(Je.a)()
              }
          }
          ,
          beforeDestroy:function() {
              var e=this.$refs.element;
              m.a.removeToolsForElement(e);
              try {
                  z.b.getEnabledElement(e)&&z.d.stopClip(e)
              }
              catch(e) {
                  return
              }
              z.b.disable(e),
              e.removeEventListener(z.b.EVENTS.IMAGE_RENDERED, this.onImageRendered),
              e.removeEventListener(z.b.EVENTS.NEW_IMAGE, this.onNewImage),
              e.removeEventListener(z.d.EVENTS.MOUSE_CLICK, this.handleOpenContextMenu),
              e.removeEventListener(z.d.EVENTS.TOUCH_PRESS, this.handleTouchOpenContextMenu),
              this.$emit("cornerstoneElementRemoved", e)
          }
          ,
          methods: {
              initDisplay:function() {
                  var e= {
                      element: this.$refs.element, study: this.study, currentImageIdIndex: this.currentImageIdIndex, studyInstanceUid: this.studyInstanceUid, seriesInstanceUid: this.seriesInstanceUid, sopInstanceUid: this.sopInstanceUid
                  }
                  ;
                  this.seriesInstanceUid&&at.call(this, e)
              }
              ,
              onImageRendered:function(e) {
                  var t=e.detail,
                  i=t.viewport,
                  n=t.element,
                  a=t.image;
                  this.viewport=i,
                  this.image=a,
                  Object(et.e)(n),
                  z.a.viewer.data.loadedSeriesData[this.cardIndex]&&(z.a.viewer.data.loadedSeriesData[this.cardIndex].viewport=i),
                  z.a.viewer.clineState.enable&&(-1<a.imageId.indexOf("Lumen")||-1<a.imageId.indexOf("Whole"))&&a.index+1>a.originalNum&&(i.hflip=!0),
                  z.a.eventBus.$emit("cornerstoneImageRendered".concat(this.cardIndex), this.subGridIndex, n)
              }
              ,
              onNewImage:function(e) {
                  var t=e.detail;
                  nt&&it.updateMetadata(t.enabledElement.image),
                  this.viewport=t.viewport,
                  this.image=t.image,
                  this.imageId=t.enabledElement.image.imageId;
                  var i=e.target,
                  n=z.d.getToolState(i, "stack");
                  if(n&&n.data&&n.data.length) {
                      Object(Qe.a)(i);
                      var a=z.d.getToolState(i, "stack");
                      if(a&&a.data.length&&1<a.data[0].imageIds.length) {
                          var r=a.data[0].imageIds.indexOf(this.imageId);
                          z.a.viewer.data.loadedSeriesData[this.cardIndex].currentImageIdIndex=r
                      }
                      var o=z.b.getElementData(i, "wlPreset"),
                      s=o&&o.name;
                      Object(et.b)(s, i),
                      z.a.eventBus.$emit("cornerstoneNewImage", i)
                  }
              }
              ,
              onWindowResize:function() {
                  this.debouncedResize()
              }
              ,
              sendActivationTrigger:function(e) {
                  var t=e&&e.detail;
                  if((t&&t.element||e&&e.currentTarget)&&t) {
                      var i=z.a.session.get("activeViewport");
                      this.cardIndex===i[0]&&this.subGridIndex===i[1]||z.a.eventBus.$emit("activateViewport", this.cardIndex, this.subGridIndex)
                  }
              }
              ,
              handleCornerstoneImageRendered:function() {
                  var e=Object(Ke.a)(this.cardIndex, this.subGridIndex);
                  if(e) {
                      var t=Ce.a.getEnabledElement(e);
                      this.viewport=z.b.getViewport(e),
                      this.image=t.image
                  }
              }
              ,
              handleResize:function() {
                  this.onWindowResize()
              }
              ,
              handleOpenContextMenu:function(e) {
                  var t=e.detail;
                  2===t.event.button&&this.createDropdown(t)
              }
              ,
              handleTouchOpenContextMenu:function(e) {
                  var t=e.detail;
                  this.createDropdown(t, !0)
              }
              ,
              createDropdown:function(t) {
                  var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];
                  if(null!==t) {
                      var i=m.a.getAnnotationOrMeasurementTools(),
                      n=m.a.getNearbyToolData(this.$refs.element, t.currentPoints.canvas, i);
                      if(!e||"arrowAnnotate"!==n.toolType) {
                          var a=[];
                          n?rt.forEach(function(e) {
                              e.params= {
                                  eventData: t, nearbyToolData: n
                              }
                              , a.push(e)
                          }
                          ):a=Fe()(z.a.settings.cornerstoneContextMenu);
                          var r=t.currentPoints.client.x,
                          o=t.currentPoints.client.y;
                          this.axis= {
                              x: r, y: o
                          }
                          ,
                          this.contextMenuItems=a
                      }
                  }
              }
              ,
              handleImageTouched:function() {
                  z.a.session.setObject("nearlyTouchedTime", (new Date).valueOf(), 2)
              }
              ,
              partClick:function(e) {
                  this.part=1===e||!1,
                  this.handle(this.part)
              }
          }
      }
      ,
      st=(i("O693"), Object(ze.a)(ot, function() {
          var t=this, e=t.$createElement, i=t._self._c||e;
          return i("div", {
              staticClass: "viewport-content cornerstone"
          }
          , [t.handle?i("div", {
              staticClass: "pos-tools"
          }
          , [i("span", {
              staticClass:"lumen", class: {
                  active: t.part
              }
              , on: {
                  click:function(e) {
                      return t.partClick(1)
                  }
              }
          }
          , [t._v(t._s(t.$t("cta.partLumen")))]), t._v(" "), i("span", {
              staticClass:"whole", class: {
                  active: !t.part
              }
              , on: {
                  click:function(e) {
                      return t.partClick(2)
                  }
              }
          }
          , [t._v(t._s(t.$t("cta.partWhole")))])]):t._e(), t._v(" "), i("div", {
              ref:"element", staticClass:"image-viewer-viewport", class: {
                  active: t.active, empty: !t.seriesInstanceUid
              }
              , attrs: {
                  id: t.cardIndex+"_"+t.subGridIndex, unselectable: "on", "data-position": t.cardIndex+"_"+t.subGridIndex, oncontextmenu: "return false"
              }
          }
          ), t._v(" "), t.image?i("viewport-overlay", {
              attrs: {
                  imageId: t.imageId, viewport: t.viewport, image: t.image, modality: t.study.modality, cardIndex: t.cardIndex, subGridIndex: t.subGridIndex
              }
          }
          ):t._e(), t._v(" "), t.loadingIndicator?i("viewport-loading-indicator", {
              attrs: {
                  cardIndex: t.cardIndex, subGridIndex: t.subGridIndex
              }
          }
          ):t._e(), t._v(" "), t.imageId?i("viewport-orientation-markers", {
              attrs: {
                  imageId: t.imageId, rotation: t.rotation
              }
          }
          ):t._e(), t._v(" "), i("context-menu", {
              attrs: {
                  contextMenuItems: t.contextMenuItems, axis: t.axis
              }
          }
          ), t._v(" "), i("resize-observer", {
              on: {
                  notify: t.handleResize
              }
          }
          )], 1)
      }
      , [], !1, null, "15db713c", null).exports),
      ct=i("pmNF"),
      lt= {
          props: {
              active: {
                  type: Boolean
              }
              ,
              cardIndex: {
                  type: Number
              }
              ,
              subGridData: {
                  type: Array
              }
              ,
              viewport: {
                  type: Object
              }
          }
          ,
          components: {
              CornerstoneViewport:st,
              ImageVerticalScrollbar:function() {
                  return Promise.all([i.e("async-vendor"), i.e(3), i.e("imageVerticalScrollbar")]).then(i.bind(null, "jwdZ"))
              }
              ,
              ClineControls:function() {
                  return i.e("cineControls").then(i.bind(null, "oJD3"))
              }
              ,
              ImageHorizontalScrollbar:function() {
                  return Promise.all([i.e("async-vendor"), i.e(3), i.e("imageHorizontalScrollbar")]).then(i.bind(null, "ubj8"))
              }
              ,
              AorticChart:function() {
                  return Promise.all([i.e(6), i.e(15)]).then(i.bind(null, "mY7G"))
              }
          }
          ,
          data:function() {
              return {
                  activeSubGridIndex: 0, imageOffsetNum: void 0, imageIndex: 0, gridDropdown: !1, subGridMaxNum: [3, 3], cardWinState: "normal", row: 1, col: 1, elementEnabledCount: 0, contentHeight: null
              }
          }
          ,
          computed:Me()( {}
          , Object(Ve.mapGetters)(["studyData", "grids"]), {
              imageNum:function() {
                  if(this.studyData&&this.studyData.series&&this.viewport) {
                      if(this.viewport.title&&-1<this.viewport.title.indexOf("FUSION")) {
                          var e=r.a.viewerbase.advancedImageProcessing.getFusionSet();
                          return-1<this.viewport.seriesInstanceUid.indexOf("mpr")&&(e=r.a.viewerbase.mprFunction.getFusionSet(this.viewport.seriesInstanceUid)), e.ctStack.imageIds.length
                      }
                      if(this.viewport.title&&-1<this.viewport.title.indexOf("HYHY MPR")) {
                          if(r.a.viewer.mprState.enable)return r.a.viewerbase.mprFunction.getImageCount(this.viewport.seriesInstanceUid);
                          if(r.a.viewer.ctaState.enable)return r.a.viewerbase.ctaFunction.getImageCount(this.viewport.seriesInstanceUid)
                      }
                      else if(this.hasCPRTitle) {
                          if(r.a.viewer.clineState.enable)return r.a.viewerbase.ctaFunction.getClineImageCount(this.viewport.seriesInstanceUid)
                      }
                      else if(this.viewport.seriesIndex<this.studyData.series.length)return this.studyData.series[this.viewport.seriesIndex].instances.length
                  }
                  return 0
              }
              , hasSubGrid:function() {
                  return 1<Object.keys(this.subGridData).length
              }
              , maxCardClass:function() {
                  return"normal"===this.cardWinState?"window-maximize": "window-restore"
              }
              , clineDisplay:function() {
                  return r.a.session.getObject("displayClineControls_".concat(this.cardIndex))
              }
              , showSplit:function() {
                  return this.grids.filter(function(e) {
                      return"maxOnly"===e.style.display
                  }
                  ).length<1
              }
              , showMaxWin:function() {
                  var e=this.grids.filter(function(e) {
                      return"block"===e.style.display
                  }
                  ), t=this.grids.filter(function(e) {
                      return"maxOnly"===e.style.display
                  }
                  );
                  if(1===e.length&&r.a.session.getObject("maximizeCardSp", 2))return r.a.session.setObject("maximizeCardSp", !1, 2), this.setCardWinState("normal"), !1;
                  return 1<e.length||1<t.length||"maximize"===this.cardWinState
              }
              , showClose:function() {
                  var e=this.grids.filter(function(e) {
                      return"block"===e.style.display
                  }
                  ), t=this.grids.filter(function(e) {
                      return"maxOnly"===e.style.display
                  }
                  );
                  return 1<e.length||t.length<1&&"maximize"===this.cardWinState
              }
              , piecewiseData:function() {
                  return r.a.session.getObject("piecewiseData:".concat(this.viewport.seriesIndex), 2)
              }
              , verticalScrollbarVisible:function() {
                  return!this.isMobile&&!this.viewport.plugin&&(1<this.imageOffsetNum||void 0===this.imageOffsetNum)
              }
              , horizontalScrollbarVisible:function() {
                  return this.isMobile&&!this.viewport.plugin&&(1<this.imageOffsetNum||void 0===this.imageOffsetNum)
              }
              , headerVisible:function() {
                  return!this.isMobile
              }
              , isMobile:function() {
                  return r.a.device.mobile()
              }
              , isMobileSeries:function() {
                  return!!(this.isMobile&&1<this.imageOffsetNum)
              }
              , hasMPRTitle:function() {
                  return this.viewport.title&&-1!==this.viewport.title.indexOf("HYHY MPR")
              }
              , hasVRTitle:function() {
                  return this.viewport.title&&-1!==this.viewport.title.indexOf("HYHY VR")
              }
              , hasCPRTitle:function() {
                  return this.viewport.title&&(-1!==this.viewport.title.indexOf("VERTICAL")||-1!==this.viewport.title.indexOf("LUMEN")||-1!==this.viewport.title.indexOf("WHOLE"))
              }
          }
          ),
          watch: {
              "viewport.seriesIndex":function(e, t) {
                  e!==t&&(this.imageIndex=0, this.elementEnabledCount=0)
              }
              ,
              imageIndex:function(e) {
                  this.hasSubGrid?Ce.a.switchAllSubToImageByCardAndIndex(this.cardIndex, e, this.imageNum): Ce.a.switchToImageByCardAndIndex(this.cardIndex, e), r.a.viewer.mprState.enable&&(r.a.viewer.mprState.petMode?r.a.viewerbase.mprFunction.setPetOperatePos(this.cardIndex, e): r.a.viewerbase.mprFunction.setOperatePos(this.cardIndex, e)), r.a.viewer.ctaState.enable&&r.a.viewerbase.ctaFunction.setOperatePos(this.cardIndex, e), r.a.viewer.clineState.enable&&this.hasCPRTitle&&r.a.viewerbase.ctaFunction.setOperatePos(this.cardIndex, e)
              }
          }
          ,
          mounted:function() {
              r.a.eventBus.$on("cornerstoneImageRendered".concat(this.cardIndex), this.handleViewportImageRendered)
          }
          ,
          beforeDestroy:function() {
              this.wwwcSynchronizer&&this.wwwcSynchronizer.destroy(),
              this.panZoomSynchronizer&&this.panZoomSynchronizer.destroy(),
              r.a.eventBus.$off("cornerstoneImageRendered".concat(this.cardIndex), this.handleViewportImageRendered)
          }
          ,
          methods: {
              handleActiveViewport:function() {
                  this.$emit("selected", this.cardIndex, this.activeSubGridIndex)
              }
              ,
              handleSubGridMouseDown:function(e) {
                  this.activeSubGridIndex=e
              }
              ,
              handleViewportCardMouseWheel:function(e) {
                  var t=this.imageIndex;
                  0<e.wheelDelta?t--: t++, t=Math.min(Math.max(0, t), this.imageNum-1), this.imageIndex=t
              }
              ,
              handleCornerstoneElementEnabled:function(e) {
                  this.elementEnabledCount++,
                  this.wwwcSynchronizer&&this.wwwcSynchronizer.add(e),
                  this.panZoomSynchronizer&&this.panZoomSynchronizer.add(e),
                  this.elementEnabledCount===this.row*this.col&&(Ce.a.synchronizeStack(), this.$emit("cardElementsReady"))
              }
              ,
              handleCornerstoneElementRemoved:function(e) {
                  this.elementEnabledCount--,
                  this.wwwcSynchronizer&&this.wwwcSynchronizer.remove(e),
                  this.panZoomSynchronizer&&this.panZoomSynchronizer.remove(e),
                  this.elementEnabledCount===this.row*this.col&&this.$emit("cardElementsReady")
              }
              ,
              handleViewportImageRendered:function(e) {
                  if(this.imageOffsetNum=this.imageNum, this.hasSubGrid) {
                      var t=Object.keys(this.subGridData).length;
                      t>this.imageNum?this.imageOffsetNum=this.imageNum-(t-this.imageNum)+1: this.imageOffsetNum=this.imageNum-t+1;
                      var i=Object(ct.a)(this.cardIndex, e);
                      this.imageIndex=i.currentImageIdIndex-e<0?0: i.currentImageIdIndex-e
                  }
                  else {
                      var n=Object(ct.a)(this.cardIndex, e);
                      this.imageIndex=0<n.currentImageIdIndex?n.currentImageIdIndex: 0
                  }
              }
              ,
              handleimageScrollbarChange:function(e) {
                  this.imageIndex=e
              }
              ,
              showGridsDropdown:function() {
                  this.gridDropdown=!0
              }
              ,
              hideGridsDropdown:function() {
                  for(var e=0;
                  e<this.subGridMaxNum[0];
                  e++)for(var t=0;
                  t<this.subGridMaxNum[1];
                  t++)this.$refs.subGridDropdown.getElementsByTagName("ul")[e].getElementsByTagName("li")[t].classList.remove("active");
                  this.gridDropdown=!1
              }
              ,
              mouseEnterSplit:function(e, t) {
                  for(var i=0;
                  i<this.subGridMaxNum[0];
                  i++)for(var n=0;
                  n<this.subGridMaxNum[1];
                  n++)this.$refs.subGridDropdown.getElementsByTagName("ul")[i].getElementsByTagName("li")[n].classList.remove("active");
                  for(var a=0;
                  a<e;
                  a++)for(var r=0;
                  r<t;
                  r++)this.$refs.subGridDropdown.getElementsByTagName("ul")[a].getElementsByTagName("li")[r].classList.add("active")
              }
              ,
              splitCardGrids:function(e, t) {
                  e===this.row&&t===this.col||(1<(this.row=e)*(this.col=t)&&(this.wwwcSynchronizer||(this.wwwcSynchronizer=new z.d.Synchronizer(z.b.EVENTS.IMAGE_RENDERED, z.d.wwwcSynchronizer)), this.panZoomSynchronizer||(this.panZoomSynchronizer=new z.d.Synchronizer(z.b.EVENTS.IMAGE_RENDERED, z.d.panZoomSynchronizer))), n.a.splitCardGrids(this.cardIndex, e, t))
              }
              ,
              toggleCardWin:function() {
                  "normal"===this.cardWinState?(this.cardWinState="maximize", n.a.maximizeCardWin(this.cardIndex)): (this.cardWinState="normal", n.a.normalCardWin(this.cardIndex))
              }
              ,
              closeCard:function() {
                  n.a.closeCardWin(this.cardIndex)
              }
              ,
              setCardWinState:function(e) {
                  this.cardWinState=e
              }
          }
      }
      ,
      ut=(i("lG/8"), {
          components: {
              GridCard:Object(ze.a)(lt, function() {
                  var n=this, e=n.$createElement, a=n._self._c||e;
                  return a("div", {
                      ref:"viewportCard", staticClass:"viewport-card", class: {
                          active: n.active
                      }
                      , on: {
                          click:n.handleActiveViewport, wheel:function(e) {
                              return e.preventDefault(), n.handleViewportCardMouseWheel(e)
                          }
                      }
                  }
                  , [n.headerVisible?a("div", {
                      staticClass: "viewport-card-header"
                  }
                  , [a("div", {
                      staticClass:"viewport-card-header__title", attrs: {
                          title: n.viewport.title
                      }
                  }
                  , [n._v(n._s(n.viewport.title))]), n._v(" "), a("div", {
                      staticClass: "viewport-card-header__tools"
                  }
                  , [n.showSplit?a("span", {
                      staticClass:"tool-split", on: {
                          mouseleave: n.hideGridsDropdown, mouseenter: n.showGridsDropdown
                      }
                  }
                  , [a("svg-icon", {
                      attrs: {
                          "icon-class": "grid", className: "tool-split"
                      }
                  }
                  ), n._v(" "), a("div", {
                      directives:[ {
                          name: "show", rawName: "v-show", value: n.gridDropdown, expression: "gridDropdown"
                      }
                      ], ref:"subGridDropdown", staticClass:"split-subgrid-dropdown"
                  }
                  , n._l(n.subGridMaxNum[0], function(i) {
                      return a("ul", {
                          key: i
                      }
                      , n._l(n.subGridMaxNum[1], function(t) {
                          return a("li", {
                              key:t, on: {
                                  mouseenter:function(e) {
                                      return n.mouseEnterSplit(i, t)
                                  }
                                  , click:function(e) {
                                      return n.splitCardGrids(i, t)
                                  }
                              }
                          }
                          )
                      }
                      ), 0)
                  }
                  ), 0)], 1):n._e(), n._v(" "), n.showMaxWin?a("span", {
                      staticClass:"tool-max", on: {
                          click: n.toggleCardWin
                      }
                  }
                  , [a("svg-icon", {
                      attrs: {
                          "icon-class": n.maxCardClass, className: "tool-max"
                      }
                  }
                  )], 1):n._e(), n._v(" "), n.showClose?a("span", {
                      staticClass:"tool-close", on: {
                          click: n.closeCard
                      }
                  }
                  , [a("svg-icon", {
                      attrs: {
                          "icon-class": "window-close", className: "tool-close"
                      }
                  }
                  )], 1):n._e()])]):n._e(), n._v(" "), a("div", {
                      staticClass:"viewport-card-content", class: {
                          "has-vertical-scrollbar": n.verticalScrollbarVisible, "has-horizontal-scrollbar": n.horizontalScrollbarVisible, "has-header": n.headerVisible
                      }
                  }
                  , [n.hasSubGrid?n._l(n.subGridData, function(e, t) {
                      return a("div", {
                          key:t, staticClass:"viewport-card-sub-grid", class: {
                              active: n.activeSubGridIndex===t
                          }
                          , style:e.style, on: {
                              mousedown:function(e) {
                                  return n.handleSubGridMouseDown(t)
                              }
                          }
                      }
                      , [n.viewport.plugin?a("div", {
                          staticClass: "viewport-plugin-content"
                      }
                      , [a(n.viewport.plugin, n._b( {
                          tag: "component"
                      }
                      , "component", n.viewport.pluginProps, !1))], 1):[n.imageIndex+t<n.imageNum?a("cornerstone-viewport", n._b( {
                          attrs: {
                              study: n.studyData, currentImageIdIndex: n.imageIndex+t, cardIndex: n.cardIndex, active: n.activeSubGridIndex===t, subGridIndex: e.index, hasSubGrid: n.hasSubGrid
                          }
                          , on: {
                              cornerstoneElementEnabled: n.handleCornerstoneElementEnabled, cornerstoneElementRemoved: n.handleCornerstoneElementRemoved
                          }
                      }
                      , "cornerstone-viewport", n.viewport, !1)):n._e()]], 2)
                  }
                  ):[n.viewport.plugin?a("div", {
                      staticClass: "viewport-plugin-content"
                  }
                  , [a(n.viewport.plugin, n._b( {
                      tag: "component"
                  }
                  , "component", n.viewport.pluginProps, !1))], 1):[a("cornerstone-viewport", n._b( {
                      attrs: {
                          currentImageIdIndex: n.imageIndex, study: n.studyData, cardIndex: n.cardIndex, active: n.active, hasSubGrid: n.hasSubGrid
                      }
                      , on: {
                          cornerstoneElementEnabled: n.handleCornerstoneElementEnabled
                      }
                  }
                  , "cornerstone-viewport", n.viewport, !1))]]], 2), n._v(" "), n.verticalScrollbarVisible?a("div", {
                      staticClass: "viewport-card-scrollbar"
                  }
                  , [a("image-vertical-scrollbar", {
                      attrs: {
                          imageIndex: n.imageIndex, imageNum: n.imageNum, piecewiseData: n.piecewiseData
                      }
                      , on: {
                          imageScrollbarChange: n.handleimageScrollbarChange
                      }
                  }
                  )], 1):n._e(), n._v(" "), n.horizontalScrollbarVisible?a("div", {
                      staticClass: "viewport-card-scrollbar-mobile"
                  }
                  , [a("image-horizontal-scrollbar", {
                      attrs: {
                          imageIndex: n.imageIndex, imageNum: n.imageNum, piecewiseData: n.piecewiseData
                      }
                      , on: {
                          imageScrollbarChange: n.handleimageScrollbarChange
                      }
                  }
                  )], 1):n._e(), n._v(" "), n.clineDisplay?a("cline-controls", {
                      class: {
                          mobile: n.isMobile
                      }
                      , attrs: {
                          cardIndex: n.cardIndex, classes: "viewport-card-cline-panel"
                      }
                  }
                  ):n._e()], 1)
              }
              , [], !1, null, "55884458", null).exports
          }
          , data:function() {
              return {
                  activeCardIndex: 0, cardElementsReadyCount: 0
              }
          }
          , computed:Me()( {}
          , Object(Ve.mapGetters)(["studyData", "viewportsData", "layout", "grids"]), {
              cards:function() {
                  if(r.a.session.get("layout:updatedTime"), 0===this.viewportsData.length)return this.viewportsData;
                  var e;
                  e=0===this.grids.length?this.layout.rows*this.layout.columns: this.grids.length;
                  var t=Object.assign([], this.viewportsData), i=this.viewportsData.length;
                  if(i<e) {
                      for(var n=e-i, a=0;
                      a<n;
                      a++)t.push( {
                          viewportIndex: i+a+1
                      }
                      );
                      return t
                  }
                  return e<i?t.slice(0, e):t
              }
              , layoutStyle:function() {
                  return this.$ui.breakpoint.xsOnly? {
                      display: "block"
                  }
                  :this.layout.style
              }
          }
          ), watch: {
              cards:function(e, t) {
                  var i=e.filter(function(e) {
                      if(e)return null!==e.seriesIndex
                  }
                  ), n=t.filter(function(e) {
                      if(e)return null!==e.seriesIndex
                  }
                  );
                  i.length>n.length&&(this.cardElementsReadyCount=n.length), setTimeout(function() {
                      Object(Je.a)(), Ce.a.synchronizeStack()
                  }
                  , 100)
              }
              , activeCardIndex:function() {
                  Object(Je.a)()
              }
          }
          , mounted:function() {
              r.a.eventBus.$on("activateViewport", this.handleCardSelect)
          }
          , beforeDestroy:function() {
              r.a.eventBus.$off("activateViewport", this.handleCardSelect)
          }
          , methods: {
              handleCardElementsReady:function() {
                  this.cardElementsReadyCount++, r.a.session.setObject("layout:cardElementsReady", (new Date).valueOf(), 2)
              }
              , handleCardSelect:function(e) {
                  var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: 0;
                  Ce.a.setActiveViewportPosition(e, t), this.$store.dispatch("setSelectedDisplaySetIndex", e), this.activeCardIndex=e, r.a.store.dispatch("setSelectedViewportData", {
                      index: e, viewportData: this.viewportsData[e]
                  }
                  ), e>=this.viewportsData.length||(this.viewportsData[e].plugin?r.a.session.set("tools:activeToolContext", this.viewportsData[e].toolsContext, 2):(r.a.session.set("tools:activeToolContext", "viewer", 2), r.a.viewer.mprState.enable||p.a.getInstance().prefetch()))
              }
              , imageViewerCardStyle:function(e) {
                  if(this.$ui.breakpoint.xsOnly)return {
                      width: "100%", height: "100%"
                  }
                  ;
                  if(0<this.grids.length) {
                      var t="none"===this.grids[e].style.display?"none": "block", i="display:".concat(t, ";grid-area:").concat(this.grids[e].style.gridRow, " / ").concat(this.grids[e].style.gridColumn, " / ").concat(this.grids[e].style.gridRowEnd, " / ").concat(this.grids[e].style.gridColumnEnd, ";");
                      return i+="-ms-grid-area:".concat(this.grids[e].style.gridRow, " / ").concat(this.grids[e].style.gridColumn, " / ").concat(this.grids[e].style.gridRowEnd, " / ").concat(this.grids[e].style.gridColumnEnd, ";"), i+="-webkit-grid-area:".concat(this.grids[e].style.gridRow, " / ").concat(this.grids[e].style.gridColumn, " / ").concat(this.grids[e].style.gridRowEnd, " / ").concat(this.grids[e].style.gridColumnEnd, ";"), i+="-moz-grid-area:".concat(this.grids[e].style.gridRow, " / ").concat(this.grids[e].style.gridColumn, " / ").concat(this.grids[e].style.gridRowEnd, " / ").concat(this.grids[e].style.gridColumnEnd, ";")
                  }
                  return"grid"===this.layout.style.display? {}
                  : {
                      width: 100/this.layout.columns+"%", height: 100/this.layout.rows+"%"
                  }
              }
              , subGridData:function(e) {
                  if(0<this.grids.length) {
                      var t=[], i=this.grids[e].subGridLayout;
                      if(i)for(var n=i.rows*i.columns, a=0;
                      a<n;
                      a++)t.push( {
                          index:a, style: {
                              width: 100/i.columns+"%", height: 100/i.rows+"%"
                          }
                      }
                      );
                      return t
                  }
                  return {}
              }
          }
      }
      ),
      dt=(i("36pA"), Object(ze.a)(ut, function() {
          var i=this, e=i.$createElement, n=i._self._c||e;
          return n("div", {
              staticClass:"viewport-container", style:i.layoutStyle, attrs: {
                  id: "imageViewerViewports"
              }
          }
          , i._l(i.cards, function(e, t) {
              return n("grid-card", {
                  key:t, style:i.imageViewerCardStyle(t), attrs: {
                      active: i.activeCardIndex===t, cardIndex: t, viewport: e, subGridData: i.subGridData(t)
                  }
                  , on: {
                      cardElementsReady: i.handleCardElementsReady, selected: i.handleCardSelect
                  }
              }
              )
          }
          ), 1)
      }
      , [], !1, null, "3b903f1d", null).exports),
      xt=i("J2m7"),
      mt=i.n(xt),
      gt=i("0KnP"),
      pt=i("n0V9"),
      ft= {
          name:"ToolbarItem",
          props: {
              contexts: {
                  type: Array
              }
              ,
              toolbarItemClass: {
                  type: [String, Object]
              }
              ,
              arrowUp: {
                  type: Boolean, default: !1
              }
              ,
              separator: {
                  type: Boolean
              }
              ,
              component: {
                  type: [Object, Function]
              }
              ,
              componentProps: {
                  type: Object
              }
              ,
              commandButton: {
                  type: Boolean, default: !0
              }
              ,
              tabButton: {
                  type: Boolean, default: !1
              }
              ,
              id: {
                  type: String
              }
              ,
              title: {
                  type: [String, Function]
              }
              ,
              hotkey: {
                  type: String
              }
              ,
              mouse: {
                  type: String
              }
              ,
              showTitle: {
                  type: Boolean
              }
              ,
              classes: {
                  type: [String, Object]
              }
              ,
              icon: {
                  type: [String, Function]
              }
              ,
              iconClasses: {
                  type: [String, Object]
              }
              ,
              subTools: {
                  type: Array
              }
              ,
              active: {
                  type: Function
              }
              ,
              disabled: {
                  type: [Boolean, Function]
              }
              ,
              level: {
                  type: Number
              }
              ,
              visible: {
                  type: [Boolean, Function], default: !0
              }
          }
          ,
          components: {
              LayoutButton: pt.default
          }
          ,
          data:function() {
              return {
                  showDropdown: !1
              }
          }
          ,
          computed:Me()( {}
          , Object(Ve.mapGetters)(["activeTool", "activeCommandButtons", "activeCommandChanged", "grids"]), {
              isShow:function() {
                  var e="function"==typeof this.visible?this.visible(): this.visible, t=gt.a.session.get("tools:activeToolContext", 2, "viewer");
                  return!!this.contexts&&(-1<this.contexts.indexOf(t)&&e)
              }
              , iconName:function() {
                  return"function"==typeof this.icon?this.icon(): this.icon
              }
              , displayTitle:function() {
                  var e="function"==typeof this.title?this.title(): this.title;
                  return this.hotkey?"".concat(e, " (").concat(this.hotkey, ")"): e
              }
              , mouseIcon:function() {
                  return this.mouse?"mouse-".concat(this.mouse, "-button"): ""
              }
              , isActive:function() {
                  var t=this, e=this.activeCommandChanged, i=this.id===this.activeTool, n=this.subTools&&mt()(this.subTools, function(e) {
                      return e.id===t.activeTool
                  }
                  ), a="function"==typeof this.active&&this.active();
                  if(e) {
                      var r=-1!==this.activeCommandButtons.indexOf(this.id);
                      return a||i||n||r
                  }
                  return a||i||n
              }
              , isDisable:function() {
                  gt.a.session.get("activeViewport"), gt.a.session.get("layout:updatedTime");
                  var e=gt.a.commands.isDisabled(this.id), t="function"==typeof this.disabled?this.disabled(): this.disabled;
                  return e||t
              }
              , groupedSubTools:function() {
                  if(this.subTools) {
                      var e= {
                          defaultGroup: []
                      }
                      , t=!0, i=!1, n=void 0;
                      try {
                          for(var a, r=this.subTools[Symbol.iterator]();
                          !(t=(a=r.next()).done);
                          t=!0) {
                              var o=a.value;
                              o.group?e[o.group]?e[o.group].push(o): e[o.group]=[o]: e.defaultGroup.push(o)
                          }
                      }
                      catch(e) {
                          i=!0, n=e
                      }
                      finally {
                          try {
                              t||null==r.return||r.return()
                          }
                          finally {
                              if(i)throw n
                          }
                      }
                      return 0===e.defaultGroup.length&&delete e.defaultGroup, e
                  }
                  return null
              }
              , isMobile:function() {
                  return gt.a.device.mobile()
              }
              , mobileImageTouched:function() {
                  return gt.a.session.get("nearlyTouchedTime", 2)
              }
          }
          ),
          methods: {
              getToolName:function(e) {
                  return"function"==typeof e?e(): e
              }
              ,
              handleToolClick:function() {
                  this.commandButton?gt.a.commands.run(this.id): this.subTools&&this.isMobile&&(this.showDropdown=!this.showDropdown), this.tabButton&&(this.$store.getters.activeTabTool===this.id?this.$store.dispatch("setActiveTabTool", ""): this.$store.dispatch("setActiveTabTool", this.id)), this.$emit("tool-click")
              }
              ,
              iconString:function(e) {
                  return"function"==typeof e?e(): e
              }
              ,
              showSubTools:function() {
                  this.showDropdown=!this.showDropdown
              }
          }
          ,
          watch: {
              mobileImageTouched:function() {
                  this.showDropdown&&(this.showDropdown=!1)
              }
          }
          ,
          mounted:function() {
              var e=this;
              gt.a.eventBus.$on("showSubToolsMenu", function() {
                  e.showDropdown=!e.showDropdown
              }
              )
          }
      }
      ,
      St=(i("PKl8"), Object(ze.a)(ft, function() {
          var i=this, e=i.$createElement, n=i._self._c||e;
          return i.isShow?n("li", {
              staticClass:"toolbar-item", class:[i.toolbarItemClass, {
                  "separator-wrap": i.separator
              }
              ]
          }
          , [i.separator?[n("hr", {
              staticClass: "separator"
          }
          )]:[i.component?n(i.component, i._b( {
              tag:"component", attrs: {
                  title: i.title, classes: i.classes, icon: i.iconName, "icon-classes": i.iconClasses
              }
          }
          , "component", i.componentProps, !1)):n("div", {
              staticClass:"toolbar-button", on: {
                  mouseleave:function(e) {
                      i.showDropdown=!1
                  }
                  , touchleave:function(e) {
                      i.showDropdown=!1
                  }
              }
          }
          , [n("div", {
              class:[i.classes, {
                  active: i.isActive, disabled: i.isDisable
              }
              ], attrs: {
                  title: i.displayTitle
              }
              , on: {
                  click: i.handleToolClick
              }
          }
          , [i._t("default", [[n("svg-icon", {
              attrs: {
                  "icon-class": i.iconName, className: i.iconClasses
              }
          }
          ), i._v(" "), i.mouse&&i.isActive?n("svg-icon", {
              attrs: {
                  "icon-class": i.mouseIcon, className: "mouse-button"
              }
          }
          ):i._e()]])], 2), i._v(" "), !i.isMobile&&i.subTools?n("div", {
              staticClass:"toolbar-button-arrow", class: {
                  up: i.arrowUp
              }
              , on: {
                  click: i.showSubTools
              }
          }
          , [n("svg-icon", {
              attrs: {
                  "icon-class": "sub-toolbar-arrow"
              }
          }
          )], 1):i._e(), i._v(" "), i.isMobile&&1==i.level?n("div", {
              staticClass:"tool-title", class: {
                  active: i.isActive
              }
          }
          , [i._v(i._s(i.displayTitle))]):i._e(), i._v(" "), i.subTools?n("div", {
              staticClass:"tool-dropdown", class: {
                  "is-show": i.showDropdown, up: i.arrowUp
              }
              , on: {
                  mouseleave:function(e) {
                      i.showDropdown=!1
                  }
                  , touchleave:function(e) {
                      i.showDropdown=!1
                  }
              }
          }
          , i._l(i.groupedSubTools, function(e, t) {
              return n("ul", {
                  key: t, staticClass: "sub-tools-group"
              }
              , i._l(e, function(e) {
                  return n("toolbar-item", i._b( {
                      key:e.id, on: {
                          "tool-click":function(e) {
                              i.showDropdown=!1
                          }
                      }
                  }
                  , "toolbar-item", e, !1), [[n("span", {
                      staticClass: "sub-tools-button__icon"
                  }
                  , [i.iconString(e.icon)?n("svg-icon", {
                      attrs: {
                          "icon-class": i.iconString(e.icon), className: e.iconClasses
                      }
                  }
                  ):i._e()], 1), i._v(" "), n("span", {
                      staticClass: "sub-tools-button__title"
                  }
                  , [i._v(i._s(i.getToolName(e.title)))]), i._v(" "), n("span", {
                      staticClass: "sub-tools-button__hotkey"
                  }
                  , [i._v(i._s(e.hotkey))])]], 2)
              }
              ), 1)
          }
          ), 0):i._e()])]], 2):i._e()
      }
      , [], !1, null, "494facc3", null).exports),
      ht= {
          props: {
              toolbarClass: {
                  type: [String, Object]
              }
              ,
              toolbarItemClass: {
                  type: [String, Object]
              }
              ,
              toolbarItemArrowUp: {
                  type: Boolean, default: !1
              }
              ,
              toolbarItems: {
                  type: Array
              }
          }
          ,
          components: {
              ToolbarItem: St
          }
      }
      ,
      vt=Object(ze.a)(ht, function() {
          var i=this, e=i.$createElement, n=i._self._c||e;
          return n("ul", {
              staticClass: "toolbar noselect", class: i.toolbarClass
          }
          , [i._t("default"), i._v(" "), i._l(i.toolbarItems, function(e, t) {
              return n("toolbar-item", i._b( {
                  key:t, attrs: {
                      toolbarItemClass: i.toolbarItemClass, arrowUp: i.toolbarItemArrowUp
                  }
              }
              , "toolbar-item", e, !1))
          }
          )], 2)
      }
      , [], !1, null, null, null).exports,
      yt=i("YE5B");
      i.d(t, "f", function() {
          return bt
      }
      ),
      i.d(t, "a", function() {
          return dt
      }
      ),
      i.d(t, "e", function() {
          return vt
      }
      ),
      i.d(t, "c", function() {
          return yt.default
      }
      ),
      i.d(t, "b", function() {
          return r.a
      }
      ),
      i.d(t, "g", function() {
          return m.a
      }
      ),
      i.d(t, "d", function() {
          return p.a
      }
      );
      var bt= {}
      ;
      bt.toolManager=m.a,
      bt.stackManager=g.a,
      bt.getDisplaySets=ye,
      bt.getStudyMetadata=function(e) {
          var t=e;
          return!e||t instanceof be.a||(t=new r.a.metadata.StudyMetadata(e, e.studyInstanceUid)),
          t
      }
      ,
      bt.StudyPrefetcher=p.a,
      bt.DICOMTagDescriptions=Te.a,
      bt.viewportUtils=Ce.a,
      bt.viewportOverlayUtils=Oe.b,
      bt.advancedImageProcessing=Ae,
      bt.ctaFunction=qe.a,
      bt.StudyLoadingListener=b,
      bt.StackImagePositionOffsetSynchronizer=Pe,
      bt.updateCrosshairsSynchronizer=Re.a,
      r.a.viewerbase=bt,
      r.a.viewer.loadIndicatorDelay=200,
      r.a.viewer.refLinesEnabled=!0,
      r.a.viewer.isPlaying= {}
      ,
      r.a.viewer.cine= {
          framesPerSecond: 24, loop: !0
      }
      ,
      r.a.viewer.fusionEnabled=!1,
      r.a.viewer.mprState= {
          enable: !1, reverse: !1
      }
      ,
      r.a.viewer.ctaState= {
          enable: !1, mode: "abdominalAortic", reverse: !1
      }
      ,
      r.a.viewer.isTouchDevice=De.a;
      ["tools",
      "cine",
      "layout",
      "stackProgress",
      "cornerstoneThumbnailLoadProgress",
      "cornerstoneLoadProgress",
      "cornerstoneLoading",
      "cornerstoneErrorLoading",
      "cornerstoneErrorDetails",
      "piecewiseData"].forEach(function(e) {
          return r.a.session.registerNamespace(e)
      }
      )
  }
  ,
  wNvN:function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
          return n
      }
      );
      i("rGqo"),
      i("yt8O"),
      i("RW0V"),
      i("V+eJ");
      var a=i("f9UM");
      function n(e, t) {
          if(!a.a.viewer.data.study||!a.a.viewer.data.study.series)return!1;
          if(!t) {
              if(!a.a.store.getters.selectedViewportData)return!1;
              var i=a.a.viewer.data.study.series[a.a.store.getters.selectedViewportData.seriesIndex];
              if(!i)return!1;
              t=i.modality
          }
          var n=a.a.viewer.wlPresets[t];
          return!!n&&(-1<Object.keys(n).indexOf(e)||void 0)
      }
  }
  ,
  wVEA:function(e, t, i) {
      "use strict";
      var n=i("Rsbj");
      t.a=function() {
          Object(n.b)(function() {
              return i.e("psudoColorDialog").then(i.bind(null, "/RJQ"))
          }
          )
      }
  }
  ,
  y0Jn:function(e, t, i) {}
  ,
  zYFM:function(e, t, i) {
      "use strict";
      i("yt8O"),
      i("XfO3"),
      i("V+eJ"),
      i("91GP"),
      i("rGqo"),
      i("8+KV"),
      i("VRzm");
      var n=i("ijCd"),
      a=i.n(n),
      r=i("+c4W"),
      o=i.n(r),
      s=i("3WF5"),
      c=i.n(s),
      l=i("TP7S"),
      u=i.n(l),
      d=i("hZHs"),
      x=i("uMz5"),
      m=i("/NTW"),
      g= {}
      ,
      p=i("tT9+"),
      f=i("Zzk7"),
      S=i("SW4N");
      i.d(t, "b", function() {
          return O
      }
      );
      var h=d.d.import("util/scrollToIndex"),
      v=function() {
          return {
              cardIndex: d.a.session.getObject("activeGridCardIndex"), subGridIndex: d.a.session.getObject("activeSubGridIndex")
          }
      }
      ,
      y=function(e) {
          var t;
          try {
              t=d.b.getEnabledElement(e)
          }
          catch(e) {
              d.a.log.warn(e)
          }
          return t
      }
      ,
      b=function() {
          var e=v(),
          t=e.cardIndex,
          i=e.subGridIndex;
          return Object(p.f)(t, i)
      }
      ,
      I=function() {
          var e=v().cardIndex;
          return Object(p.f)(e, 0)
      }
      ,
      T=function() {
          var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],
          t=v(),
          i=t.cardIndex,
          n=t.subGridIndex;
          return e?Object(p.e)(i): -1===n?Object(p.e)(i): [b()]
      }
      ,
      D=function(e) {
          var t=d.b.getEnabledElement(e);
          if(!1===t.fitToWindow) {
              var i=t.image.imageId,
              n=d.b.metaData.get("instance", i);
              t.viewport=d.b.getDefaultViewport(t.canvas, t.image);
              var a=function(e, t, i) {
                  var n=e.sopClassUid;
                  if(g[n])return g[n](e, t, i)
              }
              (n, t, i);
              d.b.setViewport(e, a)
          }
          else {
              var r=d.b.getActiveLayer(e);
              if(r) {
                  var o=r.image,
                  s=d.b.getDefaultViewport(t.canvas, o);
                  s.voiLUT=void 0,
                  s.modalityLUT=void 0,
                  d.b.setViewport(e, s)
              }
              else t.viewport=d.b.getDefaultViewport(t.canvas, t.image),
              t.viewport.voiLUT=void 0,
              t.viewport.modalityLUT=void 0;
              d.b.updateImage(e)
          }
      }
      ,
      C=function(e) {
          e||(e=I()),
          e&&(P(), w()?d.d.stopClip(e): (R(), d.d.playClip(e, d.a.viewer.cine.framesPerSecond)), d.a.session.setObject("cine:updated", Math.random(), 2))
      }
      ,
      w=function(e) {
          if(d.a.session.get("cine:updated"), d.a.session.get("layout:updatedTime"), e||(e=I()), e&&e.querySelectorAll("canvas").length) {
              var t=d.d.getToolState(e, "playClip");
              if(!t)return!1;
              var i=t.data[0];
              return!!i&&!u()(i.intervalId)
          }
      }
      ,
      P=function() {
          d.a.session.get("activeViewport"),
          d.a.session.get("layout:updatedTime");
          var e=b();
          if(!e||!e.querySelectorAll("canvas").length)return!1;
          var t=d.d.getToolState(e, "stack");
          if(!t||!t.data||!t.data.length)return!1;
          var i=t.data[0];
          return 1!==(i.imageIds&&i.imageIds.length?i.imageIds.length: 1)
      }
      ,
      R=function() {
          Object(p.c)(function(e) {
              d.d.stopClip(e)
          }
          )
      }
      ;
      function O() {
          var e=b();
          e&&e.querySelectorAll("canvas").length&&d.d.stopClip(e)
      }
      var E=function(e) {
          d.a.viewer.refLinesEnabled=e
      }
      ,
      A=function() {
          return d.a.viewer.refLinesEnabled
      }
      ,
      q=function(e) {
          return-1<d.b.getEnabledElement(e).image.imageId.indexOf("mpr")
      }
      ,
      N=function() {
          for(var e=[], t=d.a.viewer.data.study.displaySets, i=d.a.store.getters.grids, n=d.a.store.getters.viewportsData, a=0;
          a<i.length;
          a++) {
              if(a<n.length)t[n[a].seriesIndex]&&e.push(t[n[a].seriesIndex])
          }
          S.a.getInstance().prefetchDisplaySets(e)
      }
      ;
      window.addEventListener("cornerstonetoolsclipstopped", function() {
          d.a.session.set("cine:updated", Math.random())
      }
      );
      var M= {
          getActiveViewportPosition:v,
          setActiveViewportPosition:function(e) {
              var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]: 0;
              d.a.session.setObject("activeGridCardIndex", e),
              d.a.session.setObject("activeSubGridIndex", t),
              d.a.session.setObject("activeViewport", [e, t])
          }
          ,
          getEnabledElementForActiveElement:function() {
              var e=b();
              return e?y(e): null
          }
          ,
          getEnabledElement:y,
          getActiveViewportElement:b,
          getActiveCardDom:function() {
              var e=v().cardIndex;
              return null==e&&(e=0),
              document.getElementsByClassName("viewport-card")[e]
          }
          ,
          getActiveCardFirstViewportElement:I,
          isActiveViewportEmpty:function() {
              var e=b();
              return!e||e.classList.contains("empty")
          }
          ,
          zoomIn:function() {
              var e=b();
              if(e) {
                  var t=d.b.getViewport(e);
                  t.scale=Math.min(t.scale+.15, 10),
                  d.b.setViewport(e, t)
              }
          }
          ,
          zoomOut:function() {
              var e=b();
              if(e) {
                  var t=d.b.getViewport(e);
                  t.scale=Math.max(t.scale-.15, .05),
                  d.b.setViewport(e, t)
              }
          }
          ,
          zoomToFit:function() {
              var e=b();
              e&&d.b.fitToWindow(e)
          }
          ,
          zoomScale:function(e) {
              var t=b();
              if(t) {
                  var i=d.b.getViewport(t);
                  i.scale=e,
                  d.b.setViewport(t, i)
              }
          }
          ,
          rotateL:function() {
              var e=T();
              e&&0!==e.length&&Array.prototype.forEach.call(e, function(e) {
                  var t=d.b.getViewport(e);
                  t.rotation-=90, d.b.setViewport(e, t), Object(m.a)(e, t)
              }
              )
          }
          ,
          rotateR:function() {
              var e=T();
              e&&0!==e.length&&Array.prototype.forEach.call(e, function(e) {
                  var t=d.b.getViewport(e);
                  t.rotation+=90, d.b.setViewport(e, t), Object(m.a)(e, t)
              }
              )
          }
          ,
          invert:function() {
              var e=T();
              e&&0!==e.length&&Array.prototype.forEach.call(e, function(e) {
                  var t=d.b.getViewport(e);
                  t.invert=!1===t.invert, d.b.setViewport(e, t)
              }
              )
          }
          ,
          flipV:function() {
              var e=T();
              e&&0!==e.length&&Array.prototype.forEach.call(e, function(e) {
                  var t=d.b.getViewport(e);
                  t.vflip=!1===t.vflip, d.b.setViewport(e, t), Object(m.a)(e, t)
              }
              )
          }
          ,
          flipH:function() {
              var e=T();
              e&&0!==e.length&&Array.prototype.forEach.call(e, function(e) {
                  var t=d.b.getViewport(e);
                  t.hflip=!1===t.hflip, d.b.setViewport(e, t), Object(m.a)(e, t)
              }
              )
          }
          ,
          resetViewport:function() {
              var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]: null;
              if(null===e) {
                  var t=T();
                  if(!t||0===t.length)return;
                  Array.prototype.forEach.call(t, function(e) {
                      D(e)
                  }
                  )
              }
              else if("all"===e)Object(p.d)(function(e) {
                  D(e)
              }
              );
              else {
                  var i=Object(p.e)(e);
                  if(!i||0===i.length)return;
                  Array.prototype.forEach.call(i, function(e) {
                      D(e)
                  }
                  )
              }
          }
          ,
          clearTools:function() {
              var e=T(!1);
              e&&0!==e.length&&(Array.prototype.forEach.call(e, function(e) {
                  var t=d.d.globalImageIdSpecificToolStateManager.saveToolState(), i=d.b.getEnabledElement(e);
                  i.image&&!1!==t.hasOwnProperty(i.image.imageId)&&(t[i.image.imageId]=Object.assign( {}
                  , {
                      freehandAnnotation: t[i.image.imageId].freehandAnnotation
                  }
                  ), d.b.updateImage(e))
              }
              ), x.a.setActiveTool())
          }
          ,
          toggleCinePlay:C,
          toggleCineControls:function() {
              var e=d.a.session.getObject("activeGridCardIndex"),
              t=!d.a.session.getObject("displayClineControls_".concat(e), 2);
              d.a.session.setObject("displayClineControls_".concat(e), t, 2),
              t?(d.a.viewerbase.StudyPrefetcher.getInstance().prefetch(), C()): R(), d.a.session.set("cine:updated", d.a.random.id(), 2)
          }
          ,
          hideCineControls:function() {
              var e=d.a.session.getObject("activeGridCardIndex");
              d.a.session.setObject("displayClineControls_".concat(e), !1, 2)
          }
          ,
          changeClinePlayRate:function(e, t) {
              if(d.a.viewer.cine.framesPerSecond=t, e||(e=M.getActiveCardFirstViewportElement()), e) {
                  var i=d.d.getToolState(e, "playClip");
                  i&&i.data&&i.data.length&&(void 0!==(i=i.data[0]).intervalId?(d.d.stopClip(e), d.d.playClip(e, d.a.viewer.cine.framesPerSecond)): i.framesPerSecond=d.a.viewer.cine.framesPerSecond, d.a.session.setObject("cine:updated", Math.random(), 2))
              }
          }
          ,
          isPlaying:w,
          isDownloadEnabled:function() {
              return!!b()
          }
          ,
          hasMultipleFrames:P,
          stopAllClips:R,
          stopActiveClip:O,
          toggleMeasure:function() {
              var e=d.a.session.getObject("tools:measureEnabled", 2, !0);
              e?d.d.store.state.enabledElements.forEach(function(t) {
                  x.a.getMeasurementTools().forEach(function(e) {
                      d.d.setToolDisabledForElement(t, e)
                  }
                  ), d.b.updateImage(t)
              }
              ):d.d.store.state.enabledElements.forEach(function(t) {
                  x.a.getMeasurementTools().forEach(function(e) {
                      d.d.setToolEnabledForElement(t, e)
                  }
                  ), d.b.updateImage(t)
              }
              ),
              d.a.session.setObject("tools:measureEnabled", !e, 2)
          }
          ,
          isStackScrollLinkingDisabled:function() {
              var e=0;
              d.a.session.get("activeViewport"),
              d.a.session.get("layout:updatedTime");
              var t=d.a.viewer.stackImagePositionOffsetSynchronizer;
              t&&(e=t.getLinkableViewports().length);
              return e<=1
          }
          ,
          isStackScrollLinkingActive:function() {
              var t=!0;
              d.a.session.get("activeViewport"),
              d.a.session.get("layout:updatedTime");
              var e=d.a.viewer.stackImagePositionOffsetSynchronizer,
              i=c()(e.syncedViewports, o()("element"));
              return Object(p.d)(function(e) {
                  a()(i, e)||(t=!1)
              }
              ),
              t
          }
          ,
          switchToImageByIndex:function(e) {
              var t=I();
              h(t, e)
          }
          ,
          switchAllSubToImageByIndex:function(e) {
              for(var t=v(), i=Object(p.e)(t.cardIndex), n=0;
              n<i.length;
              n++)h(i[n], e+n)
          }
          ,
          switchToImageByCardAndIndex:function(e, t) {
              var i=Object(p.f)(e, 0);
              h(i, t)
          }
          ,
          switchAllSubToImageByCardAndIndex:function(e, t, i) {
              for(var n=Object(p.e)(e), a=0;
              a<n.length;
              a++)t+a<i&&h(n[a], t+a)
          }
          ,
          setRefLinesEnabled:E,
          toggleReferenceLines:function() {
              A()?(Object(p.c)(function(e) {
                  var t=d.b.getEnabledElement(e);
                  t&&t.image?d.d.setToolDisabledForElement(e, "referenceLines"): d.a.log.info("enabled element is undefined or it's image is not rendered")
              }
              ), E(!1)):(Object(p.c)(function(e) {
                  var t=d.b.getEnabledElement(e);
                  t&&t.image?q(e)||d.d.setToolEnabledForElement(e, "referenceLines", {
                      synchronizationContext: d.a.viewer.updateImageSynchronizer
                  }
                  ):d.a.log.info("enabled element is undefined or it's image is not rendered")
              }
              ), E(!0), Object(f.a)()),
              d.a.session.setObject("tools:refLinesEnabled", A(), 2)
          }
          ,
          prefetchAllViewportElements:N,
          synchronizeStack:function() {
              if(d.a.viewer.synchronizer.stackSynchronizer||d.a.viewer.synchronizer.wwwcSynchronizerActive||d.a.viewer.synchronizer.panZoomSynchronizerActive) {
                  var t=d.a.viewer["".concat(d.a.viewer.synchronizer.stackSynchronizer, "Synchronizer")];
                  Object(p.c)(function(e) {
                      q(e)||(d.a.viewer.stackScrollSynchronizer.remove(e), d.a.viewer.stackImagePositionOffsetSynchronizer.remove(e), d.a.viewer.stackImageIndexSynchronizer.remove(e), d.a.viewer.stackImagePositionSynchronizer.remove(e), d.a.viewer.wwwcSynchronizer.remove(e), d.a.viewer.panZoomSynchronizer.remove(e))
                  }
                  ),
                  Object(p.b)(function(e) {
                      q(e)||(t&&t.add(e), d.a.viewer.synchronizer.wwwcSynchronizerActive&&d.a.viewer.wwwcSynchronizer.add(e), d.a.viewer.synchronizer.panZoomSynchronizerActive&&d.a.viewer.panZoomSynchronizer.add(e))
                  }
                  ),
                  N()
              }
          }
          ,
          toggleStackImagePositionOffsetSynchronizer:function() {
              var t=d.a.viewer.stackImagePositionOffsetSynchronizer;
              t&&("stackImagePositionOffset"===d.a.viewer.synchronizer.stackSynchronizer?(d.a.viewer.synchronizer.stackSynchronizer="", Object(p.c)(function(e) {
                  q(e)||t.remove(e)
              }
              )):(d.a.viewer.synchronizer.stackSynchronizer="stackImagePositionOffset", Object(p.c)(function(e) {
                  q(e)||(d.a.viewer.stackImageIndexSynchronizer.remove(e), d.a.viewer.stackScrollSynchronizer.remove(e), d.a.viewer.stackImagePositionSynchronizer.remove(e))
              }
              ), Object(p.b)(function(e) {
                  q(e)||t.add(e)
              }
              ), N()), d.a.viewer.notifyActiveCommandChanged())
          }
          ,
          toggleStackImageIndexSynchronizer:function() {
              var t=d.a.viewer.stackImageIndexSynchronizer;
              t&&("stackImageIndex"===d.a.viewer.synchronizer.stackSynchronizer?(d.a.viewer.synchronizer.stackSynchronizer="", Object(p.c)(function(e) {
                  q(e)||t.remove(e)
              }
              )):(d.a.viewer.synchronizer.stackSynchronizer="stackImageIndex", Object(p.c)(function(e) {
                  q(e)||(d.a.viewer.stackScrollSynchronizer.remove(e), d.a.viewer.stackImagePositionOffsetSynchronizer.remove(e), d.a.viewer.stackImagePositionSynchronizer.remove(e))
              }
              ), Object(p.b)(function(e) {
                  q(e)||t.add(e)
              }
              ), N()), d.a.viewer.notifyActiveCommandChanged())
          }
          ,
          toggleStackImagePositionSynchronizer:function() {
              var t=d.a.viewer.stackImagePositionSynchronizer;
              t&&("stackImagePosition"===d.a.viewer.synchronizer.stackSynchronizer?(d.a.viewer.synchronizer.stackSynchronizer="", Object(p.c)(function(e) {
                  q(e)||t.remove(e)
              }
              )):(d.a.viewer.synchronizer.stackSynchronizer="stackImagePosition", Object(p.c)(function(e) {
                  q(e)||(d.a.viewer.stackScrollSynchronizer.remove(e), d.a.viewer.stackImagePositionOffsetSynchronizer.remove(e), d.a.viewer.stackImageIndexSynchronizer.remove(e))
              }
              ), Object(p.b)(function(e) {
                  q(e)||t.add(e)
              }
              ), N()), d.a.viewer.notifyActiveCommandChanged())
          }
          ,
          toggleStackScrollSynchronizer:function() {
              var t=d.a.viewer.stackScrollSynchronizer;
              t&&("stackScroll"===d.a.viewer.synchronizer.stackSynchronizer?(d.a.viewer.synchronizer.stackSynchronizer="", Object(p.c)(function(e) {
                  q(e)||t.remove(e)
              }
              )):(d.a.viewer.synchronizer.stackSynchronizer="stackScroll", Object(p.c)(function(e) {
                  q(e)||(d.a.viewer.stackImagePositionOffsetSynchronizer.remove(e), d.a.viewer.stackImageIndexSynchronizer.remove(e), d.a.viewer.stackImagePositionSynchronizer.remove(e))
              }
              ), Object(p.b)(function(e) {
                  q(e)||t.add(e)
              }
              ), N()), d.a.viewer.notifyActiveCommandChanged())
          }
          ,
          toggleWwwcSynchronizer:function() {
              var t=d.a.viewer.wwwcSynchronizer;
              if(t) {
                  var e=!d.a.viewer.synchronizer.wwwcSynchronizerActive;
                  (d.a.viewer.synchronizer.wwwcSynchronizerActive=e)?Object(p.c)(function(e) {
                      q(e)||t.add(e)
                  }
                  ):Object(p.c)(function(e) {
                      q(e)||t.remove(e)
                  }
                  ),
                  d.a.viewer.notifyActiveCommandChanged()
              }
          }
          ,
          togglePanZoomSynchronizer:function() {
              var t=d.a.viewer.panZoomSynchronizer;
              if(t) {
                  var e=!d.a.viewer.synchronizer.panZoomSynchronizerActive;
                  (d.a.viewer.synchronizer.panZoomSynchronizerActive=e)?Object(p.c)(function(e) {
                      q(e)||t.add(e)
                  }
                  ):Object(p.c)(function(e) {
                      q(e)||t.remove(e)
                  }
                  ),
                  d.a.viewer.notifyActiveCommandChanged()
              }
          }
          ,
          toggleScaleOverlay:function() {
              d.a.viewer.scaleOverlayEnabled=!d.a.viewer.scaleOverlayEnabled,
              d.a.session.setObject("tools:scaleOverlayEnabled", d.a.viewer.scaleOverlayEnabled),
              d.a.viewer.scaleOverlayEnabled?d.d.setToolEnabled("scaleOverlay"): d.d.setToolDisabled("scaleOverlay")
          }
          ,
          getAllEnabledElements:function() {
              return d.b.getEnabledElements()
          }
          ,
          getSelectedSeriesLoadingState:function(t) {
              var i=[],
              e=d.a.store.getters.selectedViewportData;
              if(e) {
                  var n=d.a.viewer.data.study.series[e.seriesIndex],
                  a=d.a.viewerbase.stackManager.findStack(n.id);
                  Array.prototype.forEach.call(a.imageIds, function(e) {
                      i.push(d.b.loadAndCacheImage(e))
                  }
                  ),
                  Promise.all(i).then(function(e) {
                      t(e)
                  }
                  )
              }
          }
          ,
          getCardViewportElement:function(e, t) {
              return Object(p.f)(e, t)
          }
      }
      ;
      t.a=M
  }
}

]);