import { RandomStringConfig } from './random-string-config';
import { RandomStringBuilder as RandomStringBuilderContract } from './contracts';
export declare class RandomStringBuilder implements RandomStringBuilderContract {
    /**
     * Stores the view config.
     */
    private readonly config;
    /**
     * Create a new view config builder instance.
     */
    constructor(config: RandomStringConfig);
    /**
     * Assign the given `length` for the random string. By default, uses a length of 21 characters.
     *
     * @param length
     *
     * @returns {this}
     */
    length(length: number): this;
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    characters(): this;
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    numbers(): this;
    /**
     * Use symbols when generating a random string.
     *
     * @returns {this}
     */
    symbols(): this;
}
