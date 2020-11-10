import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

const myObservable = new Observable(subscriber => {
  subscriber.next("holis"),
    subscriber.next(10),
    subscriber.next(20),
    subscriber.error("Holis soy un error jijii");
});

const myObservable2 = new Observable(subscriber => {
  subscriber.complete();
});

//El Pipe es inmutable
//Usarlo para hacer cosas genericas
//Se ejecuta antes de enviarle el dato al subscribe
const myPipe = myObservable.pipe(
  filter((r: any) => !isNaN(r)),
  map((r: any) => {
    return r + 10;
  })
);

//No es es inmutable
//Usarlo para hacer cosas especificas
const myObserver: Observer<any> = {
  next: x => {
    console.log(x);
  },
  error: err => console.error(`Ahh te equivocaste`, err),
  complete: () => console.log("mui trabajo aqui esta realizado")
};

myPipe.subscribe(myObserver);
