
Promise.prototy.finaly = function(cb){
  let Promise = this.constructor
  return this.then(
    value => {
      Promise.resolve(cb()).then(
        ()=>{
          throw value;
        }
      )
    },
    reason => {
      Promise.resolve(cb()).then(
        () => {
          throw reason;
        }
      )
    }
  )
}
export default  Promise