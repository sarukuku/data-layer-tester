/// <reference types="Cypress" />
const domains = require("../../../test-config.json");
const get = require("lodash.get");

const isObject = x => typeof x === "object" && x !== null;

const recurseOverObjectProps = (object, callback, callbackArgs = []) => {
  const path = [];

  const recurse = o => {
    for (let key in o) {
      path.push(key);
      if (isObject(o[key])) {
        recurse(o[key]);
      } else {
        callback([...path], o[key], ...callbackArgs);
      }
      path.pop();
    }
  };

  recurse(object);
};

domains.forEach(domainObj => {
  domainObj.paths.forEach(pathObj => {
    context(`${domainObj.domain + pathObj.path}`, () => {
      debugger
      before(() => {
        cy.visit(`${domainObj.domain + pathObj.path}`);
      });

      it(`digitalData object exists`, () => {
        cy.window().should("have.property", "digitalData");
      });

      if (pathObj.hasOwnProperty("format")) {
        it(`digitalData format is correct`, () => {
          cy.window().then(win => {
            recurseOverObjectProps(pathObj.format, path => {
              const ddValue = get(win.digitalData, path);
              if (typeof ddValue !== "string") {
                expect(ddValue).to.be.a("string");
              }
            });
          });
        });
      }
    });
  });
});
