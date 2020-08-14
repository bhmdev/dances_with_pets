const getPath = () => {
  let pathArray = location.pathname.substring(1).split('/')
  if (pathArray[pathArray.length-1] === "") {pathArray.pop()}
  return pathArray;
};

export default getPath;
