export declare class RandomStringConfig {
    /**
     * Stores the random string config.
     */
    private readonly config;
    /**
     * Create a new instance.
     */
    constructor();
    /**
     * Returns the configured string length.
     *
     * @returns {Number}
     */
    length(): number;
    /**
     * Assign the given `length`.
     *
     * @param length
     *
     * @returns {this}
     */
    withLength(length: number): this;
    /**
     * Use characters when generating a random string.
     *
     * @returns {this}
     */
    useCharacters(): this;
    /**
     * Determine whether to use characters when generating a random string.
     *
     * @returns {this}
     */
    shouldUseCharacters(): boolean;
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    useNumbers(): this;
    /**
     * Determine whether to use numbers when generating a random string.
     *
     * @returns {this}
     */
    shouldUseNumbers(): boolean;
    /**
     * Use symbols when generating a random string.
     *
     * @returns {this}
     */
    useSymbols(): this;
    /**
     * Determine whether to use numbers when generating a random string.
     *
     * @returns {this}
     */
    shouldUseSymbols(): boolean;
}
