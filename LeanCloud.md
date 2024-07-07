# 一.上传对象到云端
## 1.构建对象

```javascript
// 构建ClassName类的实例object
const object = new AV.Object("ClassName");
```

## 2.设置属性

```javascript
// 设置属性
object.set("title", "吃饭");
object.set("content", "今天吃什么?");
```
此时object内容如下:
```
{
    "title": "吃饭",
    "content": "今天吃什么?"
      "ACL": {
    "*": {
      "read": true
    }
  },
    "createdAt": "***",
    "updatedAt": "***"
    "objectId": "***"
}
```

## 3.保存对象

```javascript
// 保存对象
object.save().then(() => {
  console.log(`保存成功objectId: ${todo.id}:`);
}, (error) => {
  console.error(`保存失败error: ${error.message}`);
});
```

# 二.查询对象

## 1.构建查询

```javascript
// 构建查询实例query
const query = new AV.Query("ClassName");
```

## 2.查询单个

```javascript
// 取出对应objectId的对象
query.get("objectId").then((object) => {
  console.log(`取回成功object: ${object.toJSON()}`);
}, (error) => {
  console.error(`取回失败error: ${error.message}`);
});
```

## 3.查询多个

```javascript
// 获取所有符合条件的对象(返回结果为包含所有对应对象的数组)
query.equalTo("key", "value").find() // 获取所有 [键] 为 [值] 的 对象
query.notEqualTo("key", "value").find()// 获取所有 [键] 不为 [值] 的 对象
query.greaterThan("key", "value").find()// 获取所有 [键] 大于 [值] 的 对象
query.lessThan("key", "value").find()// 获取所有 [键] 小于 [值] 的 对象
query.greaterThanOrEqualTo("key", "value").find()// 获取所有 [键] 大于等于 [值] 的 对象
query.lessThanOrEqualTo("key", "value").find() // 获取所有 [键] 小于等于 [值] 的 对象

query.startsWith("title", "lunch"); // 获取所有 title 字段以 "lunch" 开头的对象
query.endsWith("title", "dinner"); // 获取所有 title 字段以 "dinner" 结尾的对象
query.contains("title", "food"); // 获取所有 title 字段包含 "food" 的对象 
query.matches("key", regExp); // 获取所有 key 字段符合 regExp正则 的对象
```

## 4.查询限制

```javascript
// 设置结果的条件
query.first(); // 仅返回第一个结果
query.last(); // 仅返回最后一个结果

query.limit(10); // 限制返回结果的数量为10
query.skip(10); // 跳过前面10个结果 => 用于进行翻页操作
query.ascending("key"); // 按 key 升序排序
query.descending("key"); // 按 key 降序排序
```

## 5.只查询属性

```javascript
// 查询属性
query.select(["key1", "key2"]); // 仅返回 key1 和 key2 的属性
```
## 6.只查询数量

```javascript
// 查询数量
query.count()
```
# 三.删除对象

```javascript
// 获取对象
const todo = AV.Object.createWithoutData("Todo", "582570f38ac247004f39c24b");
// 只删除属性
todo.unset("priority");
todo.save();
// 直接删除对象
todo.destroy();

```