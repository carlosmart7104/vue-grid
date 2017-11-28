import { toArray } from './toArray';

export var calcBreakpoint = function calcBreakpoint(viewport, breakpoints) {
  var bpArr = toArray(breakpoints);

  var result = bpArr.reduce(function (previous, current) {
    return current.value <= viewport ? current : previous;
  });

  return result.name;
};