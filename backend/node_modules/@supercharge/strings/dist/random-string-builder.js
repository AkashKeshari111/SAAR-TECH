'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomStringBuilder = void 0;
class RandomStringBuilder {
    /**
     * Create a new view config builder instance.
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * Assign the given `length` for the random string. By default, uses a length of 21 characters.
     *
     * @param length
     *
     * @returns {this}
     */
    length(length) {
        this.config.withLength(length);
        return this;
    }
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    characters() {
        this.config.useCharacters();
        return this;
    }
    /**
     * Use numbers when generating a random string.
     *
     * @returns {this}
     */
    numbers() {
        this.config.useNumbers();
        return this;
    }
    /**
     * Use symbols when generating a random string.
     *
     * @returns {this}
     */
    symbols() {
        this.config.useSymbols();
        return this;
    }
}
exports.RandomStringBuilder = RandomStringBuilder;
