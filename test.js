const maxArea = (height) => {
  if (!height) return 0;

  let start = 0;
  let end = height.length - 1;
  let area = max = 0;

  while (start < end) {
    while (height[start] >= height[start + 1]) {
      if (start >= end) return max;
      ++start;
    }

    area = (end - start) * Math.min(height[start], height[end]);
    if (area > max) max = area;
    ++start;
      
    while (height[end] >= height[end - 1]) {
      if (start >= end) return max;
      --end;
    }

    area = (end - start) * Math.min(height[start], height[end]);
    if (area > max) max = area;
    --end;
  }

  return max;
};

maxArea([1,8,6,2,5,4,8,3,7])