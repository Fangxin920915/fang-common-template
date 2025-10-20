# 通用工具

常用的通用工具函数。

## hello

显示问候消息。

### 类型定义

```typescript
function hello(to?: string): string
```

### 参数

- `to` - 问候对象，默认为 `'World'`

### 返回值

- `string` - 问候消息

### 示例

```typescript
import { hello } from '@fang-common/utils'

hello() // 弹出 "Hello World!"
hello('Vue') // 弹出 "Hello Vue!"
```

## random

生成指定范围内的随机整数。

### 类型定义

```typescript
function random(min: number, max: number): number
```

### 参数

- `min` - 最小值
- `max` - 最大值

### 返回值

- `number` - 随机整数

### 示例

```typescript
import { random } from '@fang-common/utils'

random(1, 10) // 返回 1-10 之间的随机整数
random(0, 100) // 返回 0-100 之间的随机整数
```

## concatArray

合并多个数组。

### 类型定义

```typescript
function concatArray(arr1: number[], arr2: number[]): number[]
```

### 参数

- `arr1` - 第一个数组
- `arr2` - 第二个数组

### 返回值

- `number[]` - 合并后的数组

### 示例

```typescript
import { concatArray } from '@fang-common/utils'

concatArray([1, 2], [3, 4]) // 返回 [1, 2, 3, 4]
```
