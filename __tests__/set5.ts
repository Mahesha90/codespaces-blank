import { TextAnalyzer } from "../class3";

test("count vowels in text", () => {
    const analyzer = new TextAnalyzer("Hello World");
    expect (analyzer.countVowels()).toBe(3);
}
);