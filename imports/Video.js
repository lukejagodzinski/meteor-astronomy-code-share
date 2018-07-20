import { Class } from "meteor/jagi:astronomy";
import { Mongo } from "meteor/mongo";

const Videos = new Mongo.Collection("videos");

const Video = Class.create({
  name: "Video",
  collection: Videos,
  fields: {
    name: {
      type: String
    }
  },
  helpers: {
    canRelease() {
      return Video.find({ name: this.name }).count() < 1;
    }
  }
});

export default Video;
