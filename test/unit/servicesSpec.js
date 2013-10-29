'use strict';

/* jasmine specs for services go here */

describe('service', function() {

  var abs = function(x) {
    return x>0 ? x : -x;
  };

  it("abs should return the value passed", function() {
    expect(abs(anyPositiveInt)).toBe(anyPositiveInt);
    expect(abs(0)).toBe(0);
  });

  it("abs should return the absolute of negative number", function() {
    expect(abs(-1)).toBe(1);
  });

  var anyPositiveInt = 1;

});
