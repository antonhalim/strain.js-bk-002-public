'use strict';

var strain = {
  keep: function(array, func){
    var result = [];
    array.forEach(function(element){
      if (func(element)){
        result.push(element)
      };
    });
    return result
  },
  discard: function(array, func){
    var result = [];
    array.forEach(function(element){
      if (func(element) === false){
        result.push(element)
      };
    });
    return result
  }
};
