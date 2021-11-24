/**
 * Interface of a flight offer
 */
export interface FlightOffer {
    /** airport of departure */
    id: string;

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
        iataCode: string;
        at: string;
    };

    /** airport of arrival */
    arrival: {
        iataCode: string;
        at: string;
    };

    /** duration of the flight */
    duration: string;
}
