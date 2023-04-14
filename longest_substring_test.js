function lengthOfLongestSubstring(s) {
    let left = 0;
    let right = 0;
    let seen = new Set();
    let max_len = 0;

    while (right < s.length) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            right++;
            max_len = Math.max(max_len, right - left);
        } else {
            seen.delete(s[left]);
            left++;
        }
    }
    console.log(max_len);
}


//Input: s = "bbbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1
lengthOfLongestSubstring("bbbbbb");

//Input: s = "bbbbbb"
//Output: 3
//Explanation: The answer is "abc"/"bca"/"cab", with the length of 3.
lengthOfLongestSubstring("abcabcbb");

//Input: s = "babababababa"
//Output: 3
//Explanation: The answer is "ab"/"ba", with the length of 2.
lengthOfLongestSubstring("bababa");
