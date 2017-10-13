(function(exports) {
  function noteView(list = new List) {
    this.list = list
  }

  noteView.prototype.returnHTML = function() {
    for (var i = 0; i < this.list.notes.length; i++) {
      return ("<ul><li><div>" + this.list.notes[i]._message + "</div></li></ul>");
    }
  };

  exports.noteView = noteView;
 })(this);
