export class TextAnalyzer{
    constructor(protected text: string) {}
    countLetterA(): number {
        return (this.text.match(/a/gi) || []).length;
    }

    countVowels(): number {
        return (this.text.match(/[aeiou]/gi) || []).length;
    }
}