import fetchPromise from "./promiseFile";

// test('datais resolved',()=>{
//     return expect(fetchPromise()).resolves.toBe('resolved')
// })

test('fetchPromise',async()=>{
     const data = await fetchPromise();
     expect(data).toBe('resolved')
})