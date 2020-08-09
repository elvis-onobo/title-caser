const acronym = require("../lib/acronym");

const acronymString = "MNIEO";

test("Creates acronym out fo string", () => {
  const res = acronym("my name is elvis onobo");
  expect(res).toBe(acronymString);
});
