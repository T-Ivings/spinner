const spinner = () => {
  let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ' , '\r|   ', '\n'];
  let n = 100;
  for(const char of arr){
     setTimeout(() => {
       process.stdout.write(char);
     }, n += 200);
  }
}
spinner();