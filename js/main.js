// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',

  methods: {

//trying to figure out how to push to a new div rather than same card, error on function? <-- resolved with fixing HTML placement
// add Card
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

// trying to make first card pull from array, now with content
    sayContent: function(c)
    {
      return `${c.content}`;
    },

// delete content
//need a new command other than push, delete isn't working, splice deletes whole list <--- resolved, no interior function needed
//trying this but it's not working. from https://forum-archive.vuejs.org/topic/4903/clearing-input-fields
    cancelItem: function ()
    {
      this.titleInputValue = '';
      this.contentInputValue = ''
    },

// still having issues here... not sure what's going on. Somehow I'm not matching my object to the function or something? <-- resolved with indexOf function to define index
    doneItem: function(card)
    {
      var index = this.cards.indexOf(card);
      this.cards.splice(index, 1)
    },

//I think that there's something css related that needs to happen here-- dropping this card back to edit format-- maybe div class control? 
    editItem: function(card)
    {
    },
},

//sets input boxes in cards to no text, placeholder text visible (see html), dynamically sets content for first card
  data: {
    titleInputValue: '',
    contentInputValue: '',
    clear: '',
    cards: [
      {
      title: 'Homework',
      content: 'Finish exercise 04'
      }
    ]
}
 });
