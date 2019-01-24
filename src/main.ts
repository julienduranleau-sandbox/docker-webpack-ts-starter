import externalFn from "./otherFile"

function boot(a: string) {
  console.log(externalFn(a))
}

boot('Hello World')
