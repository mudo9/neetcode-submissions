class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_map = {}
        freq_array = []
        for i in nums:
            frequency_map[i] = frequency_map.get(i, 0) + 1
        
        for i in frequency_map:
            freq_array.append([i,frequency_map[i]])

        freq_array.sort(key = lambda x:x[1], reverse = True)
        
        #freq_array.sort((a,b) => b[1] - a[1])
        return [pair[0] for pair in freq_array[:k]]
        