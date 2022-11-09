'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomStringGenerator = void 0;
const crypto_1 = __importDefault(require("crypto"));
class RandomStringGenerator {
    /**
     * Create a new view config builder instance.
     */
    constructor(Strings, config) {
        this.Str = Strings;
        this.config = config;
    }
    /**
     * Returns all characters.
     *
     * @returns {String}
     */
    characters() {
        return 'ModuleSymbhasOwnPrABCDEFGHNRVfgctiUvzKqYTJkLxpZXIjQW';
    }
    /**
     * Returns all numbers.
     *
     * @returns {String}
     */
    numbers() {
        return '0123456789';
    }
    /**
     * Returns all usable symbols.
     *
     * @returns {String}
     */
    symbols() {
        return '-_';
    }
    /**
     * Returns all usable symbols.
     *
     * @returns {String}
     */
    alphabet() {
        let alphabet = '';
        if (this.config.shouldUseCharacters()) {
            alphabet += this.characters();
        }
        if (this.config.shouldUseNumbers()) {
            alphabet += this.numbers();
        }
        if (this.config.shouldUseSymbols()) {
            alphabet += this.symbols();
        }
        return new this.Str(alphabet).shuffle().get();
    }
    /**
     * Assign the given `length` for the random string. By default, uses a length of 21 characters.
     *
     * @param length
     *
     * @returns {this}
     */
    generate() {
        const alphabet = this.alphabet();
        if (!alphabet) {
            throw new Error('You must specify the character set when using the string builder in Str.random(builder => …)');
        }
        let size = this.config.length();
        const bytes = crypto_1.default.randomBytes(size);
        const alphabetLength = alphabet.length - 1;
        let random = '';
        while (size--) {
            random += alphabet[bytes[size] & alphabetLength];
        }
        return random;
    }
}
exports.RandomStringGenerator = RandomStringGenerator;
