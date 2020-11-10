import { of } from "rxjs";
import { map, filter, delay, tap, scan } from "rxjs/operators";

const source = of("World").pipe(
  map(x => `Hello ${x}!`),
  tap(x => console.log(x)),
  delay(2000),
  scan((acc, one) => acc + one, "Holis "),
  filter(x => x.includes("Holis"))
);

source.subscribe(console.log);
