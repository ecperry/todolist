// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',

  methods: {
    addCard: function (){
        this.cards.push({
          title: this.titleInputValue,
          content: this.contentInputValue
        })

          this.titleInputValue = '';
          this.contentInputValue = ''
     },

    sayTitle: function(t){
      return `${t.title}`;
    },

    sayContent: function(c){
      return `${c.content}`;
    },

    deleteContent: function(){
      this.cards.push({
      content: ' '
        })
    }
  },
  data: {
    titleInputValue: '',
    contentInputValue: '',
    cards: [
    {
      title: 'To Do Item',
      content: 'My first to do item.'
    }

   ]
  }
});

// add Card
// delete content
//
