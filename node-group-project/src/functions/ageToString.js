const ageToString = age => {
  const ageArray = age.split('|')
  const ageYears = ageArray[0]
  const ageMonths = ageArray[1]

  let ageString = ``;
  if (ageYears > 0) { ageString += `${ageYears} year${ageYears>1 ? `s` : ``}` };
  if (ageMonths > 0) { ageString += `${ageString.length>0 ? ` and `: ``}${ageMonths} month${ageMonths>1 ? `s` : ``}` };
  if (ageString.length === 0) {ageString += `0 months`;}
  ageString += ` old`;

  return ageString;
};

export default ageToString;