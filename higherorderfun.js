const radius = [3,1,2,4];
let ans =[];
for(i in radius){
    ans.push((radius[i]*radius[i])*3.14);
}
console.log(ans);