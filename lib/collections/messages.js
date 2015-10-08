/**
 * Created by kkoneko on 10/5/2015.
 */

Messages = new Mongo.Collection("messages");

Messages.allow({
  insert: function (userId, doc) {
    return (userId && doc.user === userId);
  }
});

