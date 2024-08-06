import { ZoomMtg } from '@zoomus/websdk';

require('dotenv').config();

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.0.1/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const API_KEY = 'API_KEY'
const API_SECRET = 'YOUR_ZOOM_API_SECRET';
const MEETING_NUMBER = 'YOUR_MEETING_NUMBER';
const USERNAME = 'Bot';
const PASSWORD = 'YOUR_MEETING_PASSWORD';
const SIGNATURE = ZoomMtg.generateSignature({
  meetingNumber: MEETING_NUMBER,
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  role: 0,
  success: function (res) {
    console.log(res.result);
  }
});

ZoomMtg.init({
  leaveUrl: 'http://www.zoom.us',
  isSupportAV: true,
  success: function () {
    ZoomMtg.join({
      signature: SIGNATURE,
      meetingNumber: MEETING_NUMBER,
      userName: USERNAME,
      apiKey: API_KEY,
      userEmail: '',
      passWord: PASSWORD,
      success: function (res) {
        console.log('join meeting success');
      },
      error: function (res) {
        console.log(res);
      }
    });
  },
  error: function (res) {
    console.log(res);
  }
});
