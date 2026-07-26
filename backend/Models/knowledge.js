import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    embedding: {
      type: [Number],
      default: [],
    },
  },
  {
    _id: false,
  }
);

const knowledgeSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["article", "faq", "pdf", "website", "text"],
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },

    file: {

    url: {
        type: String,
        default: "",
    },


    name: {
        type: String,
        default: "",
    },


    size: {
        type: Number,
        default: 0,
    },


    mimeType: {
        type: String,
        default: "",
    }

},

    chunks: {
      type: [chunkSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Knowledge = mongoose.model("Knowledge", knowledgeSchema);

export default Knowledge;