function replaceChn(url,chn = 'miniprogram_xys') {
  if(/(\?|\&)chn=(.*?)(\&|$)/.test(url)){
      let reg = new RegExp('(\\?|\\&)chn=(?!'+ chn +')(.*?)(\\&|$)');
      url = url.replace(reg, function(){
          return arguments[1] + "chn="+ chn +"_" + arguments[2] + arguments[3]
      })
  }else if(/\#\//.test(url)){ // vue url
      url += /\?/.test(url.split("#")[1])?"&chn="+ chn : "?chn=" + chn;
  }else{
      let tmpUrls = url.split("#")
      tmpUrls[0] += /\?/.test(tmpUrls[0])?"&chn=" + chn : "?chn=" + chn;
      url = tmpUrls[0] + (tmpUrls[1] ? "#"+tmpUrls[1] : "")
  }
  return url
}
export {replaceChn}