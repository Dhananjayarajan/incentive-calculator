/* To check whether the user is eligible for incentive or not */
function eligibilityCheck() {
  const daysElement = document.querySelector('.js-days');
  const totalDays = daysElement.value;
  let targetProduction = (Number(totalDays - 1) * 450) * 0.95;

  const minutesElement = document.querySelector(`.js-minutes`);
  const totalMinutes = minutesElement.value;

  const qualityElement = document.querySelector('.js-quality')
  let qualityEligibility = qualityElement.value;

  if (qualityEligibility < 95 || totalMinutes < targetProduction) {

    document.querySelector('.js-result')
      .innerHTML = `Sorry You are not eligible for incentive`;
  }
  else {
    document.querySelector('.js-result')
      .innerHTML = 'You are eligible for incentive';

  }
}

/* To calculate quality incentive*/
function totalQualityIncentive() {
  const qualityElement = document.querySelector('.js-quality')
  let qualityEligibility = qualityElement.value;
  let qualityIncentive = 1000;

  if (qualityEligibility >= 95 && qualityEligibility < 96.01) {
    qualityIncentive = qualityIncentive

  } else if (qualityEligibility > 96.00) {
    let baseIncentive = Math.floor((qualityEligibility - 96) / 0.5);
    qualityIncentive += baseIncentive * 500;
  } else {
    qualityIncentive = 0
  }
  return qualityIncentive;
}
/*calculate production incentive */
function productionIncentive() {

  const daysElement = document.querySelector('.js-days');
  const totalDays = daysElement.value;
  let targetProduction = (Number(totalDays - 1) * 450) * 0.95;

  const minutesElement = document.querySelector(`.js-minutes`);
  const totalMinutes = minutesElement.value;
  let totalProductionIncentive = 1000;

  if (totalMinutes > targetProduction) {
    const additionalMinutes = Number(Math.floor((totalMinutes - targetProduction) / 60))
    totalProductionIncentive += additionalMinutes * 150
  } else {
    totalProductionIncentive = 0;
  }
  return totalProductionIncentive;

}

function totalIncentive() {
  eligibilityCheck();
  let totalProductionIncentive = productionIncentive();
  let qualityIncentive = totalQualityIncentive();

  // Check if any of the input fields are empty
  const daysElement = document.querySelector('.js-days');
  const totalDays = daysElement.value;
  const targetMinutes = totalDays * 450;

  const minutesElement = document.querySelector('.js-minutes');
  const totalMinutes = minutesElement.value;

  const qualityElement = document.querySelector('.js-quality');
  const qualityEligibility = qualityElement.value;

  if (!totalDays || !totalMinutes || !qualityEligibility) {
    document.querySelector('.js-incentive').innerHTML = `Please fill in all fields`;
  } else {
    let totalIncentive = totalProductionIncentive + qualityIncentive;
    if (qualityIncentive === 0 || totalProductionIncentive === 0) {

      document.querySelector(`.js-incentive`).innerHTML = `The total incentive amount is Rs 0`;
    } else {
      document.querySelector(`.js-incentive`).innerHTML = `The total incentive amount is Rs ${totalIncentive}`;

    }
  }
}
