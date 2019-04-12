const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProposeSchema = new Schema(
  {
    title: String,
    description: String,
    from: { type: Schema.Types.ObjectId, ref: 'user' },
    to: { type: Schema.Types.ObjectId, ref: 'user' },
    value: Number,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

mongoose.model('propose', ProposeSchema);
