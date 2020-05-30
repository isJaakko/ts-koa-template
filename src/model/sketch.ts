import db, { Schema } from './lib/db';

const sketchSchema = new Schema({
  objectId: String,
  fid: {
    type: Schema.Types.ObjectId,
    ref: 'raw_file'
  },
  quickAccess: Boolean
});

export const sketchModel = db.model('sketch_file', sketchSchema);
