// Recursion & Dynamic Programming - Deep Interview Problems
export const recursionDPAssignments = [
  {
    id: 'rec-1',
    title: 'Sum of Digits (Recursive)',
    difficulty: 'Easy',
    description: 'Calculate sum of digits in a number using recursion. Foundation for recursive thinking.',
    hints: [
      'Base case: single digit number',
      'Recursive: last digit + sum of remaining digits',
      'Use % 10 to get last digit, // 10 to remove it'
    ],
    starterCode: `def sum_digits(n):
    """
    Calculate sum of digits recursively.
    
    sum_digits(123) -> 6 (1 + 2 + 3)
    sum_digits(9999) -> 36
    """
    # Your code here:
    pass

# Test
print(sum_digits(123))    # 6
print(sum_digits(9999))   # 36
print(sum_digits(5))      # 5
print(sum_digits(10001))  # 2
`,
    solution: `def sum_digits(n):
    """Calculate sum of digits recursively."""
    n = abs(n)  # Handle negative numbers
    
    # Base case: single digit
    if n < 10:
        return n
    
    # Recursive case: last digit + sum of rest
    return n % 10 + sum_digits(n // 10)

print(sum_digits(123))
print(sum_digits(9999))
print(sum_digits(5))
print(sum_digits(10001))`
  },
  {
    id: 'rec-2',
    title: 'Power Function',
    difficulty: 'Medium',
    description: 'Implement power(x, n) using recursion with O(log n) complexity. Asked at Google, Microsoft.',
    hints: [
      'x^n = x^(n/2) * x^(n/2) if n is even',
      'x^n = x * x^(n-1) if n is odd',
      'Handle negative exponents'
    ],
    starterCode: `def power(x, n):
    """
    Calculate x^n efficiently using recursion.
    Must be O(log n) time complexity!
    
    power(2, 10) -> 1024
    power(2, -2) -> 0.25
    """
    # Your code here:
    pass

# Test
print(power(2, 10))   # 1024
print(power(2, -2))   # 0.25
print(power(3, 5))    # 243
print(power(5, 0))    # 1
`,
    solution: `def power(x, n):
    """O(log n) power calculation using recursion."""
    # Base cases
    if n == 0:
        return 1
    if n < 0:
        return 1 / power(x, -n)
    
    # Recursive case
    half = power(x, n // 2)
    
    if n % 2 == 0:
        return half * half
    else:
        return x * half * half

print(power(2, 10))
print(power(2, -2))
print(power(3, 5))
print(power(5, 0))`
  },
  {
    id: 'rec-3',
    title: 'Climbing Stairs',
    difficulty: 'Medium',
    description: 'Classic DP problem: Count ways to climb n stairs taking 1 or 2 steps at a time. Asked at Amazon, Facebook.',
    hints: [
      'To reach step n, you came from n-1 or n-2',
      'ways(n) = ways(n-1) + ways(n-2)',
      'Use memoization to avoid recalculating'
    ],
    starterCode: `def climb_stairs(n):
    """
    Count distinct ways to climb n stairs.
    Each time you can climb 1 or 2 steps.
    
    n=1: 1 way (1)
    n=2: 2 ways (1+1, 2)
    n=3: 3 ways (1+1+1, 1+2, 2+1)
    """
    # Your code here:
    pass

# Test
print(climb_stairs(1))   # 1
print(climb_stairs(2))   # 2
print(climb_stairs(3))   # 3
print(climb_stairs(5))   # 8
print(climb_stairs(10))  # 89
`,
    solution: `def climb_stairs(n):
    """Count ways to climb stairs using DP."""
    if n <= 2:
        return n
    
    # DP with space optimization
    prev2, prev1 = 1, 2
    
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return prev1

# Alternative with memoization:
# def climb_stairs_memo(n, memo={}):
#     if n in memo:
#         return memo[n]
#     if n <= 2:
#         return n
#     memo[n] = climb_stairs_memo(n-1) + climb_stairs_memo(n-2)
#     return memo[n]

print(climb_stairs(1))
print(climb_stairs(2))
print(climb_stairs(3))
print(climb_stairs(5))
print(climb_stairs(10))`
  },
  {
    id: 'rec-4',
    title: 'House Robber',
    difficulty: 'Medium',
    description: 'DP classic: Maximum money from non-adjacent houses. Asked at LinkedIn, Airbnb, Google.',
    hints: [
      'Cannot rob adjacent houses',
      'For each house: rob it + best from i-2, or skip and take best from i-1',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i])'
    ],
    starterCode: `def rob(nums):
    """
    Maximum money you can rob without robbing adjacent houses.
    
    [1,2,3,1] -> 4 (rob house 0 and 2: 1+3)
    [2,7,9,3,1] -> 12 (rob house 0, 2, 4: 2+9+1)
    """
    # Your code here:
    pass

# Test
print(rob([1, 2, 3, 1]))       # 4
print(rob([2, 7, 9, 3, 1]))    # 12
print(rob([2, 1, 1, 2]))       # 4
print(rob([1]))                 # 1
`,
    solution: `def rob(nums):
    """House robber using DP with O(1) space."""
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    # prev2 = max money up to i-2
    # prev1 = max money up to i-1
    prev2, prev1 = 0, nums[0]
    
    for i in range(1, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2 = prev1
        prev1 = current
    
    return prev1

print(rob([1, 2, 3, 1]))
print(rob([2, 7, 9, 3, 1]))
print(rob([2, 1, 1, 2]))
print(rob([1]))`
  },
  {
    id: 'rec-5',
    title: 'Coin Change',
    difficulty: 'Hard',
    description: 'Find minimum coins needed to make amount. Classic DP problem asked everywhere.',
    hints: [
      'dp[amount] = minimum coins to make that amount',
      'For each coin, dp[i] = min(dp[i], dp[i-coin] + 1)',
      'Return -1 if impossible'
    ],
    starterCode: `def coin_change(coins, amount):
    """
    Minimum number of coins to make up amount.
    Return -1 if not possible.
    
    coins=[1,2,5], amount=11 -> 3 (5+5+1)
    coins=[2], amount=3 -> -1 (impossible)
    """
    # Your code here:
    pass

# Test
print(coin_change([1, 2, 5], 11))  # 3
print(coin_change([2], 3))         # -1
print(coin_change([1], 0))         # 0
print(coin_change([1, 2, 5], 100)) # 20
`,
    solution: `def coin_change(coins, amount):
    """Coin change using bottom-up DP."""
    # dp[i] = min coins to make amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins to make 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i and dp[i - coin] != float('inf'):
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1, 2, 5], 11))
print(coin_change([2], 3))
print(coin_change([1], 0))
print(coin_change([1, 2, 5], 100))`
  },
  {
    id: 'rec-6',
    title: 'Longest Increasing Subsequence',
    difficulty: 'Hard',
    description: 'Find length of longest strictly increasing subsequence. FAANG favorite!',
    hints: [
      'dp[i] = LIS ending at index i',
      'For each i, check all j < i where nums[j] < nums[i]',
      'O(n²) solution, O(n log n) exists with binary search'
    ],
    starterCode: `def length_of_lis(nums):
    """
    Find length of longest increasing subsequence.
    
    [10,9,2,5,3,7,101,18] -> 4 ([2,3,7,101] or [2,5,7,101])
    [0,1,0,3,2,3] -> 4 ([0,1,2,3])
    """
    # Your code here:
    pass

# Test
print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))  # 4
print(length_of_lis([0, 1, 0, 3, 2, 3]))            # 4
print(length_of_lis([7, 7, 7, 7]))                   # 1
`,
    solution: `def length_of_lis(nums):
    """LIS using O(n²) DP."""
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n  # Each element is LIS of length 1
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))
print(length_of_lis([0, 1, 0, 3, 2, 3]))
print(length_of_lis([7, 7, 7, 7]))`
  },
  {
    id: 'rec-7',
    title: 'Generate Parentheses',
    difficulty: 'Medium',
    description: 'Generate all valid combinations of n pairs of parentheses. Classic backtracking.',
    hints: [
      'Use backtracking with open/close count',
      'Can add ( if open < n',
      'Can add ) if close < open'
    ],
    starterCode: `def generate_parentheses(n):
    """
    Generate all valid parentheses combinations.
    
    n=1: ["()"]
    n=2: ["(())", "()()"]
    n=3: ["((()))", "(()())", "(())()", "()(())", "()()()"]
    """
    # Your code here:
    pass

# Test
print(generate_parentheses(1))  # ['()']
print(generate_parentheses(2))  # ['(())', '()()']
print(generate_parentheses(3))  # 5 combinations
`,
    solution: `def generate_parentheses(n):
    """Generate valid parentheses using backtracking."""
    result = []
    
    def backtrack(current, open_count, close_count):
        if len(current) == 2 * n:
            result.append(current)
            return
        
        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)
    
    backtrack('', 0, 0)
    return result

print(generate_parentheses(1))
print(generate_parentheses(2))
print(generate_parentheses(3))`
  },
  {
    id: 'rec-8',
    title: 'Subset Sum',
    difficulty: 'Medium',
    description: 'Check if any subset sums to target. Classic recursion to DP problem.',
    hints: [
      'For each element: include or exclude',
      'dp[i][s] = can we make sum s using first i elements',
      'Base: dp[0][0] = True'
    ],
    starterCode: `def can_sum(nums, target):
    """
    Check if any subset of nums sums to target.
    
    [3, 34, 4, 12, 5, 2], target=9 -> True (4+5)
    [3, 34, 4, 12, 5, 2], target=30 -> False
    """
    # Your code here:
    pass

# Test
print(can_sum([3, 34, 4, 12, 5, 2], 9))   # True
print(can_sum([3, 34, 4, 12, 5, 2], 30))  # False
print(can_sum([1, 2, 3], 6))              # True
print(can_sum([1, 2, 3], 7))              # False
`,
    solution: `def can_sum(nums, target):
    """Subset sum using DP."""
    # dp[s] = can we make sum s
    dp = [False] * (target + 1)
    dp[0] = True  # Empty subset sums to 0
    
    for num in nums:
        # Iterate backwards to avoid using same number twice
        for s in range(target, num - 1, -1):
            if dp[s - num]:
                dp[s] = True
    
    return dp[target]

print(can_sum([3, 34, 4, 12, 5, 2], 9))
print(can_sum([3, 34, 4, 12, 5, 2], 30))
print(can_sum([1, 2, 3], 6))
print(can_sum([1, 2, 3], 7))`
  }
];

export default recursionDPAssignments;
