/**
 * Interface of a passenger
 */
export interface Passenger {
  /** first name of passenger */
  firstName: string;

  /** last name of passenger */
  lastName: string;

  /** birthrate of passenger */
  birthrate: string;

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
 * Interface of a booking
 */
export interface Booking {
  /** airport of departure */
  from: string;

  /** destination airport */
  to: string;

  /** unique number that identifies the booking */
  number: string;

  /** list of all passengers */
  passengers: Passenger[];

  /** credit card used for booking */
  creditCard: CreditCard;

  /** flights for booking */
  flights: any[];
}
