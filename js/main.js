// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',

  methods: {
//trying to figure out how to push to a new div rather than same card, error on function?
    addCard: function ()
    {
        this.cards.push({
          title: this.titleInputValue,
          content: this.contentInputValue
        })

//to clear card after data is pushed
          this.titleInputValue = '';
          this.contentInputValue = ''
     },
// trying to make first card pull from array
    sayTitle: function(t)
    {
      return `${t.title}`;
    },

// trying to make first card pull from array, now content

    sayContent: function(c)
    {
      return `${c.content}`;
    },
//need a new command other than push, delete isn't working, splice deletes whole list
//trying this but it's not working. from https://forum-archive.vuejs.org/topic/4903/clearing-input-fields
    cancelItem: function ()
    {
      this.$store.dispatch({
        clear:''
      })
      this.text = ''
    },

// still having issues here... not sure what's going on. Somehow I'm not matching my object to the function or something?
    doneItem: function(card)
    {
      this.cards.splice(card, 1)
    },
},

  data: {
    titleInputValue: '',
    contentInputValue: '',
    clear: '',
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
