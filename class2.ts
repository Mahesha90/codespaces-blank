//Counting occurrences of the letter 'a' (case insensitive)
export class TextAnalyzer {
    constructor(protected text: string) {}

    countLetterA(): number {
        return (this.text.match(/a/gi) || []).length; // Matches both 'a' and 'A'
    }

   
}