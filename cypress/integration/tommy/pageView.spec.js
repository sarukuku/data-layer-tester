/// <reference types="Cypress" />
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

const markets = [
  {
    market: "at",
    paths: [
      {
        path: "/",
        format: {
          page: {
            category: {
              pageType: "",
              primaryCategory: "",
              primaryCategoryId: ""
            },
            pageInfo: {
              destinationURL: "",
              pageAlias: "",
              environment: ""
            },
            attributes: {
              pageId: "",
              storeCountry: "",
              storeLanguage: ""
            },
            tools: [
              {
                toolName: "",
                toolVersion: ""
              }
            ]
          }
        }
      },
      {
        path: "/herren-maentel-jacken",
        format: {
          page: {
            category: {
              pageType: "",
              subCategory1Id: "",
              subCategory2: "",
              subCategory1: "",
              primaryCategory: "",
              subCategory2Id: "",
              primaryCategoryId: ""
            },
            pageInfo: {
              destinationURL: "",
              pageAlias: "",
              environment: ""
            },
            tools: [
              {
                toolName: "",
                toolVersion: ""
              }
            ],
            attributes: {
              pageId: "",
              storeCountry: "",
              storeLanguage: ""
            }
          },
          campaign: [],
          product: [
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            },
            {
              category: {
                primaryCategory: ""
              },
              productInfo: {
                styleId: "",
                primarySKU: "",
                productName: "",
                uniqueId: ""
              }
            }
          ]
        }
      }
    ]
  },
  {
    market: "be",
    paths: [{ path: "/" }, { path: "/heren-jassen-jacks" }]
  },
  {
    market: "ch",
    paths: [{ path: "/" }, { path: "/herren-maentel-jacken" }]
  },
  {
    market: "de",
    paths: [{ path: "/" }, { path: "/herren-maentel-jacken" }]
  },
  {
    market: "es",
    paths: [{ path: "/" }, { path: "/hombres-abrigos-chaquetas" }]
  },
  {
    market: "fr",
    paths: [{ path: "/" }, { path: "/manteaux-vestes-homme" }]
  },
  {
    market: "hr",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "it",
    paths: [{ path: "/" }, { path: "/cappotti-giacche-uomini" }]
  },
  {
    market: "nl",
    paths: [{ path: "/" }, { path: "/heren-jassen-jacks" }]
  },
  {
    market: "cz",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "dk",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "ee",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "fi",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "hu",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "ie",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "lv",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "lt",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "lu",
    paths: [{ path: "/" }, { path: "/manteaux-vestes-homme" }]
  },
  {
    market: "pl",
    paths: [{ path: "/" }, { path: "/meskie-okrycia-wierzchnie" }]
  },
  {
    market: "pt",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "ru",
    paths: [
      { path: "/" },
      {
        path:
          "/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D0%B0%D0%BB%D1%8C%D1%82%D0%BE-%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B8"
      }
    ]
  },
  {
    market: "sk",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "si",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "se",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  },
  {
    market: "uk",
    paths: [{ path: "/" }, { path: "/mens-coats-jackets" }]
  }
];

markets.forEach(m => {
  m.paths.forEach(p => {
    context(`${m.market}.tommy.com${p.path}`, () => {
      before(() => {
        cy.visit(`https://${m.market}.tommy.com${p.path}`);
      });

      it(`digitalData object exists at ${p.path}`, () => {
        cy.window().should("have.property", "digitalData");
      });

      if (p.hasOwnProperty("format")) {
        it(`digitalData format is correct at ${p.path}`, () => {
          cy.window().then(win => {
            recurseOverObjectProps(p.format, path => {
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
