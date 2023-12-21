declare module '@aname2050/cleanlogs' {
    /**
     * Generates a timestamp of the current time and date and returns in a user-friendly format
     */
    export function generateTimestamp(): string;

    /**
     * Returns the current stack
     */
    export function getStack(): string;
}
