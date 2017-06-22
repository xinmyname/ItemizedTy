import assert = require("assert");
import Pluralizer from "../src/Infrastructure/Pluralizer"

describe('Pluralizer', () => {
  describe('pluralOf("cat")', () => {
    it('should return "cats"', () => {
      assert.equal("cats", new Pluralizer().pluralOf("cat"));
    });
  });
});
