function testNoteListTakesNote(note) {

  var list = new List();
  list.enterNote("This is my first note");
  var notes = list.displayNote();
  first_note = notes[0];
  assert.isTrue(first_note.read() === "This is my first note");

}

testNoteListTakesNote();
