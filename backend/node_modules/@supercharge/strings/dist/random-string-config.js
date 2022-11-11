'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomStringConfig = void 0;
class RandomStringConfig {
    /**
     * Create a new instance.
     */
    constructor() {
        this.config = {
            length: 21,
            numbers: false,
            symbols: false,
            characters: false
        };
    }
    /**
     * Returns the configured string length.
     *
     * @returns {Number}
     */
    length() {
        return this.config.length;
    }
    /**
     * Assign the given `length`.
     *
     * @param length
     *
     * @returns {this}
     */
    withLength(length) {
        if (length) {
            this.config.length = length;
        }
        return this;
    }
    /**
     * Use characters when generating a random string.
     *
     * @returns {this}
     */
    useCharacters() {
        this.config.characters = true;
        return this;
    }
    /**
     * Determine whether to use characters when generating a random string.
     *
     * @returns {this}
     */
    shouldUseCharacters() {
        return this.config.characters;
    }
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    useNumbers() {
        this.config.numbers = true;
        return this;
    }
    /**
     * Determine whether to use numbers when generating a random string.
     *
     * @returns {this}
     */
    shouldUseNumbers() {
        return this.config.numbers;
    }
    /**
     * Use symbols when generating a random string.
     *
     * @returns {this}
     */
    useSymbols() {
        this.config.symbols = true;
        return this;
    }
    /**
     * Determine whether to use numbers when generating a random string.
     *
     * @returns {this}
     */
    shouldUseSymbols() {
        return this.config.symbols;
    }
}
exports.RandomStringConfig = RandomStringConfig;
