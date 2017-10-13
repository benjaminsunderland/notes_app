'use strict';

(function(exports) {
  function List() {
    this.notes = []
  };

  List.prototype.displayNote = function() {
    return this.notes;
  };

  List.prototype.enterNote = function(message) {
    var note = new Note(message)
    this.notes.push(note);
  }

  exports.List = List;

})(this);
