import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Messages = new Mongo.Collection('messages')

Template.messages.helpers({
  messages: function() {
    return Messages.find()
  }
})



