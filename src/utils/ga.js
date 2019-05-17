
import PackageJson from "./../../package.json";
function noop() {}
const getGA = () => {
  if (process.env.NODE_ENV==='production')
    return import("react-ga").then(module => {
      const ReactGA = module && module.default ? module.default : module;
      ReactGA.initialize('UA-126436258-1', {
        gaOptions: {
          siteSpeedSampleRate: 100
        }
      });
      ReactGA.set({"appId":"photo-pieces.now.sh"})
      ReactGA.set({"appName":"photo-pieces"})
      ReactGA.set({"appVersion":PackageJson.version})
      ReactGA.event({
        category: "Versions",
        action: `version: ${PackageJson.version}`,
        label:PackageJson.version,
        value: PackageJson.version
      });
      if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {  
        ReactGA.event({
          category: "Display Mode",
          action: "standalone",
        }); 
      }else{
        ReactGA.event({
          category: "Display Mode",
          action: "non-standalone",
        });
      } 
      return ReactGA;
    });
  else {
    return new Promise(function(resolve) {
      resolve({ pageview: noop, event: noop, set: noop });
    });
  }
};

const GA = {
  pageview: (...args) => getGA().then(ga => ga.pageview(...args)),
  event: (...args) => getGA().then(ga => ga.event(...args)),
  set: (...args) => getGA().then(ga => ga.set(...args))
};
export default GA;
