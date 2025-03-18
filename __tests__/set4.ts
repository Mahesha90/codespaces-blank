
//Counting occurrences of the letter 'a' (case insensitive)
import { TextAnalyzer } from "../class2";

test("count 'a' occurrences", () => {
    const analyzer = new TextAnalyzer("Apples and bananas");
    expect(analyzer.countLetterA()).toBe(5); // "A", "a", "a", "a"
});
