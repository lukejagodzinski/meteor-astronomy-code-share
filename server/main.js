import { Meteor } from "meteor/meteor";
import Video from "/imports/Video.js";

Video.extend({
  fields: {
    serverOnlyField: {
      type: Boolean
    }
  }
});

Meteor.startup(() => {
  const video = new Video({ name: "test", serverOnlyField: true });
  video.save();
  console.log(video.canRelease());
});
