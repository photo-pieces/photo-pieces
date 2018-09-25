function noop(){}
const getGA = () => {
    if (process.env.TRACKING_ID)
        return import("react-ga").then(module=>{
            const ReactGA = module && module.default ? module.default : module;
            ReactGA.initialize(process.env.TRACKING_ID);
            return ReactGA;
        });
    else {
        return new Promise(function(resolve){
            resolve({ pageview:noop, event:noop,set:noop });
        })
    }    
};

const GA = {
  pageview: (...args) => getGA().then(ga => ga.pageview(...args)),
  event: (...args) => getGA().then(ga => ga.event(...args)),
  set: (...args) => getGA().then(ga => ga.set(...args))
};
export default GA;