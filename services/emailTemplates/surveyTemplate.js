// - Survey template.
// - Returns string that represents the email body for
//   our survey.
const keys = require('../../config/keys');
module.exports = (survey) => {
  return `
  <html>
    <head>
      <style>
        body {
          background-color: #F5F8FE;
          font-family: sans-serif;
        }
        a {
          text-decoration: none;
        }

        .container {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        
        .heading {
          padding-bottom: 2rem;
        }
        .btn-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        
        a, a > span {
          display: inline-block;
        }

        a > span {
          padding: 1rem 2rem;
          text-align: center;
          min-width: 50px;
          border-width: 1px;
          border-style: solid;
        }
        
        a > span.btn.primary {
          color: white;
          background-color: #3269FA;
          border-color: transparent;
        }
        
        a > span.btn.secondary {
          background-color: transparent;
          border-color: #3269FA;
        }
        
        a > span.btn.primary:hover, a > span.btn.secondary:hover {
          color: white;
          background-color: black;
          border-color: black;
        }
        
      </style>
    </head>
    <body>
      <div class="container" style="text-align: center">
      <h3 class="heading">I'd like your input!</h3>
      <p class="detail">Please answer the following question:</p>
      <p class="question">${survey.body}</p>
      <div class="btn-container">
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"><span class="btn primary">Yes</span></a>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no"><span class="btn secondary">No</span></a>
      </div>
      </div>
    </body>
  </html>
  `;
};
