import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

const myObserver: Observer<any> = {
  next: x => {
    console.log(x);
  },
  error: err => console.error(`Ahh te equivocaste`),
  complete: () => console.log("mui trabajo aqui esta realizado")
};

const myObservable = new Observable(subscriber => {
  subscriber.next("holis"),
    subscriber.next(10),
    subscriber.next(20),
    subscriber.error("Holis soy un error jijii");
});

const myObservable2 = new Observable(subscriber => {
  subscriber.complete();
});

// myObservable.subscribe(myObserver);
const myPipe = myObservable.pipe(
  filter((r: any) => !isNaN(r)),
  map((r: any) => {
    return r + 10;
  })
);

myPipe.subscribe(myObserver);
