var nums = [3,2,4];
var target = 6;
var twoSum = function(nums, target) {
    let result = [];
    for(let i =0; i<nums.length;i++){
        let key = target -  nums[i];
        let j = nums.indexOf(key);
        console.log(j)
        if(j !== -1 && j!==i) {

            result.push(i,j)

            return result;
        }
    }


};
twoSum(nums, target);