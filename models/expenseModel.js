import { Schema, model } from "mongoose";

const expenseModal = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    userId: {
      type: String,
      trim: true,
      required: true,
    },
    isGroupExpense: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    ratio: {
      type: Number,
      default: 1,
    },
    likedUserIds: [
      {
        userId: {
          type: String,
        },
        ratio: {
          type: Number,
        },
      },
    ],
    category: {
      type: String,
      required: true,
      default: "Others",
    },
    subCategory: {
      type: String,
      required: true,
      default: "Others",
    },
    flightDetails: {
      travelDate: {
        type: Date,
      },
      from: {
        type: String,
      },
      destination: {
        type: String,
      },
      airlineName: {
        type: String,
        default: "Indigo",
      },
      classTravelled: {
        // need a enum
        type: String,
        default: "Economy",
      },
    },
    hotelDetails: {
      checkInDate: {
        type: Date,
      },
      checkOutDate: {
        type: Date,
      },
      hotelName: {
        type: String,
      },
      numberOfRooms: {
        type: Number,
        default: 1,
      },
      costPerDay: {
        type: Number,
      },
    },
    vehicleDetails: {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      mode: {
        type: String,
      },
      costPerDay: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);
const Expense = model("Expense", expenseModal);
export default Expense;
