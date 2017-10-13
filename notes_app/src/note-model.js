(function(exports) {

  function Note(message) {
    this._message = message;
  }

  Note.prototype.read = function() {
    return this._message;
  };

  exports.Note = Note;

})(this);
