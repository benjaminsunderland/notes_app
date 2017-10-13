function testNoteListViewable() {
  var list1 = new List();
  list1.enterNote("A list of my favourite movies");

  listView = new noteView(list1)
  var text = '<ul><li><div>A list of my favourite movies</div></li></ul>';
  assert.isTrue(listView.returnHTML() === text);
}

testNoteListViewable();
