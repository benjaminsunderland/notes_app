function TestNoteTakesText() {

  var message = "This is a message";
  var note = new Note(message);
  assert.isTrue(note.read() === message);
}

TestNoteTakesText();
