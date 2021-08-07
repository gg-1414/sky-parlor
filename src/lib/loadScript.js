const loadScript = (url, callback) => {
  // If script that contains url already exists, return callback or null
  let scripts = [].slice.call(document.getElementsByTagName('script'));
  scripts = scripts.filter(script => {
    return script.src === url;
  });

  if (scripts.length) {
    if (callback) callback();
    return;
  }

  // Else, create script and run callback
  const script = document.createElement('script');
  script.onload = () => {
    callback();
  }
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('body')[0].appendChild(script);
}

export default loadScript;