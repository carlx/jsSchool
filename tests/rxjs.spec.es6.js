/**
 * Rxjs tests
 */
let Rx = require('rx');
let chai = require('chai');
chai.should();


let source = Rx.Observable.create((observer) => {
   observer.onNext(true);
   return () => console.log('disposed');
});

describe('test RxJS', () => {

   it('should be ok', (done)=> {
      source.subscribe((result) => {
         result.should.equal(true);
         done();
      })
   })

   it('flat map test', (done)=> {
      let s1 = Rx.Observable.create((observer) => {
         observer.onNext(1);
      });

      let s2 = Rx.Observable.create((observer) => {
         observer.onNext(2);
      });

      s1.flatMap((result) => {
         result.should.equal(1);
         return s2;
      }).subscribe((result) => {
         result.should.equal(2);
         done();
      });

   })

   it('spread operator test', (done) => {
      'use strict';
      let karol = 'Karol';
      let arr = [...karol];
      arr.length.should.equal(5);

      let obs = Rx.Observable.fromArray([...karol]);
      obs.subscribe((observer) => {
         karol.search(observer).should.be.above(-1);
      },
          (error) => {},
          (complete) => {done()}
      );
   });

   it('rx sum test', (done) => {
      'use strict';
      let observable = Rx.Observable.range(1,3).sum();

      observable.subscribe((result) => {
         result.should.equal(6);
      }, (error)=>{},(complete) => {done();});

   });

   it('test rxjs timer', (done) => {
      'use strict';
      let obs = Rx.Observable.zip(
          Rx.Observable.range(1,5),
          Rx.Observable.interval(1000),
          (range) => range
      );
      obs.subscribe(
          (result) => {
             console.log('running async test.. result %s', result);
             result.should.be.below(6);
          },
          (error) => {

          },
          (complete) => {
             done();
          }
      )
   })


});
