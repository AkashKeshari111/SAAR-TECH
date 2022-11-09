export interface RandomStringBuilder {
    length(size: number): this;
    numbers(): this;
    characters(): this;
    symbols(): this;
}
export declare type RandomStringBuilderCallback = (builder: RandomStringBuilder) => unknown;
