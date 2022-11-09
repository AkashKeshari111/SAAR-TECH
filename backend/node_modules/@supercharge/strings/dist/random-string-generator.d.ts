import { Str } from './str';
import { RandomStringConfig } from './random-string-config';
export declare class RandomStringGenerator {
    /**
     * Stores the view config.
     */
    private readonly Str;
    /**
     * Stores the view config.
     */
    private readonly config;
    /**
     * Create a new view config builder instance.
     */
    constructor(Strings: typeof Str, config: RandomStringConfig);
    /**
     * Returns all characters.
     *
     * @returns {String}
     */
    characters(): string;
    /**
     * Returns all numbers.
     *
     * @returns {String}
     */
    numbers(): string;
    /**
     * Returns all usable symbols.
     *
     * @returns {String}
     */
    symbols(): string;
    /**
     * Returns all usable symbols.
     *
     * @returns {String}
     */
    alphabet(): string;
    /**
     * Assign the given `length` for the random string. By default, uses a length of 21 characters.
     *
     * @param length
     *
     * @returns {this}
     */
    generate(): string;
}
