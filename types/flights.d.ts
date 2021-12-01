/**
 * Interface of a flight offer
 */
export interface FlightOffer {
    /** number of bookable seats */
    numberOfBookableSeats: number;

    /** number of changes (= flights - 1) */
    stops: number;

    /** flights of this flight offer */
    flights: Flight[];

    /** price of the flight offer */
    price: string;

    /** currency of the above price */
    currency: string;
}

/**
 * Interface of a flight
 */
export interface Flight {
    /** airport of departure */
    departure: {
        /** 3 uppercase letters for the departure airport */
        iataCode: string;
        /** departure time */
        at: string;
    };

    /** airport of arrival */
    arrival: {
        /** 3 uppercase letters for the arriving airport */
        iataCode: string;
        /** arrival time */
        at: string;
    };

    /** duration of the flight */
    duration: string;
}
