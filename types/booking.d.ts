import { FlightOffer } from "./flights";

/**
 * Interface of a passenger
 */
export interface Passenger {
  /** first name of passenger */
  firstName: string;

  /** last name of passenger */
  lastName: string;

  /** birthday of passenger */
  dateOfBirth: string;

  /** gender of passenger */
  gender: string;
}

/**
 * Interface of a credit card
 */
export interface CreditCard {
  /** holder of credit card */
  holder: string;

  /** number of credit card */
  number: string;

  /** expiration date of credit card */
  expire: string;
}

/**
 * Interface of a booking draft
 */
export interface BookingDraft {
  /** list of all passengers */
  passengers: Passenger[];

  /** credit card used for booking */
  creditCard: CreditCard;

  /** flight offer for booking */
  flightOffer: FlightOffer;
}

/**
 * Interface of a booking
 */
export interface Booking extends BookingDraft {
  /** unique number that identifies the booking */
  id: string;

  /** email of the user that created the booking */
  createdBy: string;

  /** time when the booking was created */
  createdAt: string;

  /** airport of departure */
  from: string;

  /** destination airport */
  to: string;
}
