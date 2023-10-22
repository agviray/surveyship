// - Survey template.
// - Returns string that represents the email body for
//   our survey.
module.exports = (survey) => {
  return '<div>' + survey.body + '</div>';
};
