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
          padding: 50px 0;
          text-align: center;
        }
        
        table {
          margin: auto;
          padding-top: 50px;
          border-spacing: 1rem 0;
        }

        .heading {
          padding-bottom: 2rem;
          font-size: 25px;
        }

        p, a, a > span {
          font-size: 16px;
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
      <div class="container">
      <h3 class="heading">I'd like your input!</h3>
      <p class="detail">Please answer the following question:</p>
      <p class="question">${survey.body}</p>
      <table>
        <tbody>
          <tr>
            <td>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"><span class="btn primary">Yes</span></a>
            </td>
          <td>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no"><span class="btn secondary">No</span></a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </body>
  </html>
  `;
};
