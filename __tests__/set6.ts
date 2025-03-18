import { Isikukood } from "../class4";

test("get birth year from personal code", () => {
    expect(new Isikukood("37605030299").synniaasta()).toBe(1976);
    expect(new Isikukood ("50011223344").synniaasta()).toBe(2000);
});