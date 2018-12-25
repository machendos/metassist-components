'use strict';

function Singles() {
  Array.call(this);
}

Singles.prototype = Array.prototype;
Singles.prototype.constructor = Singles;
